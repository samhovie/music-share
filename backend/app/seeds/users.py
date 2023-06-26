from app.models import db, User, Song, Playlist, Comment, playlist_songs, environment, SCHEMA, fake
from sqlalchemy.sql import text
from datetime import date
from sqlalchemy import insert



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

    # song3 = Song(
    #     name="4N", artist_name="Hiroyuki Sawano", artist_id=4, mp3_file="https://music-share-rhinos.s3.amazonaws.com/0c52bd67b176497a9a7b998ab952ad77.mp3", genre="Instrumental", preview_img='https://e1.pxfuel.com/desktop-wallpaper/933/528/desktop-wallpaper-89-about-spotify-playlists-covers-aesthetic-playlist-covers.jpg', created_at=date.today(), updated_at=date.today())
    # song4 = Song(
    #     name="8SIX", artist_name="Hiroyuki Sawano", artist_id=4, mp3_file="https://music-share-rhinos.s3.amazonaws.com/5e4abfd5eb0c43eca856879c6b47bacd.mp3", genre="Instrumental", preview_img='https://e1.pxfuel.com/desktop-wallpaper/933/528/desktop-wallpaper-89-about-spotify-playlists-covers-aesthetic-playlist-covers.jpg', created_at=date.today(), updated_at=date.today())
    # song5 = Song(
    #     name="pianoVIIIVI-i", artist_name="Hiroyuki Sawano", artist_id=4, mp3_file="https://music-share-rhinos.s3.amazonaws.com/99098fae725648468b15352c6711177e.mp3", genre="Instrumental", preview_img='https://e1.pxfuel.com/desktop-wallpaper/933/528/desktop-wallpaper-89-about-spotify-playlists-covers-aesthetic-playlist-covers.jpg', created_at=date.today(), updated_at=date.today())
    # song6 = Song(
    #     name="pianoVIIIVI-iii", artist_name="Hiroyuki Sawano", artist_id=4, mp3_file="https://music-share-rhinos.s3.amazonaws.com/b1efd99327b8400081bd91c207db47b8.mp3", genre="Instrumental", preview_img='https://e1.pxfuel.com/desktop-wallpaper/933/528/desktop-wallpaper-89-about-spotify-playlists-covers-aesthetic-playlist-covers.jpg', created_at=date.today(), updated_at=date.today())
    # song7 = Song(
    #     name="Lilas", artist_name="Hiroyuki Sawano", artist_id=4, mp3_file="https://music-share-rhinos.s3.amazonaws.com/0c52bd67b176497a9a7b998ab952ad77.mp3", genre="Instrumental", preview_img='https://e1.pxfuel.com/desktop-wallpaper/933/528/desktop-wallpaper-89-about-spotify-playlists-covers-aesthetic-playlist-covers.jpg', created_at=date.today(), updated_at=date.today())
    # song8 = Song(
    #     name="JaguarN0-10", artist_name="Hiroyuki Sawano", artist_id=4, mp3_file="https://music-share-rhinos.s3.amazonaws.com/0c52bd67b176497a9a7b998ab952ad77.mp3", genre="Instrumental", preview_img='https://e1.pxfuel.com/desktop-wallpaper/933/528/desktop-wallpaper-89-about-spotify-playlists-covers-aesthetic-playlist-covers.jpg', created_at=date.today(), updated_at=date.today())
    # song9 = Song(
    #     name="Talk to you", artist_name="Kohta Yamamoto", artist_id=5, mp3_file="https://music-share-rhinos.s3.amazonaws.com/260758e7ba274dbbb1e72ab67e8d6129.mp3", genre="Instrumental", preview_img='https://e1.pxfuel.com/desktop-wallpaper/933/528/desktop-wallpaper-89-about-spotify-playlists-covers-aesthetic-playlist-covers.jpg', created_at=date.today(), updated_at=date.today())
    # song10 = Song(
    #     name="Underneath the Sky", artist_name="Kohta Yamamoto", artist_id=5, mp3_file="https://music-share-rhinos.s3.amazonaws.com/fc0bb74d0d4f465f9d777397b98a45a9.mp3", genre="Instrumental", preview_img='https://e1.pxfuel.com/desktop-wallpaper/933/528/desktop-wallpaper-89-about-spotify-playlists-covers-aesthetic-playlist-covers.jpg', created_at=date.today(), updated_at=date.today())
    # song11 = Song(
    #     name="Hear My Voice", artist_name="Kohta Yamamoto", artist_id=5, mp3_file="https://music-share-rhinos.s3.amazonaws.com/2fb643da89734ec7a9d810e261a2dc59.mp3", genre="Instrumental", preview_img='https://e1.pxfuel.com/desktop-wallpaper/933/528/desktop-wallpaper-89-about-spotify-playlists-covers-aesthetic-playlist-covers.jpg', created_at=date.today(), updated_at=date.today())
    # song12 = Song(
    #     name="Never Stopping at All", artist_name="Sweet Dove", artist_id=5, mp3_file="https://music-share-rhinos.s3.amazonaws.com/0b1c0922e44f4d66a9f28d38a50e78a6.mp3", genre="Instrumental", preview_img='https://e1.pxfuel.com/desktop-wallpaper/933/528/desktop-wallpaper-89-about-spotify-playlists-covers-aesthetic-playlist-covers.jpg', created_at=date.today(), updated_at=date.today())


    # song2 = Song(
    #     name="Karma", artist_name="Efren", artist_id=2, mp3_file="https://music-share-rhinos.s3.amazonaws.com/2fb643da89734ec7a9d810e261a2dc59.mp3", genre="Rock",  preview_img='https://e1.pxfuel.com/desktop-wallpaper/933/528/desktop-wallpaper-89-about-spotify-playlists-covers-aesthetic-playlist-covers.jpg', created_at=date.today(), updated_at=date.today()
    # )
    # # new songs SH
    # song13 = Song(
    #     name="Karma", artist_name="Efren", artist_id=2, mp3_file="https://music-share-rhinos.s3.amazonaws.com/8031c80c59fa42a5ba129c7077172139.mp3", genre="Rock",  preview_img='https://e1.pxfuel.com/desktop-wallpaper/933/528/desktop-wallpaper-89-about-spotify-playlists-covers-aesthetic-playlist-covers.jpg', created_at=date.today(), updated_at=date.today()
    # )
    # song14 = Song(
    #     name="Karma", artist_name="Efren", artist_id=2, mp3_file="https://music-share-rhinos.s3.amazonaws.com/5dddb1fd62e04d778c3b9535bbf99d4e.mp3", genre="Rock", preview_img='https://e1.pxfuel.com/desktop-wallpaper/933/528/desktop-wallpaper-89-about-spotify-playlists-covers-aesthetic-playlist-covers.jpg', created_at=date.today(), updated_at=date.today()
    # )



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
        "https://music-share-rhinos.s3.amazonaws.com/fb30df471fff4056804cb6a564228a6a.mp3"
    ]


    for url in urls:
        song = Song(name=f"{fake.word().capitalize()} {fake.word()}",
                    artist_name=fake.name(),
                    artist_id=2,
                    mp3_file=url,
                    genre='Rock',
                    preview_img=fake.image_url(width=200, height=200),
                    created_at=date.today(),
                    updated_at=date.today())
        db.session.add(song)






    playlist1 = Playlist(
        name="Alternative Stuff", public=True, user_id=1, description="HOLY MOLY SO COOL", preview_img="https://e1.pxfuel.com/desktop-wallpaper/924/396/desktop-wallpaper-spotify-playlist-covers-simpson-300x300-playlist-covers.jpg", created_at=date.today(), updated_at=date.today())
    playlist2 = Playlist(
        name="Rocky Stuff", public=False, user_id=2, description="HOLY MOLY SO COOLER", preview_img="https://e1.pxfuel.com/desktop-wallpaper/53/672/desktop-wallpaper-150-spotify-playlist-covers-ideas-aesthetic-playlist-covers.jpg", created_at=date.today(), updated_at=date.today())
    playlist3 = Playlist(
        name="Rocky Tuff", public=False, user_id=2, description="HOLY MOLY SO COOLER", preview_img="https://e1.pxfuel.com/desktop-wallpaper/213/149/desktop-wallpaper-sunset-spotify-playlist-cover-spotify-covers.jpg", created_at=date.today(), updated_at=date.today())
    playlist4 = Playlist(
        name="Hiroyuki Sawano 86", public=False, user_id=4, description="Lena is looking at Shin", preview_img="https://e1.pxfuel.com/desktop-wallpaper/676/329/desktop-wallpaper-gabby-on-playlist-covers-playlist-cover.jpg", created_at=date.today(), updated_at=date.today())
    playlist5 = Playlist(
        name="Kohta Yamamoto 86", public=False, user_id=5, description="Will you remember us?", preview_img="https://e1.pxfuel.com/desktop-wallpaper/59/542/desktop-wallpaper-aesthetic-music-playlist-covers-spotify-playlist-cover.jpg", created_at=date.today(), updated_at=date.today())


    # db.session.add(song1)
    # db.session.add(song2)
    # db.session.add(song3)
    # db.session.add(song4)
    # db.session.add(song5)
    # db.session.add(song6)
    # db.session.add(song7)
    # db.session.add(song8)
    # db.session.add(song9)
    # db.session.add(song10)
    # db.session.add(song11)
    # db.session.add(song12)
    # # new songs SH
    # db.session.add(song13)
    # db.session.add(song14)
    db.session.add(playlist1)
    db.session.add(playlist2)
    db.session.add(playlist3)
    db.session.add(playlist4)
    db.session.add(playlist5)
    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(hirosawa)
    db.session.add(kohya)
    db.session.commit()

    db.session.execute(insert(playlist_songs).values(
        playlist_id=1, song_id=1))
    db.session.execute(insert(playlist_songs).values(
        playlist_id=1, song_id=2))
    db.session.execute(insert(playlist_songs).values(
        playlist_id=4, song_id=3))
    db.session.execute(insert(playlist_songs).values(
        playlist_id=4, song_id=4))
    db.session.execute(insert(playlist_songs).values(
        playlist_id=4, song_id=5))
    db.session.execute(insert(playlist_songs).values(
        playlist_id=4, song_id=6))
    db.session.execute(insert(playlist_songs).values(
        playlist_id=4, song_id=7))
    db.session.execute(insert(playlist_songs).values(
        playlist_id=4, song_id=8))
    db.session.execute(insert(playlist_songs).values(
        playlist_id=5, song_id=9))
    db.session.execute(insert(playlist_songs).values(
        playlist_id=5, song_id=10))
    db.session.execute(insert(playlist_songs).values(
        playlist_id=5, song_id=11))
    db.session.execute(insert(playlist_songs).values(
        playlist_id=5, song_id=12))
    db.session.commit()


