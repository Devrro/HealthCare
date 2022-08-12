from django.contrib.auth import get_user_model
from django.db import models

from apps.patients.models import PatientModel

UserModel = get_user_model()


class DoctorModel(models.Model):
    class Meta:
        db_table = 'doctors'

    specialization = models.CharField(max_length=255)
    doctors = models.OneToOneField(UserModel, on_delete=models.CASCADE, related_name='doctors', blank=True)
    patients = models.ManyToManyField(PatientModel, related_name='patients')
