from django.urls import path
from . import views


urlpatterns = [
    path('', views.LivraisonsView.as_view(), name='livraisons'),
    path('<int:id>', views.LivraisonView.as_view(), name='livraison'),
    path('all', views.GetAll.as_view(), name='all'),
    path('destinations', views.DestinationsView.as_view(), name='destinations'),
    path('preparateurs', views.PreparateursView.as_view(), name='preparateurs'),

    path('update/destinations', views.UpdateDestinations.as_view(), name='update-destinations'),
    path('update/semaines', views.SemaineView.as_view(), name='update-semaines'),
]
