from rest_framework.views import APIView, Response, status
from .serializers import *


class LivraisonsView(APIView):
    def get(self, request):
        livraisons = Livraison.objects.filter(date__range=[request.GET['start'], request.GET['end']])
        serializer = LivraisonSerializer(livraisons, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    

class DestinationsView(APIView):
    def get(self, request):
        destinations = Destination.objects.order_by('lieu')
        serializer = DestinationSerializer(destinations, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class UpdateDestinations(APIView):
    def post(self, request):
        with open("destinations.txt", 'r', encoding='utf-8') as file:
            for line in file:
                if not Destination.objects.filter(lieu=line.strip()).exists():
                    new_destination = Destination()
                    new_destination.lieu = line.strip()
                    new_destination.favorite = False
                    new_destination.save()
        return Response(status=status.HTTP_201_CREATED)