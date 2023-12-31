from django.contrib import admin
from .models import *

@admin.register(Livraison)
class LivraisonAdmin(admin.ModelAdmin):
    list_display = ('name', 'date', 'status', 'taille', 'adr')
    search_fields = ('destination__lieu', 'ref')
    list_filter = ('date', 'taille', 'status', 'destination__favorite', 'adr')

    def name(self, object):
        return str(object)
    

@admin.register(Destination)
class DestinationAdmin(admin.ModelAdmin):
    list_display = ('lieu', 'favorite', 'id')
    list_filter = ('favorite',)
    list_editable = ('favorite',)
    search_fields = ('lieu',)


@admin.register(Preparateur)
class PreparateurAdmin(admin.ModelAdmin):
    list_display = ('nom',)
    search_fields = ('nom',)