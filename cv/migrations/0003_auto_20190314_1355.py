# Generated by Django 2.1.7 on 2019-03-14 12:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cv', '0002_auto_20190314_1354'),
    ]

    operations = [
        migrations.AlterField(
            model_name='educationentity',
            name='end_date',
            field=models.DateField(blank=True, null=True),
        ),
    ]