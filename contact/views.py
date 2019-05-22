from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from contact.serializers import ContactSerializer
from django.utils.translation import gettext_lazy as _

from django.core.mail import send_mail
from root.utils import get_attribute


def contact_view(request, *args):
    return render(request, 'contact.html')


def map_view_context():
    return {}


def data_view_context():
    return {}


# Api endpoint
@api_view(['POST'])
def send_email(request):
    serializer = ContactSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        send_mail(
            'Contact Form',
            serializer.data.get('message'),
            serializer.data.get('email'),
            [get_attribute('ATTRIBUTE_EMAIL').value],
            fail_silently=True
        )
        return Response(_("Your message was sent!"), status=status.HTTP_201_CREATED)
    return Response(serializer.errors,
                    status=status.HTTP_400_BAD_REQUEST)
