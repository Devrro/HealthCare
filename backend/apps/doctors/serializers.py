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
        fields = ("doctors",)
        # extra_kwargs = {'id': {'read_only': True}}


