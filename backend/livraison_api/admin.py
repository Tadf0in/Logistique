from django.contrib import admin
from .models import *

@admin.register(Livraison)
class LivraisonAdmin(admin.ModelAdmin):
    list_display = ('name', 'taille', 'status', 'ref')
    search_fields = ('destination', 'ref')
    list_filter = ('date', 'taille', 'status')

    def name(self, livraison):
        return str(livraison)