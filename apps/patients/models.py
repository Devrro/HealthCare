from django.contrib.auth import get_user_model
from django.db import models

UserModel = get_user_model()


class PatientModel(models.Model):
    class Meta:
        db_table = 'patients'

    disease = models.CharField(max_length=255)
    patient = models.OneToOneField(UserModel, on_delete=models.CASCADE, related_name='patient')
