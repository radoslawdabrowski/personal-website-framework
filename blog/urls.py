from django.urls import path

from .views import blog_list_view, blog_single_view


urlpatterns = [
    path('', blog_list_view, name='blog_list_view'),
    path('<str:name>/', blog_single_view, name='blog_single_view')
]
