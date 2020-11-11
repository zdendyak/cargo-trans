from django.urls import path, include
from .api import RegistrationAPI, LoginAPI, UserAPI, UserViewSet
from knox import views as knox_views

urlpatterns = [
    path('api/auth', include('knox.urls')),
    path('api/auth/register', RegistrationAPI.as_view()),
    path('api/auth/login', LoginAPI.as_view()),
    path('api/auth/user', UserAPI.as_view()),
    path('api/auth/logout', knox_views.LogoutView.as_view(), name='knox_logout')
]

# from rest_framework import routers
# from .api import UserViewSet

# router = routers.DefaultRouter()
# router.register('api/users', UserViewSet, 'users')

# urlpatterns = router.urls
