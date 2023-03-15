from flask import Flask,render_template, request, jsonify
from flask_mysqldb import MySQL

import os

app = Flask(__name__)

app.config['MYSQL_HOST'] = os.getenv('host')
app.config['MYSQL_USER'] = os.getenv('user')
app.config['MYSQL_PASSWORD'] = os.getenv('pw')
app.config['MYSQL_DB'] = os.getenv('db')

mysql = MySQL(app)

if mysql:
    print("Connection réussie!")
else:
    print ("Connection échouée")
    
@app.route("/")
def index():
    # Création curseur
    cursor = mysql.connection.cursor()
    cursor.execute("SELECT * FROM credit_card_balance WHERE SK_ID_PREV LIMIT 50;")
    results = cursor.fetchall()
    noms_colonnes = [col[0] for col in cursor.description]

    # Création du dictionnaire des résultats
    resultat = {}
    for i, row in enumerate(results):
        # Création du dictionnaire pour chaque ligne de la table
        ligne = {}
        for j, col in enumerate(row):
            ligne[noms_colonnes[j]] = col
        resultat[str(i)] = ligne

    # Tri des éléments du dictionnaire par ordre croissant
    resultat_trie = {}
    for key, value in sorted(resultat.items()):
        resultat_trie[key] = value
    return jsonify({'resultat': resultat_trie})

@app.route("/client/<id>")
def getClient(id):
    cursor = mysql.connection.cursor()
    cursor.execute("SELECT * FROM MainTable WHERE SK_ID_CURR = %s", (id,))
    results = cursor.fetchall()
    noms_colonnes = [col[0] for col in cursor.description]
    cursor.close()
    if len(results) == 0:
        return f"Aucun client trouvé avec l'ID {id}.", 404
    else:
        # Création du dictionnaire des résultats
        resultat = {}
        for i, row in enumerate(results):
            # Création du dictionnaire pour chaque ligne de la table
            ligne = {}
            for j, col in enumerate(row):
                ligne[noms_colonnes[j]] = col
            resultat[str(i)] = ligne

        # Tri des éléments du dictionnaire par ordre croissant
        resultat_trie = {}
        for key, value in sorted(resultat.items()):
            resultat_trie[key] = value
        return jsonify({'resultat': resultat_trie})

if __name__ == '__main__':
    app.debug = True
    app.run(host='localhost', port=5000)
