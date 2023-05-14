import React, { useState, useEffect, createContext, useContext } from "react";
import { Provider, useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import Homepage from "./components/Homepage";
import DiscoverPage from "./components/DiscoverPage";
import FeedPage from "./components/FeedPage";
import CreateSongForm from "./components/CreateSongForm"
import ProfilePage from "./components/ProfilePage";
import SongDetailsPage from "./components/SongDetailsPage";
// added???
import PlaylistDetailsPage from "./components/PlaylistDetailsPage"
import AddSongToPlaylistModal from "./components/AddSongToPlaylistModal"
import SongUpload from "./components/SongUpload";
import CreatePlaylistForm from "./components/CreateNewPlaylist";
import CurrentUserPlaylist from "./components/MyPlaylists";
import CurrentUserSongs from "./components/MySongs";
import Player from "./components/Player";
import UserLikesPage from "./components/UserLikesPage";
import SplashPage from "./components/SplashPage";
// import CreatePlaylistModal from "./components/CreatePlaylistForm";


function usePlayer() {
  const [url, setUrl] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  return {url, setUrl, isPlaying, setIsPlaying};
}

export const PlayerContext = createContext();
const PlayerProvider = ({children}) => {
  const {url, setUrl, isPlaying, setIsPlaying} = usePlayer()
  return (
    <PlayerContext.Provider value={{url, setUrl, isPlaying, setIsPlaying}}>
      {children}
    </PlayerContext.Provider>
  );
};


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);



  return (
    <>
      <PlayerProvider>
        <Navigation isLoaded={isLoaded} />
        <Player />

        {isLoaded && (
          <Switch>
            <Route exact path='/likes'>
              <UserLikesPage />
            </Route>
            <Route exact path='/'>
              <SplashPage />
            </Route>
            <Route exact path='/upload'>
              <SongUpload />
            </Route>
            <Route exact path='/profile'>
              <ProfilePage />
            </Route>
            <Route exact path="/playlists/current">
              <CurrentUserPlaylist />
            </Route>
            <Route exact path="/playlists/new">
              <CreatePlaylistForm />
            </Route>
            <Route exact path="/songs/current">
              <CurrentUserSongs />
            </Route>
            <Route exact path='/playlists/:playlistId'>
              <PlaylistDetailsPage />
            </Route>
            <Route exact path='/songs/:songId'>
              <SongDetailsPage />
            </Route>
            <Route exact path="/discover">
              <DiscoverPage />
            </Route>
            <Route exact path="/feed">
              <FeedPage />
            </Route>
            <Route exact path="/login" >
              <LoginFormPage />
            </Route>
            <Route exact path="/signup">
              <SignupFormPage />
            </Route>
            {/* added?? */}
            <Route exact path="/playlists/:playlistId/songs/:songId">
              <AddSongToPlaylistModal />
            </Route>
          </Switch>
        )}
      </PlayerProvider>
    </>
  );
}

export default App;
