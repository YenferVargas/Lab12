from .import views
from django.urls import re_path as url

# urlpatterns=[
#     url(r'^libros/$', views.prestamo_list),
#    url(r'^libros/(?P<pk>[0-9]+)/$', views.prestamo_detail),
# ]

from django.urls import path
from . import views

urlpatterns = [
    path('libros/', views.prestamo_list),
    path('libros/<int:pk>/', views.prestamo_detail),
]
