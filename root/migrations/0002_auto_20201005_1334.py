# Generated by Django 3.0.5 on 2020-10-05 13:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cover_letter', '0003_auto_20201005_1334'),
        ('cv', '0010_auto_20201005_1334'),
        ('root', '0001_initial'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Company',
        ),
        migrations.DeleteModel(
            name='SkillCategory',
        ),
    ]
