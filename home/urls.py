from django.conf.urls import url, include
from .views import index, concept, contact

urlpatterns = [
        url(r'^$', index, name='index'),
        url(r'^concept/$', concept, name='concept'),
        url(r'^contact/$', contact, name='contact'),
    ]