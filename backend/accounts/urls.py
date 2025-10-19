from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserProfileViewSet, MatchViewSet

router = DefaultRouter()
router.register(r'users', UserProfileViewSet)
router.register(r'matches', MatchViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
