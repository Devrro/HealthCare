# Generated by Django 4.1 on 2022-08-11 12:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profilemodel',
            name='bound_users',
        ),
    ]