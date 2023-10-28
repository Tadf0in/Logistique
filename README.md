# <div align="center">Documentation</div>

## Utilisation

### <ins>Uniquement la 1ère fois :</ins>

Environnement virtuel (Optionnel) :

```bash
pip install venv
py -m venv env
env\Scripts\activate
```

Installation des librairies python :

```bash
pip install -r requirements.txt
```

Créer un fichier `.env` à la racine du projet, et rentrer les informations de la base de donnée (à voir avec l'IT je pense) :

```
SECRET_KEY=...
ENGINE='django.db.backends.postgresql'
NAME=...
USER=...
PASSWORD=...
HOST=...
PORT=...
```

### <ins>Lancer le serveur :</ins>

```bash
cd backend
py manage.py runserver --insecure
```

### <ins>Ajouter les destinations dans la BDD :</ins>

1. Lister les destinations dans le fichier `backend\destinations.txt`
2. Aller sur <ins>/api/livraisons/destinations/update</ins>
3. Cliquer sur le bouton **POST**


## Avancées

* **28/10** &nbsp; *Détails sur la livraison*

    * Panneau de détails avec nb de palettes, préparateur, commentaires
    * Points demandés rajoutés

* **24/10 - 27/10**

    *J'ai arrêté de noter mais je t'ai montré en partage d'écran*

* **23/10** &nbsp; *Actualise les modifs en temps réel + supprime + modif*

    * forceRefresh
    * DELETE */api/livraisons/:id*
    * PUT */api/livraisons/:id*
    * EditingForm

* **22/10** &nbsp; *Boutons de modif + barre*

    * PATCH */api/livraisons/:id*
    * Barre la case
    * Boutons de modif (que check marche pour l'instant)

* **21/10** &nbsp; *Optimisation des requêtes et Listes déroulantes*

    * Un seule requête (*/api/all*) pour toutes les données d'un coup
    * fonction apiFetch gère GET et POST
    * Select dans addform
    * back get_or_create destination quand nouvelle livraison

* **20/10** &nbsp; *Actualisation automatique*

    * Rafraîchit automatiquement les nouvelles livraisons sur un interval définit
    * Style du formulaire

* **19/10** &nbsp; *Fomulaire fonctionnel*

    * Formulaire ajoute dans la BDD

* **17/10** &nbsp; *Formulaire pour ajouter*

    * Affichage du formulaire quand clique sur une case
    * Destination et date récupérées automatiquements

* **16/10** &nbsp; *Affichage du tableau fonctionnel et terminé*

    * Favoris à gauche puis mélangé
    * Cases vides
    * Favoris sutomisables
    * https://www.youtube.com/watch?v=-TzQGCfLycg

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
| date        | Date     |                  |
| finish      | bool     | default : False  |
| hidden      | bool     | default : False  |
| adr         | bool     | default : False  |
| quai        | bool     | default : False  |
| preparateur | int      | FK > Preparateur |
| nb_palettes | int      | default : 0      |
| commentaires| text     |                  |

||         **Destination**         ||
|:---------|---------:|:-----------:|
| **nom**  | **type** | **options** |
| id       | int      | PK          |
| lieu     | char     |             |
| favorite | bool     | def : False |


||         **Preparateur**         ||
|:---------|---------:|:-----------:|
| **nom**  | **type** | **options** |
| id       | int      | PK          |
| nom      | char     |             |
