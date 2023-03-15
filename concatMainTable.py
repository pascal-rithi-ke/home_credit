import pandas as pd
import os

from sqlalchemy import create_engine
from dotenv import load_dotenv

load_dotenv()
USER = os.getenv('user')
PW = os.getenv('pw')
HOST = os.getenv('host')
DB = os.getenv('db')

def bdd():
    engine = create_engine("mysql+pymysql://{user}:{pw}@{host}/{db}"
                    .format(user={USER},
                            pw={PW},
                            host={HOST},
                            db={DB}))
    return engine

def concatMainTable():
    engine = bdd()
    pt1 = pd.read_csv("raw_data/application_test.csv")
    pt2 = pd.read_csv("raw_data/application_train.csv")
    resultat = pd.concat([pt1, pt2], ignore_index=True)
    resultat.to_csv("filter_data/MainTable.csv", index=False)
    resultat.to_sql(con=engine, name="MainTable", if_exists="replace", index=False, chunksize=1000)
