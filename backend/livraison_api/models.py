from django.db import models

class Livraison(models.Model):
    destination = models.CharField(max_length=50)
    taille = models.CharField(max_length=4)
    status = models.CharField(max_length=1)
    ref = models.CharField(max_length=50)
    date = models.DateField()

    def __str__(self) -> str:
        return self.destination + ' - ' + str(self.date)