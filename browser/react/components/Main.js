import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import StatefulAlbums from './StatefulAlbums';
import SingleAlbum from './SingleAlbum';
import AllArtists from './AllArtists';
import SingleArtist from './SingleArtist';
import NewPlaylist from './NewPlaylist';
import Sidebar from './Sidebar';
import Player from './Player';

export default class Main extends Component {

  constructor() {
    super();
    this.state = {
      playlists: [],
    };
  }

  render () {
    const fuckYouLinter = this.state;

    return (
      <Router>
        <div id="main" className="container-fluid">
          <div className="col-xs-2">
            <Sidebar playlists={this.state.playlists} />
          </div>
          <div className="col-xs-10">
            <Switch>
              <Route exact path="/albums" component={StatefulAlbums} />
              <Route path="/albums/:albumId" component={SingleAlbum} />
              <Route exact path="/artists" component={AllArtists} />
              <Route path="/artists/:artistId" component={SingleArtist} />
              <Route path="/new-playlist" component={NewPlaylist} />
              <Route component={StatefulAlbums} />
            </Switch>
          </div>
          <Player />
        </div>
      </Router>
    );
  }
}
