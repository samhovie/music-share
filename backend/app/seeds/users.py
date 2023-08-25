from app.models import db, User, Song, Playlist, Comment, playlist_songs, environment, SCHEMA, fake
from sqlalchemy.sql import text
from datetime import date, datetime
from sqlalchemy import insert
import random



def seed_playlist_songs_users_likes():

    demo = User(
        username='Demo', email='demo@aa.io', password='password', display_name='Demo user', first_name='Demo', last_name='Demo', city='Demo', country='Demo', bio='Demo User', profile_pic='')
    marnie = User(
        username='marnie', email='marnie@aa.io', password='password', display_name='Marnieeee', first_name='Marnie', last_name='bloob', city='Saigon', country='Vietnam', bio='Love this app', profile_pic='')
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password', display_name='Bobbbbie', first_name='Bob', last_name='Bie', city='San Francisco', country='US', bio='It works over here too', profile_pic='')
    hirosawa = User(
        username='hiroSawa', email='hirosawa@aa.io', password='password', display_name='Hiroyuki Sawano', first_name='Hiroyuki', last_name='Sawano', city='Tokyo', country='Japan', bio='Renowned composer', profile_pic='')
    kohya = User(
        username='kohYa', email='kohya@aa.io', password='password', display_name='Kohta Yamamoto', first_name='Kohta', last_name='Yamamoto', city='Tokyo', country='Japan', bio='Industry legend', profile_pic='')

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(hirosawa)
    db.session.add(kohya)
    db.session.commit()


    urls = [
        "https://music-share-rhinos.s3.amazonaws.com/1186332cba1747a7a21a2960d08a591d.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/397c8e16ab0344a29b7e9e5437dbd8f9.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/94595993ef9f4362b27ce291726eb448.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/6c9682e22a0e4dfc9d4b50f925f10bc0.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/13954582838d4e72af4971be3e335064.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/20627e916fef4cf08e0d50b7bbccb053.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/aaddf119c95c4f8bbb21e54353d9559d.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/a86dbfce1fa040168fd075559bacb6a5.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/fee13636e67c4eaebcf48993733939d5.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/2896c9252f2e47f9ac40f8efc8849651.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/8556e1fce4304b0ab1ff08db511f8e57.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/06802acae04b491c9e25635637a903bb.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/68d31447b0b349c2b373202b569d477a.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/e62b4e06c8064070beb6f2d49b5dc8aa.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/8371450e8bb04c46a71724195ed3cfb8.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/8d8c9a38be864fef9388899e6b970493.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/fb30df471fff4056804cb6a564228a6a.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/0c52bd67b176497a9a7b998ab952ad77.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/5e4abfd5eb0c43eca856879c6b47bacd.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/99098fae725648468b15352c6711177e.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/b1efd99327b8400081bd91c207db47b8.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/0c52bd67b176497a9a7b998ab952ad77.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/0c52bd67b176497a9a7b998ab952ad77.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/260758e7ba274dbbb1e72ab67e8d6129.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/fc0bb74d0d4f465f9d777397b98a45a9.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/2fb643da89734ec7a9d810e261a2dc59.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/0b1c0922e44f4d66a9f28d38a50e78a6.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/1186332cba1747a7a21a2960d08a591d.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/397c8e16ab0344a29b7e9e5437dbd8f9.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/94595993ef9f4362b27ce291726eb448.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/6c9682e22a0e4dfc9d4b50f925f10bc0.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/13954582838d4e72af4971be3e335064.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/20627e916fef4cf08e0d50b7bbccb053.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/aaddf119c95c4f8bbb21e54353d9559d.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/a86dbfce1fa040168fd075559bacb6a5.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/fee13636e67c4eaebcf48993733939d5.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/2896c9252f2e47f9ac40f8efc8849651.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/8556e1fce4304b0ab1ff08db511f8e57.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/06802acae04b491c9e25635637a903bb.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/68d31447b0b349c2b373202b569d477a.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/e62b4e06c8064070beb6f2d49b5dc8aa.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/8371450e8bb04c46a71724195ed3cfb8.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/8d8c9a38be864fef9388899e6b970493.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/fb30df471fff4056804cb6a564228a6a.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/0c52bd67b176497a9a7b998ab952ad77.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/5e4abfd5eb0c43eca856879c6b47bacd.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/99098fae725648468b15352c6711177e.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/b1efd99327b8400081bd91c207db47b8.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/0c52bd67b176497a9a7b998ab952ad77.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/0c52bd67b176497a9a7b998ab952ad77.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/260758e7ba274dbbb1e72ab67e8d6129.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/fc0bb74d0d4f465f9d777397b98a45a9.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/2fb643da89734ec7a9d810e261a2dc59.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/0b1c0922e44f4d66a9f28d38a50e78a6.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/1186332cba1747a7a21a2960d08a591d.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/397c8e16ab0344a29b7e9e5437dbd8f9.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/94595993ef9f4362b27ce291726eb448.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/6c9682e22a0e4dfc9d4b50f925f10bc0.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/13954582838d4e72af4971be3e335064.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/20627e916fef4cf08e0d50b7bbccb053.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/aaddf119c95c4f8bbb21e54353d9559d.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/a86dbfce1fa040168fd075559bacb6a5.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/fee13636e67c4eaebcf48993733939d5.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/2896c9252f2e47f9ac40f8efc8849651.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/8556e1fce4304b0ab1ff08db511f8e57.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/06802acae04b491c9e25635637a903bb.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/68d31447b0b349c2b373202b569d477a.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/e62b4e06c8064070beb6f2d49b5dc8aa.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/8371450e8bb04c46a71724195ed3cfb8.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/8d8c9a38be864fef9388899e6b970493.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/fb30df471fff4056804cb6a564228a6a.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/0c52bd67b176497a9a7b998ab952ad77.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/5e4abfd5eb0c43eca856879c6b47bacd.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/99098fae725648468b15352c6711177e.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/b1efd99327b8400081bd91c207db47b8.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/0c52bd67b176497a9a7b998ab952ad77.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/0c52bd67b176497a9a7b998ab952ad77.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/260758e7ba274dbbb1e72ab67e8d6129.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/fc0bb74d0d4f465f9d777397b98a45a9.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/2fb643da89734ec7a9d810e261a2dc59.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/0b1c0922e44f4d66a9f28d38a50e78a6.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/1186332cba1747a7a21a2960d08a591d.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/397c8e16ab0344a29b7e9e5437dbd8f9.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/94595993ef9f4362b27ce291726eb448.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/6c9682e22a0e4dfc9d4b50f925f10bc0.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/13954582838d4e72af4971be3e335064.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/20627e916fef4cf08e0d50b7bbccb053.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/aaddf119c95c4f8bbb21e54353d9559d.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/a86dbfce1fa040168fd075559bacb6a5.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/fee13636e67c4eaebcf48993733939d5.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/2896c9252f2e47f9ac40f8efc8849651.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/8556e1fce4304b0ab1ff08db511f8e57.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/06802acae04b491c9e25635637a903bb.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/68d31447b0b349c2b373202b569d477a.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/e62b4e06c8064070beb6f2d49b5dc8aa.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/8371450e8bb04c46a71724195ed3cfb8.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/8d8c9a38be864fef9388899e6b970493.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/fb30df471fff4056804cb6a564228a6a.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/0c52bd67b176497a9a7b998ab952ad77.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/5e4abfd5eb0c43eca856879c6b47bacd.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/99098fae725648468b15352c6711177e.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/b1efd99327b8400081bd91c207db47b8.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/0c52bd67b176497a9a7b998ab952ad77.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/0c52bd67b176497a9a7b998ab952ad77.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/260758e7ba274dbbb1e72ab67e8d6129.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/fc0bb74d0d4f465f9d777397b98a45a9.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/2fb643da89734ec7a9d810e261a2dc59.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/0b1c0922e44f4d66a9f28d38a50e78a6.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/1186332cba1747a7a21a2960d08a591d.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/397c8e16ab0344a29b7e9e5437dbd8f9.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/94595993ef9f4362b27ce291726eb448.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/6c9682e22a0e4dfc9d4b50f925f10bc0.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/13954582838d4e72af4971be3e335064.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/20627e916fef4cf08e0d50b7bbccb053.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/aaddf119c95c4f8bbb21e54353d9559d.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/a86dbfce1fa040168fd075559bacb6a5.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/fee13636e67c4eaebcf48993733939d5.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/2896c9252f2e47f9ac40f8efc8849651.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/8556e1fce4304b0ab1ff08db511f8e57.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/06802acae04b491c9e25635637a903bb.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/68d31447b0b349c2b373202b569d477a.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/e62b4e06c8064070beb6f2d49b5dc8aa.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/8371450e8bb04c46a71724195ed3cfb8.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/8d8c9a38be864fef9388899e6b970493.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/fb30df471fff4056804cb6a564228a6a.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/0c52bd67b176497a9a7b998ab952ad77.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/5e4abfd5eb0c43eca856879c6b47bacd.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/99098fae725648468b15352c6711177e.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/b1efd99327b8400081bd91c207db47b8.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/0c52bd67b176497a9a7b998ab952ad77.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/0c52bd67b176497a9a7b998ab952ad77.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/260758e7ba274dbbb1e72ab67e8d6129.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/fc0bb74d0d4f465f9d777397b98a45a9.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/2fb643da89734ec7a9d810e261a2dc59.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/0b1c0922e44f4d66a9f28d38a50e78a6.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/1186332cba1747a7a21a2960d08a591d.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/397c8e16ab0344a29b7e9e5437dbd8f9.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/94595993ef9f4362b27ce291726eb448.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/6c9682e22a0e4dfc9d4b50f925f10bc0.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/13954582838d4e72af4971be3e335064.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/20627e916fef4cf08e0d50b7bbccb053.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/aaddf119c95c4f8bbb21e54353d9559d.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/a86dbfce1fa040168fd075559bacb6a5.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/fee13636e67c4eaebcf48993733939d5.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/2896c9252f2e47f9ac40f8efc8849651.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/8556e1fce4304b0ab1ff08db511f8e57.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/06802acae04b491c9e25635637a903bb.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/68d31447b0b349c2b373202b569d477a.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/e62b4e06c8064070beb6f2d49b5dc8aa.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/8371450e8bb04c46a71724195ed3cfb8.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/8d8c9a38be864fef9388899e6b970493.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/fb30df471fff4056804cb6a564228a6a.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/0c52bd67b176497a9a7b998ab952ad77.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/5e4abfd5eb0c43eca856879c6b47bacd.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/99098fae725648468b15352c6711177e.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/b1efd99327b8400081bd91c207db47b8.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/0c52bd67b176497a9a7b998ab952ad77.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/0c52bd67b176497a9a7b998ab952ad77.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/260758e7ba274dbbb1e72ab67e8d6129.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/fc0bb74d0d4f465f9d777397b98a45a9.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/2fb643da89734ec7a9d810e261a2dc59.mp3",
        "https://music-share-rhinos.s3.amazonaws.com/0b1c0922e44f4d66a9f28d38a50e78a6.mp3"
    ]

    genres = ['Pop', 'Hip-Hop/Rap', 'Rock', 'R&B/Soul' ]

    names = ['Hits', 'Bangers', 'Jams', 'Beats', 'Classics', 'Vibes', 'Favorites', 'Picks', 'Throwbacks', 'Summer']

    # 5 playlists for each genre
    for genre in genres:
        for _ in range(5):
            playlist = Playlist(
                name=f"{genre} {names[random.randint(0,9)]}",
                public=True,
                user_id=random.randint(1,5),
                description=fake.sentence(),
                preview_img="https://livebnbbucket.s3.amazonaws.com/image_" + str(random.randint(1,50)) +".jpg",
                created_at=datetime.strptime(fake.date(), '%Y-%m-%d'),
                updated_at=date.today())
            db.session.add(playlist)

    db.session.commit()



    # song for every url
    for i, url in enumerate(urls):
        # cycles through genres to assign to songs evenly
        genre = genres[i % len(genres)]
        song = Song(name=f"{fake.word().capitalize()} {fake.word()}",
                    artist_name=fake.name(),
                    artist_id=random.randint(1, 5),
                    mp3_file=url,
                    genre=genre,
                    preview_img="https://livebnbbucket.s3.amazonaws.com/image_" + str(random.randint(1,50)) +".jpg",
                    created_at=datetime.strptime(fake.date(), '%Y-%m-%d'),
                    updated_at=date.today())
        db.session.add(song)
    db.session.commit()

    # Playlist indexes
    # pop: 1 - 5
    # rap: 6 - 10
    # rock: 11 - 15
    # rnb: 16 - 20


    # number of songs we added
    for i in range(len(urls)):
        x = i % len(genres)

        song = i + 1

        if(x == 0):
            # add song to random pop playlist
            playlists = random.sample(range(1, 5), 2)
        elif(x == 1):
            # add song to random rap playlist
            playlists = random.sample(range(6,10), 2)
        elif(x == 2):
            # add song to random rock playlist
            playlists = random.sample(range(11,15), 2)
        else:
            # add song to random rnb playlist
            playlists = random.sample(range(16,20), 2)

        db.session.execute(insert(playlist_songs).values(
            playlist_id=playlists[0],
            song_id=song))
        db.session.execute(insert(playlist_songs).values(
            playlist_id=playlists[1],
            song_id=song))




