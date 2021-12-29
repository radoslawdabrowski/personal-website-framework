from django.urls import path
from .views import portfolio_view

urlpatterns = [
    path('', portfolio_view, name='projects_view')
]