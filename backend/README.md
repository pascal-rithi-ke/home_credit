## Pour commencer

- Créer un environnement virtuel Python :

```bash
# Sur Windows
py -3 -m venv venv

# Sur macOS/Linux
python3 -m venv venv
```

- Activer l'environnement virtuel :

```bash
# Sur Windows
venv\Scripts\activate

# Sur macOS/Linux
. venv/bin/activate
```

- Créer un fichier `.env` à la racine du projet et y ajouter les variables d'environnement présentes dans le fichier `.env.example`.
- Installer les dépendances :

```bash
pip install -r requirements.txt
```

- Lancer le serveur de développement :

```bash
flask --app FlaskSQL run --host=0.0.0.0
```

## Pour ajouter une nouvelle dépendance

- Installer la dépendance :

```bash
pip install <nom-de-la-dépendance>
```

- Générer le fichier `requirements.txt` :

```bash
pip freeze > requirements.txt
```
