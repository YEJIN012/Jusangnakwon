from typing import Union

from fastapi import FastAPI
from pydantic import BaseModel

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from ast import literal_eval
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

app = FastAPI()

'''
class Item(BaseModel):
    name: str
    price: float
    is_offer: Union[bool, None] = None


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}


@app.put("/items/{item_id}")
def update_item(item_id: int, item: Item):
    return {"item_name": item.name, "item_id": item_id}
'''

@app.get("/recommendations/traditional-liquors/{item_id}")
def recommend_traditional_liquor(item_id: int):
    with open('traditional_liquor.csv', 'r') as f:
        data = f.readlines()
    dfc = []
    for line in data:
        row = line.strip().split(',')
        dfc.append(row)
    dfc = [row[:12] for row in dfc]
    dfc = pd.DataFrame(dfc, 
        columns=['name', 'sweetness', 'acidity', 'fizziness', 
        'body_rate', 'alcohol', 'size', 'price', 'keyword',
        'manufacturer', 'ingredient', 'img_link'])
    dfc = dfc[['sweetness', 'acidity', 'fizziness', 'body_rate']]
    print(dfc)
    dfc = dfc.fillna(0)
    df_for_cossim_T = dfc.transpose()
    item_sim = cosine_similarity(dfc, dfc)
    item_sim_df = pd.DataFrame(data=item_sim, index=df_for_cossim_T.columns, columns=df_for_cossim_T.columns)
    c0 = pd.DataFrame(item_sim_df[10].sort_values(ascending=False)[0:30])
    c0['index'] = c0.index
    # c1 = pd.merge(c0, dfc, left_on = 'index', right_on= dfc.index, how = 'inner')
    return c0.to_dict(orient="records")