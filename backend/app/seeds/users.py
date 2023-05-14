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
        username='Demo', email='demo@aa.io', password='password', display_name='Demo user', first_name='Demo', last_name='Demo', city='Demo', country='Demo', bio='Demo User', profile_pic='https://previews.123rf.com/images/lkeskinen/lkeskinen1611/lkeskinen161107812/66881555-demo-rubber-stamp-grunge-design-with-dust-scratches-effects-can-be-easily-removed-for-a-clean.jpg')
    marnie = User(
        username='marnie', email='marnie@aa.io', password='password', display_name='Marnieeee', first_name='Marnie', last_name='bloob', city='Saigon', country='Vietnam', bio='Love this app', profile_pic='https://cdn.britannica.com/18/137318-050-29F7072E/rooster-Rhode-Island-Red-roosters-chicken-domestication.jpg')
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password', display_name='Bobbbbie', first_name='Bob', last_name='Bie', city='San Francisco', country='US', bio='It works over here too', profile_pic='https://styles.redditmedia.com/t5_2uc06/styles/communityIcon_0zttllkgeaa81.png?width=256&v=enabled&s=37b76e9adfe0e716c1d6ec1d43250db31bb7cf1a')
    hirosawa = User (
        username='hiroSawa', email='hirosawa@aa.io', password='password', display_name='Hiroyuki Sawano', first_name ='Hiroyuki', last_name='Sawano', city='Tokyo', country='Japan', bio='Renowned composer', profile_pic='https://www.themoviedb.org/t/p/w600_and_h900_bestv2/egKyVXXlJ2u3oI0tVxgGK5qeIO6.jpg')
    kohya = User (
        username='kohYa', email='kohya@aa.io', password='password', display_name='Kohta Yamamoto', first_name ='Kohta', last_name='Yamamoto', city='Tokyo', country='Japan', bio='Industry legend', profile_pic='https://i.scdn.co/image/ab6761610000e5ebd1ec5a64a834adc0e2ba03a2')


    song1 = Song(
        name="Karma Police", artist_name="Quentin", artist_id=1, mp3_file="song1.mp3", genre="Alternative", preview_img='https://citizeninsane.eu/music/okc/img/karmapoliceprint.jpg', created_at=date.today(), updated_at=date.today())
    song2 = Song(
        name="Karma", artist_name="Efren", artist_id=2, mp3_file="song2.mp3", genre="Rock", preview_img='https://citizeninsane.eu/music/okc/img/karmapoliceprint.jpg', created_at=date.today(), updated_at=date.today())
    song3 = Song(
        name="4N", artist_name="Hiroyuki Sawano", artist_id=4, mp3_file="4N.mp3", genre="Instrumental", preview_img='https://static.wikia.nocookie.net/86-eighty-six/images/7/79/Soundtrack_album_cover.jpg/revision/latest?cb=20210607145154', created_at=date.today(), updated_at=date.today())
    song4 = Song(
        name="8SIX", artist_name="Hiroyuki Sawano", artist_id=4, mp3_file="8SIX.mp3", genre="Instrumental", preview_img='https://static.wikia.nocookie.net/86-eighty-six/images/7/79/Soundtrack_album_cover.jpg/revision/latest?cb=20210607145154', created_at=date.today(), updated_at=date.today())
    song5 = Song(
        name="pianoVIIIVI-i", artist_name="Hiroyuki Sawano", artist_id=4, mp3_file="pianoVIIIVI-i.mp3", genre="Instrumental", preview_img='https://static.wikia.nocookie.net/86-eighty-six/images/7/79/Soundtrack_album_cover.jpg/revision/latest?cb=20210607145154', created_at=date.today(), updated_at=date.today())
    song6 = Song(
        name="pianoVIIIVI-iii", artist_name="Hiroyuki Sawano", artist_id=4, mp3_file="pianoVIIIVI-iii.mp3", genre="Instrumental", preview_img='https://static.wikia.nocookie.net/86-eighty-six/images/7/79/Soundtrack_album_cover.jpg/revision/latest?cb=20210607145154', created_at=date.today(), updated_at=date.today())
    song7 = Song(
        name="Lilas", artist_name="Hiroyuki Sawano", artist_id=4, mp3_file="lilas.mp3", genre="Instrumental", preview_img='https://static.wikia.nocookie.net/86-eighty-six/images/7/79/Soundtrack_album_cover.jpg/revision/latest?cb=20210607145154', created_at=date.today(), updated_at=date.today())
    song8 = Song(
        name="JaguarN0-10", artist_name="Hiroyuki Sawano", artist_id=4, mp3_file="jaguarN0-10.mp3", genre="Instrumental", preview_img='https://static.wikia.nocookie.net/86-eighty-six/images/7/79/Soundtrack_album_cover.jpg/revision/latest?cb=20210607145154', created_at=date.today(), updated_at=date.today())
    song9 = Song(
        name="Talk to you", artist_name="Kohta Yamamoto", artist_id=5, mp3_file="Talktoyou.mp3", genre="Instrumental", preview_img='https://static.wikia.nocookie.net/86-eighty-six/images/7/79/Soundtrack_album_cover.jpg/revision/latest?cb=20210607145154', created_at=date.today(), updated_at=date.today())
    song10 = Song(
        name="Underneath the Sky", artist_name="Kohta Yamamoto", artist_id=5, mp3_file="Underneath the Sky.mp3", genre="Instrumental", preview_img='https://static.wikia.nocookie.net/86-eighty-six/images/7/79/Soundtrack_album_cover.jpg/revision/latest?cb=20210607145154', created_at=date.today(), updated_at=date.today())
    song11 = Song(
        name="Hear My Voice", artist_name="Kohta Yamamoto", artist_id=5, mp3_file="Hearmyvoice.mp3", genre="Instrumental", preview_img='https://static.wikia.nocookie.net/86-eighty-six/images/7/79/Soundtrack_album_cover.jpg/revision/latest?cb=20210607145154', created_at=date.today(), updated_at=date.today())
    song12 = Song(
        name="Never Stopping at All", artist_name="Sweet Dove", artist_id=5, mp3_file="Neverstoppingatall.mp3", genre="Instrumental", preview_img='https://static.wikia.nocookie.net/86-eighty-six/images/7/79/Soundtrack_album_cover.jpg/revision/latest?cb=20210607145154', created_at=date.today(), updated_at=date.today())

    playlist1 = Playlist(
        name="Alternative Stuff", public=True, user_id=1, description="HOLY MOLY SO COOL", created_at=date.today(), updated_at=date.today())
    playlist2 = Playlist(
        name="Rocky Stuff", public=False, user_id=2, description="HOLY MOLY SO COOLER", created_at=date.today(), updated_at=date.today())
    playlist3 = Playlist(
        name="Rocky Tuff", public=False, user_id=2, description="HOLY MOLY SO COOLER", created_at=date.today(), updated_at=date.today())
    playlist4 = Playlist(
        name="Hiroyuki Sawano 86", public=False, user_id=4, description="Lena is looking at Shin", created_at=date.today(), updated_at=date.today())
    playlist5 = Playlist(
        name="Kohta Yamamoto 86", public=False, user_id=5, description="Will you remember us?", created_at=date.today(), updated_at=date.today())

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
    db.session.add(song3)
    db.session.add(song4)
    db.session.add(song5)
    db.session.add(song6)
    db.session.add(song7)
    db.session.add(song8)
    db.session.add(song9)
    db.session.add(song10)
    db.session.add(song11)
    db.session.add(song12)
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
