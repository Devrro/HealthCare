# Generated by Django 4.1 on 2022-08-17 13:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('patients', '0002_remove_patientmodel_patients_patientmodel_patient'),
    ]

    operations = [
        migrations.AlterField(
            model_name='patientmodel',
            name='disease',
            field=models.CharField(blank=True, max_length=255),
        ),
    ]
