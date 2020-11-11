from rest_framework import routers
from .api import CargoViewSet, CargoMeViewSet

router = routers.DefaultRouter()
router.register('api/cargos/me', CargoMeViewSet, 'me_cargos')
router.register('api/cargos', CargoViewSet, 'cargos')

urlpatterns = router.urls