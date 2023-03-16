from flask import Flask,render_template, request, jsonify
from flask_mysqldb import MySQL
from flask_cors import CORS

import os

from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)
CORS(app)

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

    resultat = []
    for i, row in enumerate(results):
        # Création du dictionnaire pour chaque ligne de la table
        ligne = {}
        for j, col in enumerate(row):
            ligne[noms_colonnes[j]] = col
            resultat.append(ligne)
    return jsonify(resultat)

@app.route("/client/<id>")
def getClient(id):
    cursor = mysql.connection.cursor()
    cursor.execute("SELECT AMT_CREDIT_SUM as credit ,(DAYS_CREDIT/-365) as jour FROM `MainTable` JOIN bureau on MainTable.SK_ID_CURR = bureau.SK_ID_CURR WHERE MainTable.SK_ID_CURR = %s", (id,))
    results = cursor.fetchall()
    noms_colonnes = [col[0] for col in cursor.description]
    cursor.close()
    if len(results) == 0:
        return f"Aucun client trouvé avec l'ID {id}.", 404
    else:
        # Création du dictionnaire des résultats
        resultat = []
    for i, row in enumerate(results):
        # Création du dictionnaire pour chaque ligne de la table
        ligne = {}
        for j, col in enumerate(row):
            ligne[noms_colonnes[j]] = col
            resultat.append(ligne)
    return jsonify(resultat)

if __name__ == '__main__':
    app.debug = True
    app.run(host='localhost', port=5000)