from rest_framework.serializers import ModelSerializer

from apps.patient.models import PatientModel
from apps.users.serializers import UserSerializer


class PatientSerializer(ModelSerializer):

    class Meta:
        model = PatientModel
        fields = ('patient',)

    def create(self, validated_data):
        print(validated_data)
        return super().create(validated_data)
