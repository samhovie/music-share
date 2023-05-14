from app.models import db, User, Song, Playlist, Comment, playlist_songs, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import date
from sqlalchemy import insert


# Adds a demo user, you can add other users here if you want
# def seed_users():
#     demo = User(
#         username='Demo', email='demo@aa.io', password='password')
#     marnie = User(
#         username='marnie', email='marnie@aa.io', password='password')
#     bobbie = User(
#         username='bobbie', email='bobbie@aa.io', password='password')

#     db.session.add(demo)
#     db.session.add(marnie)
#     db.session.add(bobbie)
#     db.session.commit()


def seed_playlist_songs_users_likes():

    demo = User(
        username='Demo', email='demo@aa.io', password='password')
    marnie = User(
        username='marnie', email='marnie@aa.io', password='password')
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password')

    song1 = Song(
        name="Karma Police", artist_name="Quentin", artist_id=1, mp3_file="https://music-share-rhinos.s3.amazonaws.com/bdc505fef18742a6954daa345f9e3068.mp3", genre="Alternative", created_at=date.today(), updated_at=date.today()
    )
    song2 = Song(
        name="Karma", artist_name="Efren", artist_id=2, mp3_file="https://music-share-rhinos.s3.amazonaws.com/bf2be0b18f4b4f85aaa5d2f3bac9642a.mp3", genre="Rock", created_at=date.today(), updated_at=date.today()
    )
    # new songs SH
    song3 = Song(
        name="Karma", artist_name="Efren", artist_id=2, mp3_file="https://music-share-rhinos.s3.amazonaws.com/8031c80c59fa42a5ba129c7077172139.mp3", genre="Rock", created_at=date.today(), updated_at=date.today()
    )
    song4 = Song(
        name="Karma", artist_name="Efren", artist_id=2, mp3_file="https://music-share-rhinos.s3.amazonaws.com/5dddb1fd62e04d778c3b9535bbf99d4e.mp3", genre="Rock", created_at=date.today(), updated_at=date.today()
    )

    playlist1 = Playlist(
        name="Alternative Stuff", public=True, user_id=1, description="HOLY MOLY SO COOL", created_at=date.today(), updated_at=date.today()
    )
    playlist2 = Playlist(
        name="Rocky Stuff", public=False, user_id=2, description="HOLY MOLY SO COOLER", created_at=date.today(), updated_at=date.today()
    )
    playlist3 = Playlist(
        name="Rocky Tuff", public=False, user_id=2, description="HOLY MOLY SO COOLER", created_at=date.today(), updated_at=date.today()
    )

    # demo.user_like.append(song1)
    # marnie.user_like.append(song1)
    # bobbie.user_like.append(song1)
    # marnie.user_like.append(song2)
    # bobbie.user_like.append(song2)

    # playlist1.song.append(song1)
    # playlist1.song.append(song2)
    # playlist2.song.append(song2)
    # playlist2.song.append(song1)
    # playlist3.song.append(song1)

    db.session.add(song1)
    db.session.add(song2)
    # new songs SH
    db.session.add(song3)
    db.session.add(song4)
    db.session.add(playlist1)
    db.session.add(playlist2)
    db.session.add(playlist3)
    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.commit()


    db.session.execute(insert(playlist_songs).values(
    playlist_id=1, song_id=1))
    db.session.execute(insert(playlist_songs).values(
    playlist_id=1, song_id=2))
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

    db.session.add(comment1)
    db.session.add(comment2)
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
