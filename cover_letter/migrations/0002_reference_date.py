# Generated by Django 2.1.7 on 2019-05-21 13:34

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cover_letter', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='reference',
            name='date',
            field=models.DateField(default=datetime.date.today),
        ),
    ]
