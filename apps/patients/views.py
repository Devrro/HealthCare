from django.db.models import Q

from rest_framework.generics import ListCreateAPIView
from rest_framework.permissions import AllowAny

from apps.patients.models import PatientModel
from apps.patients.serializers import PatientSerializer


class AllPatientsView(ListCreateAPIView):
    queryset = PatientModel.objects.all().order_by('created_at')
    serializer_class = PatientSerializer
    permission_classes = (AllowAny,)

    def get_queryset(self):
        return self.queryset.filter(Q(patients__isnull=False))


class AddToPatientView(ListCreateAPIView):
    queryset = PatientModel.objects.all()
    serializer_class = PatientSerializer
    # Змінити автентифікація
    permission_classes = (AllowAny,)
