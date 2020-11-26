from rest_framework import routers
from .api import CargoViewSet, CargoMeViewSet

router = routers.DefaultRouter()
router.register('api/my-cargos', CargoMeViewSet, 'me_cargos')
router.register('api/cargos', CargoViewSet, 'cargos')

urlpatterns = router.urls