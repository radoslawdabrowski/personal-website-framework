from django.urls import path

from blog.views import blog_view, single_blog_view

urlpatterns = [
    path('', blog_view, name='blog_view'),
    path('<slug:url>/', single_blog_view, name='single_blog_view')
]