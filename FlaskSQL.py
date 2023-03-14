from flask import Flask,render_template, request, jsonify
from flask_mysqldb import MySQL


app = Flask(__name__)

app.config['MYSQL_HOST'] ='mysql-credit-scoring-ipssi.alwaysdata.net'
app.config['MYSQL_USER'] ='303869'
app.config['MYSQL_PASSWORD'] ='7852xawJBTjDhTc'
app.config['MYSQL_DB'] ='credit-scoring-ipssi_home-credit'
 
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

if __name__ == '__main__':
    app.debug = True
    app.run(host='localhost', port=5000)
