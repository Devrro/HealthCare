from django.contrib.auth import get_user_model
from django.db import models

# Create your models here.

UserModel = get_user_model()


class DoctorModel(models.Model):

    class Meta:
        db_table = 'doctors'

    patients = models.ForeignKey(UserModel, on_delete=models.CASCADE, related_name='patients')
    disease = models.CharField(max_length=255)
