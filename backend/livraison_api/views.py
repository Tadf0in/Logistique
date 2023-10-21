from rest_framework.views import APIView, Response, status
from .serializers import *


class LivraisonsView(APIView):
    def get(self, request):
        if 'start' in request.GET and 'end' in request.GET:
            livraisons = Livraison.objects.filter(date__range=[request.GET['start'], request.GET['end']]).order_by('destination__lieu')
        else:
            livraisons = Livraison.objects.all().order_by('destination__lieu')
        serializer = LivraisonSerializer(livraisons, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        data = request.data
        destination, new_destination = Destination.objects.get_or_create(lieu=data['destination']) 
        if destination:
            data['destination'] = destination.__dict__
        else:
            data['destination'] = new_destination.__dict__

        serializer = LivraisonSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            livraison = serializer.create(request.data)
            if livraison is not None:
                return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)


class DestinationsView(APIView):
    def get(self, request):
        if 'favorite' in request.GET:
            destinations = Destination.objects.filter(favorite=True).order_by('lieu')
        else:
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
    

class GetAll(APIView):
    def get(self, request):
        return Response({
            'destinations': DestinationsView().get(request).data,
            'livraisons' : LivraisonsView().get(request).data
        }, status=status.HTTP_200_OK)
        