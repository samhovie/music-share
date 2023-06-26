from .db import db, environment, SCHEMA, add_prefix_for_prod
from .user import User
from .song import Song
from .playlist import Playlist
from .comment import Comment
from .join_tables import song_like, playlist_songs
# from .db import environment, SCHEMA, boop
from faker import Faker;
fake = Faker()
