from rest_framework import serializers
from .models import *


class DestinationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Destination
        fields = '__all__'


class PreparateurSerializer(serializers.ModelSerializer):
    class Meta:
        model = Preparateur
        fields = '__all__'


class LivraisonSerializer(serializers.ModelSerializer):
    destination = DestinationSerializer()
    preparateur = PreparateurSerializer(required=False, allow_null=True)

    def create(self, data):
        data['destination'] = Destination.objects.get(pk=data['destination']['id'])
        new_livraison = Livraison(**data)
        new_livraison.save()
        return new_livraison

    class Meta:
        model = Livraison
        fields = '__all__'