def seed_comments():
    comment1 = Comment(
        user_id=1, song_id=1, text="Man this ROCKS"
    )
    comment2 = Comment(
        user_id=2, song_id=2, text="Man this ROCKS HARDER"
    )
    comment3 = Comment(
        user_id=2, song_id=3, text="Another great song Sawano!"
    )
    comment4 = Comment(
        user_id=1, song_id=3, text="Loved 86!"
    )
    comment5 = Comment(
        user_id=3, song_id=3, text="Made me cry"
    )
    comment6 = Comment(
        user_id=5, song_id=3, text="Nice working with you Sawano"
    )
    comment7 = Comment(
        user_id=1, song_id=4, text="WOOWWWWW"
    )
    comment8 = Comment(
        user_id=2, song_id=5, text="Haha hehe xd L+Ratio fax no printer"
    )
    comment9 = Comment(
        user_id=1, song_id=4, text="Great song!"
    )
    comment10 = Comment(
        user_id=2, song_id=5, text="Listen to this while studying!"
    )

    db.session.add(comment1)
    db.session.add(comment2)
    db.session.add(comment3)
    db.session.add(comment4)
    db.session.add(comment5)
    db.session.add(comment6)
    db.session.add(comment7)
    db.session.add(comment8)
    db.session.add(comment9)
    db.session.add(comment10)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.


def undo_users():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM users"))

    db.session.commit()


def undo_songs():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.songs RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM songs"))

    db.session.commit()


def undo_playlist_songs():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.playlists RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM playlist_songs"))

    db.session.commit()


def undo_playlists():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.playlists RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM playlists"))

    db.session.commit()


def undo_comments():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.comments RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM comments"))

    db.session.commit()


def undo_playlist_songs_users_likes():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.comments RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM playlist_songs"))

    db.session.commit()
