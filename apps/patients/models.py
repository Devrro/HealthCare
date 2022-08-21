from django.contrib.auth import get_user_model
from django.db import models

UserModel = get_user_model()


class PatientModel(models.Model):
    class Meta:
        db_table = 'patients'

    disease = models.CharField(max_length=255, blank=True)
    patient = models.OneToOneField(UserModel, on_delete=models.CASCADE, related_name='patient_id')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
