from django.shortcuts import render
from rest_framework import viewsets
from django.contrib.auth.models import User
from .models import Profile, Match
from .serializers import UserSerializer, MatchSerializer
from rest_framework.response import Response
from rest_framework.decorators import action

class UserProfileViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    # Add a custom action to view profiles
    @action(detail=True, methods=['get'])
    def profile(self, request, pk=None):
        user = self.get_object()
        profile = Profile.objects.get(user=user)
        return Response({'bio': profile.bio, 'location': profile.location})

class MatchViewSet(viewsets.ModelViewSet):
    queryset = Match.objects.all()
    serializer_class = MatchSerializer

