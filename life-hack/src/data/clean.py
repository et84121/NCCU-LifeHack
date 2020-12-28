import json
import os

os.chdir('./src/data/')

data = json.load(open('raw-medic.json'))

for index, shop in enumerate(data):
    data[index]['location'] = shop['geocode']['results'][0]['geometry']['location']
    del data[index]['geocode']


json.dump(data, open('medic.json', 'w'))
