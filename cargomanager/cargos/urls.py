from rest_framework import routers
from .api import CargoViewSet

router = routers.DefaultRouter()
router.register('api/cargos', CargoViewSet, 'cargos')

urlpatterns = router.urls