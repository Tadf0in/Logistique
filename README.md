# <div align="center">Documentation</div>

## Use

### <ins>Only the first time :</ins>

Virtual environment (optional) :

```bash
pip install virtualenv
py -m venv env
env\Scripts\activate
```

Installing Python libraries :

```bash
pip install -r requirements.txt
```

Create a database (preferably PostgreSQL with pgadmin4) <br/>
⚠️ *You just need to create the database, not the tables, django will take care of the rest* <br/>
Create a `.env` file at the root of the project, and enter the database information:

```
SECRET_KEY='...'
ENGINE='django.db.backends.postgresql'
NAME='...'
USER='...'
PASSWORD='...'
HOST='...'
PORT='...'
```

Initialize the database:

```bash
cd backend
py manage.py migrate
```

Create super user (optional):

```bash
cd backend
py manage.py createsuperuser
```

In the `backend\dist\index-<hash>.js` file, replace 'http://localhost:8000' with the server URL: <br/>
💡 *Use **ctrl+F** to find the line to change*
```js
return await fetch("http://localhost:8000", ...
``` 

### <ins>Run the server :</ins>

```bash
env\Scripts\activate
cd backend
py manage.py runserver --insecure
```

### <ins>Add the destinations to the database:</ins>

1. List the destinations in the `backend\destinations.txt` file
2. Go to <ins>/api/livraisons/destinations/update</ins>
3. Click on the **POST** button

<br/>

## Design

#### DB :

||             **Livraison**               ||
|:------------|---------:|:----------------:|
| **name**    | **type** | **options**      |
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
| **name** | **type** | **options** |
| id       | int      | PK          |
| lieu     | char     |             |
| favorite | bool     | def : False |


||         **Preparateur**         ||
|:---------|---------:|:-----------:|
| **name** | **type** | **options** |
| id       | int      | PK          |
| nom      | char     |             |
