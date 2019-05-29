from django.urls import path

from contact.views import contact_view, send_email

urlpatterns = [
    path('', contact_view, name='contact_view'),
    path('send/', send_email)
]
