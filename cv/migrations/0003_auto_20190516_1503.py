# Generated by Django 2.1.7 on 2019-05-16 13:03

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cv', '0002_hobby_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='skill',
            name='name',
            field=models.TextField(default='ERROR', max_length=50),
        ),
        migrations.AddField(
            model_name='skill',
            name='progress',
            field=models.IntegerField(default=0, validators=[django.core.validators.MaxValueValidator(100), django.core.validators.MinValueValidator(0)]),
        ),
    ]
