from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, ProfileViewSet, PreferencesViewSet, ProfileFeaturesViewSet, MatchViewSet, ChatsConversationsViewSet, MessageViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'profiles', ProfileViewSet)
router.register(r'preferences', PreferencesViewSet)
router.register(r'features', ProfileFeaturesViewSet)
router.register(r'matches', MatchViewSet)
router.register(r'chats', ChatsConversationsViewSet)
router.register(r'messages', MessageViewSet)


urlpatterns = [
    path('', include(router.urls)),
]
