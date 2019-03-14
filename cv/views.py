from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from .models import EducationEntity, AttributeEntity


# Create your views here.
def cv_view(request, *args, **kwargs):
    return render(request, 'cv.html', {})


def education_view_context():
    return {
        'educations': EducationEntity.objects.all().order_by('-start_date')
    }


def experience_view_context():
    return {}


def interests_view_context():
    return {}


def about_view_context():
    return {
        'welcome': AttributeEntity.objects.filter(key='ATTRIBUTE_WEBSITE_WELCOME').get().value
    }


def skills_view_context():
    return {}
