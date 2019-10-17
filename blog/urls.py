from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'^$', views.post_list, name='post_list'),
    url(r'^posts/(?P<pk>\d+)/$', views.post_detail, name='post_detail'),
    url(r'^posts/new/$', views.post_new, name='post_new'),
    url(r'^posts/(?P<pk>\d+)/edit/$', views.post_edit, name='post_edit'),
]
