import React, { useState, useEffect } from "react";
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
import AddSongToPlaylist from "./components/AddSongToPlaylist"

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <CreateSongForm />
          </Route>
          <Route exact path='/profile'>
            <ProfilePage />
          </Route>
          {/* <Route exact path='/playlists/:playlistId'>
            <PlaylistDetailsPage />
          </Route> */}
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
          <Route exact path="/playlists/:playlistId">
            <PlaylistDetailsPage />
          </Route>
          <Route exact path="/playlists/:playlistId/songs/:songId">
            <AddSongToPlaylist />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
