from rest_framework.serializers import ModelSerializer

from apps.doctors.models import DoctorModel


class PatientSerializer(ModelSerializer):

    class Meta:
        model = DoctorModel
        fields = ('doctor',)

    def create(self, validated_data):
        print(validated_data)
        return super().create(validated_data)
