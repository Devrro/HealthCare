from typing import Type

from django.contrib.auth import get_user_model
from rest_framework.fields import SerializerMethodField

from rest_framework.serializers import ModelSerializer

from apps.users.models import ProfileModel

UserModel = get_user_model()


class ProfileSerializer(ModelSerializer):
    class Meta:
        model = ProfileModel
        exclude = ('user',)


class AvatarSerializer(ModelSerializer):
    class Meta:
        model = ProfileModel
        fields = ('profile_picture',)


class UserSerializer(ModelSerializer):
    profile = ProfileSerializer()

    class Meta:
        model = UserModel
        fields = (
            'id',
            'is_staff',
            'is_superuser',
            'created_at',
            'updated_at',
            'email',
            'password',
            'profile',
        )
        read_only_fields = (
            'id',
            'is_staff',
            'is_superuser',
            'created_at',
            'updated_at',
            'profile',
        )
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        profile = validated_data.pop('profile')
        user = UserModel.objects.create_user(**validated_data)
        ProfileModel.objects.create(**profile, user=user)
        return user

class UserIdSerializer(ModelSerializer):
    last_name = SerializerMethodField()
    first_name = SerializerMethodField()

    class Meta:
        model = UserModel
        fields = ('id', 'first_name', 'last_name')

    def get_last_name(self, obj: Type[UserModel]):
        return obj.profile.last_name

    def get_first_name(self, obj: Type[UserModel]):
        return obj.profile.first_name

