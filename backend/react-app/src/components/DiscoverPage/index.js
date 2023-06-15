import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAllPlaylistsThunk } from '../../store/playlists';
import PlaylistWrapper from '../UI/PlaylistWrapper';
import './DiscoverPage.css'
import OpenModalButton from '../OpenModalButton';
import CreatePlaylistForm from '../CreateNewPlaylist';
import CarouselComponent from '../UI/Carousel/Carousel';
// import {CarouselComponent} from '../UI/Carousel/Carousel';


const DiscoverPage = () => {
    const dispatch = useDispatch()
    const allPlaylists = useSelector((state) => state.playlists.allPlaylists)
    const playlists = Object.values(allPlaylists)

    useEffect(() => {
        dispatch(getAllPlaylistsThunk())
    }, [dispatch])

    return (
        <>
            <div className='global-outerwrapper-outer'>
                <div className='global-outerwrapper-wrapper discover-page-wrapper'>
                    <CarouselComponent />
                    <OpenModalButton
                        className='buttonss'
                        modalComponent={<CreatePlaylistForm />}
                        buttonText="Create Playlist"
                    />

                    <PlaylistWrapper playlists={playlists} />
                </div>
            </div>

        </>
    )
}

export default DiscoverPage
