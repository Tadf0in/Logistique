from rest_framework.views import APIView, Response, status
from .serializers import *


class LivraisonsView(APIView):
    def get(self, request):
        livraisons = Livraison.objects.filter(date__range=[request.GET['start'], request.GET['end']])
        serializer = LivraisonSerializer(livraisons, many=True)
        return Response(serializer.data)

