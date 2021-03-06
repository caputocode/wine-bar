from django.conf.urls import url, include
from .views import register, login, logout, profile, retrieve_order
from accounts import url_reset

urlpatterns = [
    url(r'^register/$', register, name='register'),
    url(r'^login/$', login, name='login'),
    url(r'^logout/$', logout, name='logout'),
    url(r'^profile/$', profile, name='profile'),
    url(r'^/password_reset/', include(url_reset)),
    url(r'^(?P<pk>\d+)/orders/$', retrieve_order, name='retrieve_order'),
    
    ]