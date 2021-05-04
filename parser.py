import pandas as pd

#Movies Treatment 
movies2 = pd.read_csv('movies.csv')
movies2['year'] = movies2['title'].str.split(' ', -1).apply(lambda x: x[-1])
movies2['year'] = (movies2['year'].str.replace('(', '')).str.replace(')', '')
movies2['genres'] = movies2['genres'].str.split('|')

#Generate Genrie Table
genre = []
size = (movies2['movieId'].size)
for i in range(0, size-1):
  genres =  (movies2.loc[i]).genres
  idMovie = (movies2.loc[i]).movieId
  for j in genres:
    dic = {'movieId': idMovie, 'genre': j}
    genre.append(dic)

gt = pd.DataFrame(genre)
gt.to_csv('genres.csv')
del movies2['genres']
movies2.to_csv('movies.csv')



#Rating Treatment
ratings2 = pd.read_csv('ratings.csv')
del ratings2['timestamp']
del ratings2['userId']

ratemovie = []

for i in movies2.movieId:
  if i in ratings2.movieId:
    dado = (ratings2.query('movieId =='+ str(i)))['rating'].mean()
    dic = {'movieId': i, 'rate': dado}
    ratemovie.append(dic)

    
rt = pd.DataFrame(ratemovie)
rt.to_csv('ratings.csv')

  

