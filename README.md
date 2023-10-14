# <center>Documentation</center>

## Avancées

* **14/04** &nbsp; *Récupère les infos*

    * Récupère les infos de livraison dans la BDD via l'api
    * Affiche les livraisons selon le jour dans le tableau
    * Correction de bugs au niveau du changement de semaine

* **13/03** &nbsp; *Création du tableau* 

    * Tableau sous forme de grille
    * Récupère automatiquement les 5 jours de la semaine
    * Flèches pour changer de semaine
    * */api/livraisons/?start=YYYY-MM-DD&end=YYYY-MM-DD*

* **12/03** &nbsp; *Initialisation du projet*

    * backend : Django app
    * frontend : React app (vite)
    * Modèle *Livraison* dans la BDD (voir [conception](#conception))

<br />

## Conception

#### BDD :

||           **Livraison**            ||
|:------------|---------:|:-----------:|
| **nom**     | **type** | **options** |
| id          | int      | PK          |
| destination | char     |             |
| taille      | char     |             |
| status      | char     |             |
| ref         | char     |             |