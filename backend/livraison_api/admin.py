from django.contrib import admin
from .models import *

@admin.register(Livraison)
class LivraisonAdmin(admin.ModelAdmin):
    list_display = ('name', 'taille', 'status', 'ref')
    search_fields = ('destination', 'ref')
    list_filter = ('date', 'taille', 'status')

    def name(self, livraison):
        return str(livraison)
    

@admin.register(Destination)
class DestinationAdmin(admin.ModelAdmin):
    list_display = ('lieu', 'favorite')
    list_filter = ('favorite',)
    list_editable = ('favorite',)
    search_fields = ('lieu',)