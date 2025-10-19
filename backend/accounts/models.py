from django.contrib.auth.models import User
from django.db import models


# class AUser(User):
#     password_hash = models.CharField(max_length=512, blank=True)
#     is_verified = models.BooleanField()


class Profile(models.Model):
    class ZodiacSign(models.TextChoices):
        ARIES = 'ARI'
        TAURUS = 'TAU'
        GEMINI = 'GEM'
        CANCER = 'CAN'
        LEO = 'LEO'
        VIRGO = 'VIR'
        LIBRA = 'LIB'
        SCORPIO = 'SCO'
        SAGITTARIUS = 'SAG'
        CAPRICORN = 'CAP'
        AQUARIUS = 'AQU'
        PISCES = 'PIS'

    # user = models.OneToOneField(User, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING)  # idk what to do for delete thing
    profile_picture = models.ImageField(upload_to='profile_pics/', blank=True)
    birth_date = models.DateField(null=True)
    zodiac = models.CharField(max_length=3, choices=ZodiacSign, blank=True)
    gender = models.CharField(max_length=16, blank=True)
    attraction = models.CharField(max_length=16, blank=True)
    relationship = models.CharField(max_length=64, blank=True)
    location = models.CharField(max_length=255, blank=True)
    bio = models.TextField(blank=True)
    last_updated = models.DateTimeField(null=True)

    def __str__(self):
        return f'{self.user.username}\'s profile'


class Preferences(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    min_age = models.PositiveSmallIntegerField()
    max_age = models.PositiveSmallIntegerField()
    max_distance = models.PositiveSmallIntegerField() # in kilometers, max = 20,000
    gender = models.CharField(max_length=64, blank=True)


class ProfileFeatures(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    key = models.CharField(max_length=255, blank=True)
    value = models.TextField(blank=True)

    def __str__(self):
        return f'{self.user.username} has {self.key} of {self.value}'


class Match(models.Model):
    user1 = models.ForeignKey(User, related_name='user1_matches', on_delete=models.CASCADE)
    user2 = models.ForeignKey(User, related_name='user2_matches', on_delete=models.CASCADE)
    matched_at = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=127, blank=True)

    def __str__(self):
        return f'Match between {self.user1.username} and {self.user2.username}'


class ChatsConversations(models.Model):
    users = models.AutoField


class Message(models.Model):
    sender = models.ForeignKey(User, related_name='sender_id', on_delete=models.DO_NOTHING)
    timestamp = models.DateTimeField(null=True)
    chat_convo = models.ForeignKey(ChatsConversations, related_name='chat_convo', on_delete=models.DO_NOTHING)
    contents = models.TextField(max_length=65535, blank=True)

