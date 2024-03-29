"""public_python URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from . import settings
from django.contrib import admin
from django.urls import include, path
from django.contrib.staticfiles.urls import static

urlpatterns = [
    path('', include('cv.urls')),
    path("cover-letter/", include('cover_letter.urls')),
    path("contact/", include("contact.urls")),
    path("blog/", include("blog.urls")),
    path("projects/", include("portfolio.urls")),
    *static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
]

if settings.DEBUG is True:
    urlpatterns += [path('admin/', admin.site.urls)]
