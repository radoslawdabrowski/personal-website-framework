from django.shortcuts import render

from attributes.models import Attribute
from .models import Hobby, Job, School, Skill


def cv_view(request, *args, **kwargs):
    return render(request, 'cv.html', {})


def education_view_context():
    return {
        "schools": Job.objects.all().order_by("-start_date")
    }


def experience_view_context():
    return {
        'jobs': Job.objects.all().order_by("-start_date")
    }


def interests_view_context():
    return {
        "hobbies": Hobby.objects.all()
    }


def skills_view_context():
    return {}


def skill_view_context(skill, wow):
    return {
        'item': skill,
        'wow': wow
    }


def school_view_context(school, wow):
    return {
        'item': school,
        'wow': wow
    }


def job_view_context(job, wow):
    return {
        'item': job,
        'wow': wow
    }


def hobby_view_context(hobby):
    return {
        'item': hobby
    }
