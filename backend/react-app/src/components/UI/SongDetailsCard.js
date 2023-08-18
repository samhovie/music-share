import { useState } from 'react'
import './SongDetailsCard.css'
import { formatDate } from '../../helperfunctions/formatDate'

const SongDetailsCard = ({ song }) => {
    const [isPlaying, setIsPlaying] = useState(false)

    const isPlayingClickHandler = () => setIsPlaying(!isPlaying)
    console.log('song', song)

    return (
        <>
            <div className='song-details-card-wrapper'>
                <div className='song-details-card-left'>
                    <div className='song-details-card-top'>
                        <div className='song-details-card-top-left'>
                            <div className='song-details-card-play-button'
                                onClick={isPlayingClickHandler}
                            >
                                {!isPlaying ?
                                    <i className="fa-solid fa-circle-play"
                                        style={{ color: '#932db9', fontSize: '60px', cursor: 'pointer' }}
                                    ></i>
                                    :
                                    <i className="fa-solid fa-pause"
                                        style={{ color: '#932db9', fontSize: '60px',cursor: 'pointer' }}
                                    ></i>
                                }
                            </div>
                            <div className='song-details-card-next-to-play'>
                                <div className='song-details-card-artist'>
                                    {`${song.artist_name}`}
                                </div>
                                <div className='song-details-card-song'>
                                    {`${song.name}`}
                                </div>
                            </div>
                        </div>
                        <div className='song-details-card-top-right'>
                            <div className='song-details-card-createdAt'>
                                {`${formatDate(song.created_at)}`}
                                {/* on SoundCloud it's 1month ago for example */}
                            </div>
                            <div className='song-details-card-genre'>
                                {`${song.genre}`}
                            </div>
                        </div>
                    </div>
                    <div className='song-details-card-bottom'>

                        <div className='song-details-card-soundwave'>
                            -------------------------------------------
                        </div>
                    </div>
                </div>
                <div className='song-details-card-right'>
                    <img alt='' src={song.preview_img}
                        className='song-details-card-image'
                    ></img>
                </div>
            </div>

        </>
    )
}

export default SongDetailsCard
