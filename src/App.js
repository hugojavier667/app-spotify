import React, { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavbarComponent } from "./components/NavbarComponent";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import NotFound from "./components/NotFound";
import ls from "local-storage";
import Axios from "axios";
import AlbumsPage from "./components/AlbumsPage";
import ArtistPage from "./components/ArtistPage";
import AlbumDetailsPage from "./components/AlbumDetailsPage";

const qs = require("querystring");

const routing = (
  <Switch>
    <Route exact path="/albums" component={AlbumsPage} />
    <Route exact path="/albums/:albumId" component={AlbumDetailsPage} />
    <Route path="/artist/:artistId" component={ArtistPage} />
    <Route path="/search" component={SearchPage} />
    <Route component={NotFound} />
  </Switch>
);

const login = () => {
  const request = {
    grant_type: "client_credentials",
    client_id: "4cd64ff3d9814787853dc8441e0246eb",
    client_secret: "73b547f1fbe04e3ebb0c8270995a10eb"
  };

  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  };

  Axios.post(
    "https://accounts.spotify.com/api/token",
    qs.stringify(request),
    config
  ).then(response => {
      const {access_token} = response.data;

      ls.set("access_token", access_token);

      Axios.interceptors.request.use(function (config) {
          config.headers.Authorization = `Bearer ${access_token}`;
          return config;
      });
  });
};

function App() {
  useEffect(() => {
      login();
  });

  return (
    <div className="App">
      <Router>
        <NavbarComponent />
        {routing}
      </Router>
    </div>
  );
}

export default App;