from django.urls import path

from blog.views import blog_view, single_blog_view, publish_comment

urlpatterns = [
    path('', blog_view, name='blog_view'),
    path('publish/', publish_comment),
    path('<slug:url>/', single_blog_view, name='single_blog_view')
]