from django.contrib import admin
from django.urls import path
from . import views
from .views import GetAllInfo_otoAPIView


urlpatterns = [
    path('', views.index, name="index"),
    path('index.html', views.index, name="index"),
    path('index', views.index, name="index"),
    path('about.html', views.about, name="about"),
    path('about', views.about, name="about"),
    path('elements.html', views.element, name="element"),
    path('Error404.html', views.notfound, name="error404"),
    path('Error404', views.notfound, name="error404"),
    # API
    path('list_cars', GetAllInfo_otoAPIView.as_view()),
]


