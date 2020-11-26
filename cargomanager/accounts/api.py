from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer

from django.contrib.auth.models import User

class RegistrationAPI(generics.GenericAPIView):
  serializer_class = RegisterSerializer

  def post(self, request, *args, **kwargs):
    serializer = self.get_serializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = serializer.save()
    return Response({
      "user": UserSerializer(user, context=self.get_serializer_context()).data,
      "token": AuthToken.objects.create(user)[1]
    })

class LoginAPI(generics.GenericAPIView):
  serializer_class = LoginSerializer

  def post(self, request, *args, **kwargs):
    print('LOGIN', request.data)
    serializer = self.get_serializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    print('error', serializer.errors)
    user = serializer.validated_data
    print('user', UserSerializer(user).data)
  
    return Response({
      "user": UserSerializer(user, context=self.get_serializer_context()).data,
      "token": AuthToken.objects.create(user)[1]
    })

class UserAPI(generics.RetrieveAPIView):
  serializer_class = UserSerializer
  permission_classes = [
    permissions.IsAuthenticated,
  ]

  def get_object(self):
    return self.request.user
  
class UserListAPI(generics.ListCreateAPIView):
  queryset = User.objects.all()
  serializer_class = UserSerializer
  permission_classes = [permissions.IsAdminUser]

class UserDetailAPI(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [
      permissions.IsAdminUser
    ]
  