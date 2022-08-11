from rest_framework.generics import ListCreateAPIView

from apps.patient.models import PatientModel
from apps.patient.serializers import PatientSerializer

from rest_framework.permissions import AllowAny
from core.permissions.user_permission import IsStaffPermission


class PatientListCreateView(ListCreateAPIView):
    serializer_class = PatientSerializer
    queryset = PatientModel.objects.all()
    permission_classes = (AllowAny,)
