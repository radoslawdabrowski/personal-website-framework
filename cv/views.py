from django.shortcuts import render

from attributes.models import AttributeEntity


def cv_view(request, *args, **kwargs):
    return render(request, 'cv.html', {})


def education_view_context():
    return {}


def experience_view_context():
    return {}


def interests_view_context():
    return {}


def skills_view_context():
    return {}
