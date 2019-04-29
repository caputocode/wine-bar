from django.conf.urls import url, include
from .views import display_wines, wine_detail


urlpatterns = [
    url(r'^$', display_wines, name='wines'),
    url(r'^(?P<pk>\d+)/$', wine_detail, name='wine_detail'),
    
    ]