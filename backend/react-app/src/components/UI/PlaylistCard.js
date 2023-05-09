import './PlaylistCard.css'

const PlaylistCard = () => {


    return (
        <div className='playlist-card-wrapper'>
            <div className='playlist-card-image'>
                {/* this is hardcoded, change later */}
                <img src='https://media.glamour.com/photos/5f980f5cc0115735c138a7a9/16:9/w_2560%2Cc_limit/drake.jpg'
                     alt='song image'
                >
                </img>
            </div>
            <div className='playlist-card-title'>
                {/* this is hardcoded, change later */}
                Hip-hop
            </div>
            <div className='playlist-card-display-name'>
                {/* this is hardcoded, change later */}
                Vladilena milize
            </div>
        </div>
    )
}

export default PlaylistCard
