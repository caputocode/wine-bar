from django.conf.urls import url, include
from .views import about, contact, events, menu

urlpatterns = [
        url(r'^about/$', about, name='about'),
        url(r'^events/$', events, name='events'),
        url(r'^contact/$', contact, name='contact'),
        url(r'^menu/$', menu, name='menu'),

    ]