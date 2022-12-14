# Generated by Django 4.1 on 2022-08-17 16:35

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('users', '0002_remove_profilemodel_bound_users'),
        ('patients', '0003_alter_patientmodel_disease'),
    ]

    operations = [
        migrations.CreateModel(
            name='DoctorModel',
            fields=[
                ('specialization', models.CharField(blank=True, max_length=255)),
                ('doctors', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, related_name='doctors', serialize=False, to=settings.AUTH_USER_MODEL)),
                ('patients', models.ManyToManyField(blank=True, related_name='patients', to='patients.patientmodel')),
            ],
            options={
                'db_table': 'doctors',
            },
        ),
    ]
