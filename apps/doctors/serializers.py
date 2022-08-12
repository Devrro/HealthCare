from rest_framework.serializers import BaseSerializer, ModelSerializer

from apps.doctors.models import DoctorModel
from apps.users.serializers import UserSerializer


class DoctorSerializer(ModelSerializer):
    doctors = UserSerializer(many=False, read_only=True)

    class Meta:
        model = DoctorModel
        fields = ('doctors', 'patients')

