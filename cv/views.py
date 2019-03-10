from django.shortcuts import render

# Create your views here.
from django.shortcuts import render


# Create your views here.
def cv_view(request, *args, **kwargs):
    return render(request, 'cv.html', {})


def education_view_context():
    return {}


def experience_view_context():
    return {}


def intertests_view_context():
    return {}
