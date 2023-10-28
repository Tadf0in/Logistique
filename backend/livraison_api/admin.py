from django.contrib import admin
from .models import *

@admin.register(Livraison)
class LivraisonAdmin(admin.ModelAdmin):
    list_display = ('ref', 'destination', 'date', 'status', 'taille', 'adr')
    search_fields = ('destination__lieu', 'ref')
    list_filter = ('date', 'taille', 'status', 'destination__favorite', 'adr')
    

@admin.register(Destination)
class DestinationAdmin(admin.ModelAdmin):
    list_display = ('lieu', 'id')
    list_filter = ('favorite',)
    filter_horizontal = ('favorite',)
    search_fields = ('lieu',)


@admin.register(Preparateur)
class PreparateurAdmin(admin.ModelAdmin):
    list_display = ('nom',)
    search_fields = ('nom',)