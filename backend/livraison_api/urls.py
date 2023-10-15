from django.urls import path
from . import views


urlpatterns = [
    path('', views.LivraisonsView.as_view(), name='livraisons'),
    path('destinations', views.DestinationsView.as_view(), name='destinations'),
    path('destinations/update', views.UpdateDestinations.as_view(), name='update-destinations'),
]
