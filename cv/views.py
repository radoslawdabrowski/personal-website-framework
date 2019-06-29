from django.shortcuts import render

from root.utils import split_list
from .models import Hobby, Job, School, Skill


def cv_view(request, *args, **kwargs):
    return render(request, 'cv.html', {})


def education_view_context():
    return {
        "schools": School.objects.all().order_by("-start_date")
    }


def experience_view_context():
    return {
        'jobs': Job.objects.all().order_by("-start_date")
    }


def interests_view_context():
    return {
        'hobbies': Hobby.objects.all()
    }


def skills_view_context():
    skills = Skill.objects.all().order_by('category')
    first_column, second_column = split_list(skills)

    return {
        'first_column': first_column,
        'second_column': second_column
    }


def skill_view_context(skill):
    return {
        'item': skill
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


def date_view_context(start, end):
    return {
        "start_date": start,
        "end_date": end
    }
