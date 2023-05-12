from flask.cli import AppGroup
# from .users import seed_users, undo_users, seed_songs, undo_songs, seed_playlists, undo_playlists, seed_comments, undo_comments, seed_playlist_songs, undo_playlist_songs
# from .users import seed_users, undo_users, seed_comments, undo_comments, seed_playlist_songs, undo_playlist_songs
from .users import undo_playlist_songs_users_likes, seed_playlist_songs_users_likes, undo_users, seed_comments, undo_comments

from app.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Before seeding in production, you want to run the seed undo
        # command, which will  truncate all tables prefixed with
        # the schema name (see comment in users.py undo_users function).
        # Make sure to add all your other model's undo functions below
        # undo_users()
        # undo_songs()
        # undo_playlists()
        undo_users()
        undo_songs()
        # undo_playlist_songs()
        undo_playlists()
        undo_comments()
        undo_comments()
        # undo_playlist_songs()
    # seed_users()
    # seed_songs()
    # seed_playlists()
    seed_comments()
    seed_playlist_songs_users_likes()
    # seed_users()
    # seed_songs()
    # seed_playlists()
    seed_comments()
    # seed_playlist_songs()

    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_songs()
    # undo_playlist_songs()
    undo_playlists()
    undo_comments()
    undo_playlist_songs_users_likes()
    # Add other undo functions here
