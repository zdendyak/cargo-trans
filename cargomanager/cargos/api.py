from cargos.models import Cargo
from rest_framework import viewsets, permissions
from .serializers import CargoSerializer

class CargoViewSet(viewsets.ModelViewSet):
  queryset = Cargo.objects.all()
  permission_classes = [
    permissions.AllowAny
  ]
  serializer_class = CargoSerializer