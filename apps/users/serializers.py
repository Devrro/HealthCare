from django.contrib.auth import get_user_model

from rest_framework.serializers import ModelSerializer

from apps.users.models import ProfileModel

UserModel = get_user_model()


class ProfileSerializer(ModelSerializer):

    class Meta:
        model = ProfileModel
        # fields = (
        #     'id',
        #     'age',
        #     'phone_number',
        #     'first_name',
        #     'last_name',
        #     'patient',
        # )
        exclude = ('user',)
        # extra_kwargs = {'patient':{"read_only":True}}


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
