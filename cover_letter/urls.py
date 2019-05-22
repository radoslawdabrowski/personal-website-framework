from django.urls import path
from .views import cover_main_view

urlpatterns = [
    path('', cover_main_view, name="cover_main_view")
]