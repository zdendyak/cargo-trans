from rest_framework import routers
from .api import TransportMeViewSet, TransportViewSet

router = routers.DefaultRouter()
router.register('api/my-transports', TransportMeViewSet, 'my_transport')
router.register('api/transports', TransportViewSet, 'transports')

urlpatterns = router.urls
