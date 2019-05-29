from django.conf.urls import url, include
from .views import concept, contact, events, menu

urlpatterns = [
        url(r'^concept/$', concept, name='concept'),
        url(r'^events/$', events, name='events'),
        url(r'^contact/$', contact, name='contact'),
        url(r'^menu/$', menu, name='menu'),

    ]