from django.db import models

class Destination(models.Model):
    lieu = models.CharField(max_length=50)
    favorite = models.BooleanField(verbose_name='Favoris', default=False)

    def __str__(self) -> str:
        return self.lieu


class Preparateur(models.Model):
    nom = models.CharField(max_length=50)
    
    def __str__(self) -> str:
        return self.nom


class Livraison(models.Model):
    destination = models.ForeignKey(Destination, on_delete=models.CASCADE, null=True)
    taille = models.CharField(max_length=15, blank=True)
    status = models.CharField(max_length=15, blank=True)
    ref = models.CharField(max_length=50, blank=True)
    date = models.DateField()
    finish = models.BooleanField(verbose_name='Terminée', default=False)
    hidden = models.BooleanField(verbose_name='Cachée', default=False)
    adr = models.BooleanField(default=False)
    quai = models.BooleanField(verbose_name='En quai', default=False)

    preparateur = models.ForeignKey(Preparateur, related_name='preparateur', on_delete=models.CASCADE, null=True, blank=True)
    nb_palettes = models.IntegerField(default=0)
    commentaires = models.TextField(null=True, blank=True)

    def __str__(self) -> str:
        return str(self.destination.lieu) + ' - ' + str(self.ref)