from django.urls import path
from .views import cv_view

urlpatterns = [
    path('', cv_view, name='cv_view'),
    path('cv', cv_view, name='cv')
]