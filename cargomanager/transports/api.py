from transports.models import Transport
from rest_framework import viewsets, permissions
from .serializer import TransportSerializer
from django.contrib.auth.models import AnonymousUser


class TransportViewSet(viewsets.ModelViewSet):
  queryset = Transport.objects.all()
  permission_classes = [
    permissions.AllowAny
  ]
  serializer_class = TransportSerializer

  def perform_create(self, serializer):
    if isinstance(self.request.user, AnonymousUser):
      serializer.save(manager=None)
    else:
      serializer.save(manager=self.request.user)

class TransportMeViewSet(viewsets.ModelViewSet):
  permission_classes = [
    permissions.IsAuthenticated
  ]
  serializer_class = TransportSerializer

  def get_queryset(self):
    return self.request.user.transports.all()
  
  def perform_create(self, serializer):
    serializer.save(manager=self.request.user)