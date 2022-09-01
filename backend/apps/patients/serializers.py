
from rest_framework.serializers import ModelSerializer

from apps.patients.models import PatientModel
from apps.users.serializers import UserSerializer


class PatientSerializer(ModelSerializer):

    patient = UserSerializer(many=False, read_only=False)

    class Meta:
        model = PatientModel
        fields = "__all__"

    