# def seed_playlist_songs():

#     db.session.execute(insert(playlist_songs).values(
#     playlist_id=2, song_id=1))
#     db.session.execute(insert(playlist_songs).values(
#     playlist_id=2, song_id=2))

# def seed_playlist_songs():

#     db.session.execute(insert(playlist_songs).values(
#         playlist_id=2, song_id=1))
#     db.session.execute(insert(playlist_songs).values(
#         playlist_id=2, song_id=2))
#     db.session.commit()

# def seed_songs():
#     song1 = Song(
#         name="Karma Police", artist_name="Quentin", artist_id=1, mp3_file="song1.mp3", genre="Alternative", created_at=date.today(), updated_at=date.today()
#     )
#     song2 = Song(
#         name="Karma", artist_name="Efren", artist_id=2, mp3_file="song2.mp3", genre="Rock", created_at=date.today(), updated_at=date.today()
#     )

#     db.session.add(song1)
#     db.session.add(song2)
#     db.session.commit()


# def seed_playlists():
#     playlist1 = Playlist(
#         name="Alternative Stuff", public=True, user_id=1, description="HOLY MOLY SO COOL", created_at=date.today(), updated_at=date.today()
#     )
#     playlist2 = Playlist(
#         name="Rocky Stuff", public=False, user_id=2, description="HOLY MOLY SO COOLER", created_at=date.today(), updated_at=date.today()
#     )
#     playlist3 = Playlist(
#         name="Rocky Tuff", public=False, user_id=2, description="HOLY MOLY SO COOLER", created_at=date.today(), updated_at=date.today()
#     )
#     db.session.add(playlist1)
#     db.session.add(playlist2)
#     db.session.add(playlist3)
#     db.session.commit()


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
