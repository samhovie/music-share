import { useState } from 'react'
import './SongDetailsCard.css'

const SongDetailsCard = ({song}) => {
    const [isPlaying, setIsPlaying] = useState(false)

    const isPlayingClickHandler = () => setIsPlaying(!isPlaying)
    // console.log("SONGGGGG ", song)

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
                                style={{color: '#932db9', fontSize: '60px'}}
                                ></i>
                                :
                                <i className="fa-solid fa-pause"
                                style={{color: '#932db9', fontSize: '60px'}}
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
                                {`${song.created_at}`}
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
                        <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bcc96d39-785d-4796-bb89-fede2ff7fe12/dfazdjy-53955384-ca34-4f15-b1af-bc603a894a4d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JjYzk2ZDM5LTc4NWQtNDc5Ni1iYjg5LWZlZGUyZmY3ZmUxMlwvZGZhemRqeS01Mzk1NTM4NC1jYTM0LTRmMTUtYjFhZi1iYzYwM2E4OTRhNGQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.cslsTOAqoh1dZhq-YABXtw84SvMtK3gheHOSmRSy-8w'
                            className='song-details-card-image'
                        ></img>
                    </div>
                </div>

        </>
    )
}

export default SongDetailsCard
