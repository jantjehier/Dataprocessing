#!/usr/bin/env python
# Name: Jan Maarten de Vries
# Student number: 11408731
'''
This script scrapes IMDB and outputs a CSV file with highest rated tv series.
'''
import csv

from pattern.web import URL, DOM, plaintext

TARGET_URL = "http://www.imdb.com/search/title?num_votes=5000,&sort=user_rating,desc&start=1&title_type=tv_series"
BACKUP_HTML = 'tvseries.html'
OUTPUT_CSV = 'tvseries.csv'


def extract_tvseries(dom):
    '''
    Extract a list of highest rated TV series from DOM (of IMDB page).

    Each TV series entry should contain the following fields:
    - TV Title
    - Rating
    - Genres (comma separated if more than one)
    - Actors/actresses (comma separated if more than one)
    - Runtime (only a number!)
    '''

    titels = []
    rating = []
    runtime = []
    genre = []
    actors = []

    # ADD YOUR CODE HERE TO EXTRACT THE ABOVE INFORMATION ABOUT THE
    # HIGHEST RATED TV-SERIES
    # NOTE: FOR THIS EXERCISE YOU ARE ALLOWED (BUT NOT REQUIRED) TO IGNORE
    # UNICODE CHARACTERS AND SIMPLY LEAVE THEM OUT OF THE OUTPUT.

    # getting the code from the imdb website and taking its content
    for e in dom.by_tag("div.lister-item-content")[:50]:
        for a in e.by_tag("a") [:1]:
            titels.append(plaintext(a.content).encode('utf8'))
        for b in e.by_tag("strong") [:1]:
            rating.append(plaintext(b.content).encode('utf8'))
        for d in e.by_tag("span.genre") [:1]:
            genre.append(plaintext(d.content).encode('utf8').strip(' \n'))
        for f in e.by_tag("a") [12:]:
            actors.append(plaintext(f.content).encode('utf8'))
        for c in e.by_tag("span.runtime") [:1]:              
            runtime.append(plaintext(c.content).encode('utf8'))

    #putting it in a list
    tvseries = []
    tvseries.append(titels)
    tvseries.append(rating)
    tvseries.append(genre)
    tvseries.append(actors)
    tvseries.append(runtime)

    print tvseries
    # .encode naar a.content
    # tvseries = titels, rating, etc..
    # tvseries = [titels, rating, runtime, genre, actors]

    return tvseries  # replace this line as well as appropriate

def save_csv(f, tvseries):
    '''
    Output a CSV file containing highest rated TV-series.
    '''
    writer = csv.writer(f)
    writer.writerow(['Title', 'Rating', 'Genre', 'Actors', 'Runtime'])
    # writing in the file if the first then look at the first actors else look at actor j+4
    for i in range(50):
        if i == 0:
            j = 0
            writer.writerow([tvseries[0][i], tvseries[1][i], tvseries[2][i], tvseries[3][j], tvseries[3][j+1], tvseries[3][j+2], tvseries[4][i]])
            j = j + 4
        else:
            writer.writerow([tvseries[0][i], tvseries[1][i], tvseries[2][i],tvseries[3][j], tvseries[3][j+1], tvseries[3][j+2], tvseries[4][i]])
            j = j + 4
    # ADD SOME CODE OF YOURSELF HERE TO WRITE THE TV-SERIES TO DISK

if __name__ == '__main__':
    # Download the HTML file
    url = URL(TARGET_URL)
    html = url.download()

    # Save a copy to disk in the current directory, this serves as an backup
    # of the original HTML, will be used in grading.
    with open(BACKUP_HTML, 'wb') as f:
        f.write(html)

    # Parse the HTML file into a DOM representation
    dom = DOM(html)

    # Extract the tv series (using the function you implemented)
    tvseries = extract_tvseries(dom)

    # Write the CSV file to disk (including a header)
    with open(OUTPUT_CSV, 'wb') as output_file:
        save_csv(output_file, tvseries)
