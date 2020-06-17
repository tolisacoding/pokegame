import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch, 
  } from 'react-router-dom'

import Navbar from './Navbar';
import Home from './Home';
import PokePlay from './PokePlay';
import ScoreSheet from './ScoreSheet';
import ScoreDetail from './ScoreDetail';
import BG from './BG';

import { PokeListContext } from '../contexts/PokelistContext';

function GameApp(props) {
    const { loading } = useContext(PokeListContext);

    if(loading) return <div className='loader-wrapper'><div className='loader'></div></div>;

    function openFullscreen() {
      const elem = document.querySelector(".GameApp");
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
      }
    }
   
    return(
        <div className="GameApp">
          <Router>
              <BG openFullscreen={openFullscreen}/>
              <Navbar openFullscreen={openFullscreen}/>
              <Switch>
                  <Route exact path='/' component={routeProps=><Home stuff={routeProps} openFullscreen={openFullscreen}/>} />
                  <Route exact path='/pokeplay' render={()=><PokePlay/>}/>
                  <Route exact path='/scoresheet' component={ScoreSheet} />                
                  <Route exact path='/scoresheet/detail/:round' component={ScoreDetail} />   <Route render={()=><h1>error not found</h1>} />
              </Switch> 
          </Router>    
      </div>
    )
}

export default GameApp;