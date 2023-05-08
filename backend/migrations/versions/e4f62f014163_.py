"""empty message

Revision ID: e4f62f014163
Revises:
Create Date: 2023-05-07 15:31:54.447270

"""
from alembic import op
import sqlalchemy as sa


import os
environment = os.getenv("FLASK_ENV")
SCHEMA = os.environ.get("SCHEMA")


# revision identifiers, used by Alembic.
revision = 'e4f62f014163'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=40), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('playlists',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=100), nullable=False),
    sa.Column('public', sa.Boolean(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('description', sa.String(length=255), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('songs',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=255), nullable=False),
    sa.Column('artist_id', sa.Integer(), nullable=False),
    sa.Column('mp3_file', sa.String(length=255), nullable=False),
    sa.Column('genre', sa.String(length=255), nullable=False),
    sa.ForeignKeyConstraint(['artist_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('comments',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('song_id', sa.Integer(), nullable=False),
    sa.Column('text', sa.String(length=255), nullable=True),
    sa.ForeignKeyConstraint(['song_id'], ['songs.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('playlist_songs',
    sa.Column('playlist_id', sa.Integer(), nullable=False),
    sa.Column('song_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['playlist_id'], ['playlists.id'], ),
    sa.ForeignKeyConstraint(['song_id'], ['songs.id'], ),
    sa.PrimaryKeyConstraint('playlist_id', 'song_id')
    )
    op.create_table('song_likes',
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('song_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['song_id'], ['songs.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('user_id', 'song_id')
    )
    # ### end Alembic commands ###

        # ### end Alembic commands ###
    if environment == "production":
        op.execute(f"ALTER TABLE users SET SCHEMA {SCHEMA};")
        op.execute(f"ALTER TABLE playlists SET SCHEMA {SCHEMA};")
        op.execute(f"ALTER TABLE songs SET SCHEMA {SCHEMA};")
        op.execute(f"ALTER TABLE comments SET SCHEMA {SCHEMA};")
        op.execute(f"ALTER TABLE song_likes SET SCHEMA {SCHEMA};")
        op.execute(f"ALTER TABLE playlist_songs comments SET SCHEMA {SCHEMA};")






def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('song_likes')
    op.drop_table('playlist_songs')
    op.drop_table('comments')
    op.drop_table('songs')
    op.drop_table('playlists')
    op.drop_table('users')
    # ### end Alembic commands ###
