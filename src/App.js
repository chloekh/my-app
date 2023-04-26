import kart from './resources/gløskart.png'
import alarm from './resources/musikk.wav'
import ekkofritt from './resources/ekkofritt.WAV'
import elkantina_historie from './resources/elkantina_historie.WAV'
import elkantina_støy from './resources/støy/elkantina_støy.WAV'
import element_historie from './resources/element_historie.WAV'
import element_støy from './resources/støy/element_støy.WAV'
import hangaren_historie from './resources/hangaren_historie.WAV'
import hangaren_støy from './resources/støy/hangaren_støy.WAV'
import stripa_historie from './resources/stripa_historie.WAV'
import stripa_støy from './resources/støy/stripa_støy.WAV'
import kjelhuset_historie from './resources/kjelhuset_historie.WAV'
import kjelhuset_støy from './resources/støy/kjelhuset_støy.WAV'
import hovedbygget_historie from './resources/hovedbygget_historie.WAV'
import hovedbygget_støy from './resources/støy/hovedbygget_støy.WAV'
import './App.css';
import * as React from 'react';
import Button from '@mui/material/Button'
import { IconButton } from '@mui/material';
import { color, height, positions, shape, sizeHeight, Stack } from '@mui/system';
import HearingIcon from '@mui/icons-material/Hearing';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { yellow, purple, pink } from '@mui/material/colors';
import {styled} from '@mui/material/styles'
import { Circle, Pause, Square, ThermostatOutlined } from '@mui/icons-material';
//chloe
import Slider from '@mui/material/Slider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
//import node
//import * as fs from 'node:fs';
//import { writeFile } from 'node:fs' 
//import {any} from '@servicestack/client'


const ColorButton = styled(IconButton)(({theme}) => ({
  color: purple[500],
}))
const BetterSlider = styled(Slider)(({theme}) => ({
  color: pink[500],
  height: 500,
  paddingTop: 10,
}))


var audio_BG = new Audio();
var audio_endre = new Audio();
//const fs = require('fs');
const d = new Date();
const marks = [
  {value: 50,
  label: '0 dB',},
  {value: 60,
  label: '6 dB',},
  {value: 70,
  label: '12 dB',},
  {value: 80,
  label: '18 dB',},
  {value: 90,
  label: '24 dB',},
  {value: 100,
  label: '30 dB',},
  {value: 40,
  label: '-6 dB',},
  {value: 30,
  label: '-12 dB',},
  {value: 20,
  label: '-18 dB',},
  {value: 10,
  label: '-24 dB',},
  {value: 0,
  label: '-30 dB',},
]
const marks_original = [
  {value: 0,
  label: '0 dB',},
  {value: 6,
  label: '6 dB',},
  {value: 12,
  label: '12 dB',},
  {value: 18,
  label: '18 dB',},
  {value: 24,
  label: '24 dB',},
  {value: 30,
  label: '30 dB',},
  {value: -6,
  label: '-6 dB',},
  {value: -12,
  label: '-12 dB',},
  {value: -18,
  label: '-18 dB',},
  {value: -24,
  label: '-24 dB',},
  {value: -30,
  label: '-30 dB',},
]

/*   const [play] = useSound({alarm}) 
function play() {
  new Audio(alarm).play()
}*/


