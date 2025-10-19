# from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
# from django.contrib.auth.models import User
from .models import User, Profile, Preferences, ProfileFeatures, Match, ChatsConversations, Message
from .serializers import UserSerializer, ProfileSerializer, PreferencesSerializer, ProfileFeaturesSerializer, MatchSerializer, ChatsConversationsSerializer, MessageSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    # Add a custom action to view profiles
    # @action(detail=True, methods=['get'])
    # def profile(self, request, pk=None):
    #     user = self.get_object()
    #     profile = Profile.objects.get(user=user)
    #     return Response({'bio': profile.bio, 'location': profile.location})

class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

class PreferencesViewSet(viewsets.ModelViewSet):
    queryset = Preferences.objects.all()
    serializer_class = PreferencesSerializer

class ProfileFeaturesViewSet(viewsets.ModelViewSet):
    queryset = ProfileFeatures.objects.all()
    serializer_class = ProfileFeaturesSerializer

class MatchViewSet(viewsets.ModelViewSet):
    queryset = Match.objects.all()
    serializer_class = MatchSerializer

class ChatsConversationsViewSet(viewsets.ModelViewSet):
    queryset = ChatsConversations.objects.all()
    serializer_class = ChatsConversationsSerializer

class MessageViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
