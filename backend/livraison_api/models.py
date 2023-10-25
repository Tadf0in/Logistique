from django.db import models

class Destination(models.Model):
    lieu = models.CharField(max_length=50)
    favorite = models.BooleanField(verbose_name='Favoris', default=False)

    def __str__(self) -> str:
        return self.lieu
    
    
class Livraison(models.Model):
    destination = models.ForeignKey(Destination, on_delete=models.SET_NULL, null=True)
    taille = models.CharField(max_length=15)
    status = models.CharField(max_length=15)
    ref = models.CharField(max_length=50)
    date = models.DateField()
    finish = models.BooleanField(verbose_name='Terminée', default=False)
    hidden = models.BooleanField(verbose_name='Cachée', default=False)

    def __str__(self) -> str:
        return str(self.destination) + ' - ' + str(self.date)