from django.contrib.auth import get_user_model
from django.db import models

# Create your models here.

UserModel = get_user_model()


class PatientModel(models.Model):

    class Meta:
        db_table = 'patient'

    doctor = models.ForeignKey(UserModel, on_delete=models.CASCADE, related_name='doctors')
    disease = models.CharField(max_length=255)