class App extends React.Component {
  constructor(props) {
    super(props);
    //this.setState({msg : "Trykk på en knapp for å begynne"});
    this.state = {msg : "Trykk på en knapp for å begynne"};
    this.state = {audio_BG : false};
    this.state = {audio_endre : false};
    this.state = {ikkeAktiv : true};
    this.state = {pause : <PauseIcon />};
    
    
    this.handleEl1 = this.handleEl1.bind(this);
    this.handleEl2 = this.handleEl2.bind(this);
    this.handleSt1 = this.handleSt1.bind(this);
    this.handleSt2 = this.handleSt2.bind(this);
    this.handleRf = this.handleRf.bind(this);
    this.handleHvd = this.handleHvd.bind(this);
    this.handleKjl = this.handleKjl.bind(this);

    this.handleLagre = this.handleLagre.bind(this);
    this.handleStopp = this.handleStopp.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleLagre() {
    console.log("Lagret!")/*
    
    fs.writeFile("./resources/resultater/"+this.state.msg+".txt", d.getTime()+": "+audio_endre.volume, {'flag' : 'a'}, function(err) {
      if(err) {
        return console.log(err);
      }
      console.log("Lydvolum ble lagret i "+this.state.msg+".txt, klokka "+d.getTime());
    })*/
    //legg til at lyd pauses her
  }
  
  handleStopp() {
    if(this.state.audio_BG) {
      audio_BG.pause();
      this.setState({audio_BG : false});
    }
    else {
      if(this.state.msg !== "Ekkofritt-rommet") {
        audio_BG.play();
        this.setState({audio_BG : true});
      }
    }
    if(this.state.audio_endre) {
      audio_endre.pause();
      this.setState({audio_endre : false});
      this.setState({pause : <PlayArrowIcon />});
    }
    else{
      audio_endre.play();
      this.setState({audio_endre : true});
      this.setState({pause : <PauseIcon />});
    }
  }

  handleClick() {
    this.setState({ikkeAktiv : false});
    console.log("clicked");
  }


  handleEl1() {
    this.setState({msg : "El-Kantina"});
    if(this.state.audio_BG) {
     audio_BG.pause(); 
    }
    if(this.state.audio_endre) {
     audio_endre.pause(); 
    }

    audio_BG = new Audio(elkantina_støy);
    audio_BG.play();
    this.setState({audio_BG : true});
    
    audio_endre = new Audio(elkantina_historie);
    audio_endre.play();
    this.setState({audio_endre : true});
    this.setState({pause : <PauseIcon />});
  }
  handleEl2() {
    this.setState({msg : "Ekkofritt-rommet"});
    if(this.state.audio_BG) {
     audio_BG.pause(); 
    }
    if(this.state.audio_endre) {
     audio_endre.pause(); 
    }
    
    audio_endre = new Audio(ekkofritt);
    audio_endre.play();
    this.setState({audio_endre : true});
    this.setState({pause : <PauseIcon />});
  }

  handleSt1() {
    this.setState({msg : "Hangaren"});
    if(this.state.audio_BG) {
     audio_BG.pause(); 
    }
    if(this.state.audio_endre) {
     audio_endre.pause(); 
    }
    audio_BG = new Audio(hangaren_støy);
    audio_BG.play();
    this.setState({audio_BG : true});

    audio_endre = new Audio(hangaren_historie);
    audio_endre.play();
    this.setState({audio_endre : true});
    this.setState({pause : <PauseIcon />});
  }
  handleSt2() {
    this.setState({msg : "Stripa"});
    if(this.state.audio_BG) {
     audio_BG.pause(); 
    }
    if(this.state.audio_endre) {
     audio_endre.pause(); 
    }
    audio_BG = new Audio(stripa_støy);
    audio_BG.play();
    this.setState({audio_BG : true});

    audio_endre = new Audio(stripa_historie);
    audio_endre.play();
    this.setState({audio_endre : true});
    this.setState({pause : <PauseIcon />});
  }

  
  handleRf() {
    this.setState({msg : "Element-kantina"});
    if(this.state.audio_BG) {
     audio_BG.pause(); 
    }
    if(this.state.audio_endre) {
     audio_endre.pause(); 
    }
    audio_BG = new Audio(element_støy);
    audio_BG.play();
    this.setState({audio_BG : true});

    audio_endre = new Audio(element_historie);
    audio_endre.play();
    this.setState({audio_endre : true});
    this.setState({pause : <PauseIcon />});
  }
  
  handleKjl() {
    this.setState({msg : "Kjelhuset"});
    if(this.state.audio_BG) {
     audio_BG.pause(); 
    }
    if(this.state.audio_endre) {
     audio_endre.pause(); 
    }
    audio_BG = new Audio(kjelhuset_støy);
    audio_BG.play();
    this.setState({audio_BG : true});

    audio_endre = new Audio(kjelhuset_historie);
    audio_endre.play();
    this.setState({audio_endre : true});
    this.setState({pause : <PauseIcon />});
  }

  handleHvd() {
    this.setState({msg : "Aulaen"});
    if(this.state.audio_BG) {
     audio_BG.pause(); 
    }
    if(this.state.audio_endre) {
     audio_endre.pause(); 
    }
    audio_BG = new Audio(hovedbygget_støy);
    audio_BG.play();
    this.setState({audio_BG : true});

    audio_endre = new Audio(hovedbygget_historie);
    audio_endre.play();
    this.setState({audio_endre : true});
    this.setState({pause : <PauseIcon />});
  }



  render() {

    return (
      <div className="App">
          
        <Grid container spacing={4}>
            <Grid item xs={2}>
              <Typography id="discrete-slider-always" gutterBottom paddingTop={10}>
                 Historieforsterkning
              </Typography>
              <BetterSlider
              className='volume_slider'
              onChange={ (e, val) => audio_endre.volume = val/100 } // audio_endre.volume = 1/32*Math.pow(Math.sqrt(2), val/3)
              sx={{
                '& input[type="range"]': {
                  WebkitAppearance: 'slider-vertical',
                },
              }}
              track={false}
              orientation="vertical"
              aria-labelledby="discrete-slider-always"
              defaultValue={30}
              min={0}
              max={100}
              marks={marks}
              step={5}
              value={this.state.audio_BG_vol}
              aria-label="Volume"
              valueLabelDisplay="auto"
              disabled={this.state.msg ? false : true}
              />


            </Grid>
            <div className='cont'>
              <button className='lagreKnapp' aria-label='Lagre' onClick={this.handleLagre} disabled={this.state.msg ? false : true}>
                <b>Lagre resultat</b>
              </button>
              <button className='stoppKnapp' aria-label='StoppKnapp' onClick={this.handleStopp} disabled={this.state.msg ? false : true}>
                {this.state.pause}
              </button>
            </div>
            <Grid item xs={5.5}>
              <div className='wrapper'>
                <div className="container">
                  <div className="topcont">
                  <p className='paragraph-place'>{this.state.msg}</p>
                  </div>
                  
                  <img src={kart} className="kart" alt="logo" />

                  <button className='el1' aria-label='El1' onClick={() => {this.handleEl1(); this.handleClick()}} title='Elkantina'>
                    <HearingIcon />
                  </button>
                  <button className='el2' aria-label='El2' onClick={() => {this.handleEl2(); this.handleClick()}} title='Ekkofritt rom'>
                    <HearingIcon />
                  </button>

                  <button className='st1' aria-label='St1' onClick={() => {this.handleSt1(); this.handleClick()}} title='Hangaren'>
                    <HearingIcon />
                  </button>
                  <button className='st2' aria-label='St2' onClick={() => {this.handleSt2(); this.handleClick()}} title='Stripa'>
                    <HearingIcon />
                  </button>
                  
                  <button className='rf' aria-label='Rf' onClick={() => {this.handleRf(); this.handleClick()}} title='Element'>
                    <HearingIcon />
                  </button>

                  <button className='kjl' aria-label='Kjl' onClick={() => {this.handleKjl(); this.handleClick()}} title='Kjelhuset'>
                    <HearingIcon />
                  </button>

                  <button className='hvd' aria-label='Hvd' onClick={() => {this.handleHvd(); this.handleClick()}} title='Aulaen'>
                    <HearingIcon />
                  </button>
                  </div>
              </div>
            </Grid>
          </Grid>

      </div>
    );
  
  }}

/*
function App() {

  function preventHorizontalKeyboardNavigation(event: React.KeyboardEvent) {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
    }
  }

   const [play] = useSound({audio}) 
  function play() {
    new Audio(audio).play()
  }


    return (
      <div className="App">
        <header className="App-header">
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <Typography id="discrete-slider-always" gutterBottom>
                Always visible
              </Typography>
              <Slider
              sx={{
                '& input[type="range"]': {
                  WebkitAppearance: 'slider-vertical',
                },
              }}
              track={false}
              orientation="vertical"
              aria-labelledby="discrete-slider-always"
              defaultValue={30}
              aria-label="Temperature"
              valueLabelDisplay="auto"
              onKeyDown={preventHorizontalKeyboardNavigation}
              />
            </Grid>
            <Grid item xs={8}>
              <img src={kart} className="kart" alt="logo" />
            </Grid>
            <Grid item xs={1}>
              <button onClick= {play}>
                knapp
              </button>
          </Grid>
          </Grid>
        </header>
      </div>
    );
}*/


export default App;
