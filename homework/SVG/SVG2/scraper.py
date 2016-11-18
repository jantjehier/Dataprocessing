#!/usr/bin/env python
# Name: Jan Maarten de Vries
# Student number: 11408731

import csv
import json

from pattern.web import URL, DOM, plaintext

TARGET_URL = "https://en.wikipedia.org/wiki/Area_and_population_of_European_countries"
BACKUP_HTML = 'JSON.html'
OUTPUT_JSON = "data.json"

def extract_svgscraper(dom):

    # selecting the first table
    wiki = dom.body.by_class("wikitable sortable")[0]
    # selecting the tr elements
    trs = wiki.by_tag("tr")

    # making a country array that will contain all data
    country = []

    # for the number of trs after the useless table data take the country and population data
    # and put it with 'country' or 'population' in the array.
    for tr in trs[1:-2]:
        data = {}
        data['country'] = tr.by_tag("a")[1].content.encode('utf8')
        data['population'] = tr.by_tag("td")[1].content.encode('utf8')
        country.append(data)

    #return the array
    return country
    
if __name__ == '__main__':
    # Download the HTML file
    url = URL(TARGET_URL)
    html = url.download()

    # Parse the HTML file into a DOM representation
    dom = DOM(html)

    # Extract the tabledata (using the function you implemented)
    data = extract_svgscraper(dom)

    # open the output_json to write the data in it.
    with open(OUTPUT_JSON, 'w') as outfile:
        json.dump(data, outfile, indent=4)

