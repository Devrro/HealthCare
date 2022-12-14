# Generated by Django 4.1 on 2022-08-11 14:18

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('patients', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='patientmodel',
            name='patients',
        ),
        migrations.AddField(
            model_name='patientmodel',
            name='patient',
            field=models.OneToOneField(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='patient', to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
    ]
