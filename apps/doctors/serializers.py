from typing import Type

from django.contrib.auth import get_user_model

from rest_framework.serializers import ModelSerializer, SerializerMethodField

from apps.doctors.models import DoctorModel
from apps.patients.serializers import PatientSerializer
from apps.users.serializers import UserSerializer

UserModel = get_user_model()


class DoctorsSerializer(ModelSerializer):
    doctors = UserSerializer(many=False, read_only=True)
    patients = PatientSerializer(many=True, read_only=True)

    class Meta:
        model = DoctorModel
        fields = ('doctors', 'patients')


class DoctorsSpecializationSerializer(ModelSerializer):
    class Meta:
        model = DoctorModel
        fields = ('id', 'doctors_id', 'specialization',)


class AddToDoctorSerializer(ModelSerializer):

    class Meta:
        model = DoctorModel
        fields = "__all__"
        extra_kwargs = {'id': {'read_only': True}}


class DoctorIdSerializer(ModelSerializer):
    last_name = SerializerMethodField()
    first_name = SerializerMethodField()

    class Meta:
        model = UserModel
        fields = ('id', 'first_name', 'last_name')

    def get_last_name(self, obj: Type[UserModel]):
        return obj.profile.last_name

    def get_first_name(self, obj: Type[UserModel]):
        return obj.profile.first_name
