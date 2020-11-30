from cargos.models import Cargo
from rest_framework import viewsets, permissions
from .serializers import CargoSerializer
from django.contrib.auth.models import AnonymousUser

class CargoViewSet(viewsets.ModelViewSet):
  queryset = Cargo.objects.all()
  permission_classes = [
    permissions.AllowAny
  ]
  serializer_class = CargoSerializer

  def perform_create(self, serializer):
    if not isinstance(self.request.user, AnonymousUser):
      serializer.save(manager=self.request.user)


class CargoMeViewSet(viewsets.ModelViewSet):
  permission_classes = [
    permissions.IsAuthenticated
  ]
  serializer_class = CargoSerializer

  def get_queryset(self):
    return self.request.user.cargos.all()
  
  def perform_create(self, serializer):
    serializer.save(manager=self.request.user)

