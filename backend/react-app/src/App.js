import React, { useState, useEffect, createContext } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import DiscoverPage from "./components/DiscoverPage";
import FeedPage from "./components/FeedPage";
import ProfilePage from "./components/ProfilePage";
import SongDetailsPage from "./components/SongDetailsPage";
import PlaylistDetailsPage from "./components/PlaylistDetailsPage"
import AddSongToPlaylistModal from "./components/AddSongToPlaylistModal"
import SongUpload from "./components/SongUpload";
import CreatePlaylistForm from "./components/CreateNewPlaylist";
import CurrentUserPlaylist from "./components/MyPlaylists";
import CurrentUserSongs from "./components/MySongs";
import Player from "./components/Player";
import UserLikesPage from "./components/UserLikesPage";
import SplashPage from "./components/SplashPage";
import DeleteUser from "./components/DeleteUser";
import { useSelector } from "react-redux";
import ScrollToTop from "./components/UI/ScrollToTop";

// import CreatePlaylistModal from "./components/CreatePlaylistForm";


function usePlayer() {
  const [url, setUrl] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  return { url, setUrl, isPlaying, setIsPlaying };
}

export const PlayerContext = createContext();
export const PlayerProvider = ({ children }) => {
  const { url, setUrl, isPlaying, setIsPlaying } = usePlayer()
  return (
    <PlayerContext.Provider value={{ url, setUrl, isPlaying, setIsPlaying }}>
      {children}
    </PlayerContext.Provider>
  );
};


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);



  return (
    <>
        {sessionUser && <Navigation isLoaded={isLoaded} />}
        <Player />

        {isLoaded && (
          <ScrollToTop>
          <Switch>
            <Route exact path='/'>
              {!sessionUser ? <SplashPage /> : <DiscoverPage />}
            </Route>
            <Route exact path='/likes'>
              <UserLikesPage />
            </Route>
            <Route exact path='/upload'>
              <SongUpload />
            </Route>
            <Route exact path="/delete-account" >
              <DeleteUser />
            </Route>
            <Route exact path='/profile'>
              <ProfilePage />
            </Route>
            <Route exact path="/playlists/new">
              <CreatePlaylistForm />
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
            <Route exact path="/playlists/:playlistId/songs/:songId">
              <AddSongToPlaylistModal />
            </Route>
            
          </Switch>
          </ScrollToTop>
        )}
    </>
  );
}

export default App;
