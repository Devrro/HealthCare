from django.contrib.auth import get_user_model
from django.db.models import Q

from rest_framework.generics import (
    CreateAPIView,
    DestroyAPIView,
    GenericAPIView,
    ListAPIView,
    ListCreateAPIView,
    UpdateAPIView,
    get_object_or_404,
)
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response

from core.permissions.user_permission import IsDoctorPermission
from apps.doctors.models import DoctorModel
from apps.doctors.serializers import AddToDoctorSerializer, DoctorIdSerializer, DoctorsSerializer
from apps.users.serializers import UserSerializer
from apps.patients.models import PatientModel

UserModel = get_user_model()


class DoctorsListView(ListAPIView):
    queryset = UserModel.objects.all()
    serializer_class = UserSerializer
    permission_classes = (AllowAny,)

    def get_queryset(self):
        qs = self.queryset.filter(Q(doctors__isnull=False))

        return qs
        # print(self.doctor_queryset.query)
        # print(self.queryset.query)
        # user = self.request.user
        # qs = self.queryset.filter(Q())
        # qs = qs.filter(Q())


class AddPatientsToDoctor(UpdateAPIView):
    queryset = DoctorModel.objects.all()
    serializer_class = AddToDoctorSerializer
    permission_classes = (IsAuthenticated, IsDoctorPermission)

    # Змінити автентифікація
    def post(self, request, *args, **kwargs):
        doctor = get_object_or_404(queryset=self.queryset, pk=request.user.id)
        patient_id = self.request.data.get('patient')
        patient = get_object_or_404(PatientModel.objects.all(), id=patient_id)
        doctor.patients.add(patient)
        print(doctor.patients)
        doctor.save()
        return Response({"detail": f'Patient - {patient.id} was added to a doctor {self.request.user}'})
        # return Response({'detail': 'Patient was added'})


class AddToDoctorsView(ListCreateAPIView):
    queryset = DoctorModel.objects.all()
    serializer_class = AddToDoctorSerializer
    # Змінити автентифікація
    permission_classes = (IsAuthenticated,)


class DeleteFromDoctorsView(GenericAPIView):
    queryset = DoctorModel.objects.all()
    serializer_class = AddToDoctorSerializer
    # Змінити автентифікація
    permission_classes = (AllowAny,)

    def delete(self, request, *args, **kwargs):
        doctor = get_object_or_404(self.queryset, pk=kwargs['pk'])
        doctor.delete()
        return Response({'detail': 'Doctor was deleted'}, status=200)


class DoctorListIdView(ListAPIView):
    queryset = UserModel.objects.all()
    serializer_class = DoctorIdSerializer
    permission_classes = (AllowAny,)

    def get_queryset(self):
        return self.queryset.filter(Q(doctors__isnull=False))


class DoctorAndPatientsListView(ListAPIView):
    queryset = DoctorModel.objects.all()
    serializer_class = DoctorsSerializer
    # Змінити автентифікація
    permission_classes = (AllowAny,)
