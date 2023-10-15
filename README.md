# <div align="center">Documentation</div>

## Avancées

* **15/10** &nbsp; *Liste des destinations*

    * Liste des destinations gérées dans la BDD (voir [conception](#conception))
    * GET */api/livraisons/destinations*
    * POST */api/livraisons/destinations/update*

* **14/10** &nbsp; *Récupère les infos*

    * Récupère les infos de livraison dans la BDD via l'api
    * Affiche les livraisons selon le jour dans le tableau
    * Correction de bugs au niveau du changement de semaine

* **13/10** &nbsp; *Création du tableau* 

    * Tableau sous forme de grille
    * Récupère automatiquement les 5 jours de la semaine
    * Flèches pour changer de semaine
    * GET */api/livraisons/?start=YYYY-MM-DD&end=YYYY-MM-DD*

* **12/10** &nbsp; *Initialisation du projet*

    * backend : Django app
    * frontend : React app (vite)
    * Modèle *Livraison* dans la BDD (voir [conception](#conception))

<br />

## Conception

#### BDD :

||             **Livraison**               ||
|:------------|---------:|:----------------:|
| **nom**     | **type** | **options**      |
| id          | int      | PK               |
| destination | int      | FK > Destination |
| taille      | char     |                  |
| status      | char     |                  |
| ref         | char     |                  |

||         **Destination**         ||
|:---------|---------:|:-----------:|
| **nom**  | **type** | **options** |
| id       | int      | PK          |
| lieu     | char     |             |
| favorite | bool     |             |