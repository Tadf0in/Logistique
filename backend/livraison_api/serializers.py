from rest_framework import serializers
from .models import *


class DestinationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Destination
        fields = '__all__'


class LivraisonSerializer(serializers.ModelSerializer):
    destination = DestinationSerializer()

    class Meta:
        model = Livraison
        fields = '__all__'
