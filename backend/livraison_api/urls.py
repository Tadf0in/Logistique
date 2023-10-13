from django.urls import path
from . import views


urlpatterns = [
    path('', views.LivraisonsView.as_view(), name='livraisons'),
]
