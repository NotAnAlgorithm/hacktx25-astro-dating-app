from rest_framework import serializers
# from django.contrib.auth.models import User
from .models import User, Profile, Preferences, ProfileFeatures, Match, ChatsConversations, Message


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'

class PreferencesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Preferences
        fields = '__all__'
        # validators = [Valida]
    def valid_age(self, age: int):
        if not 17 < age < 115:
            raise serializers.ValidationError("invalid age")
        return age

class ProfileFeaturesSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfileFeatures
        fields = '__all__'

class MatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Match
        fields = '__all__'

class ChatsConversationsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChatsConversations
        fields = '__all__'

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = '__all__'
