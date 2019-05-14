from django.shortcuts import render

from attributes.models import AttributeEntity


def cv_view(request, *args, **kwargs):
    return render(request, 'cv.html', {})
