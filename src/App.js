import kart from './resources/gløskart.png'
import alarm from './resources/musikk.wav'
import './App.css';
import * as React from 'react';
import Button from '@mui/material/Button'
import { IconButton } from '@mui/material';
import { color, height, positions, shape, sizeHeight, Stack } from '@mui/system';
import HearingIcon from '@mui/icons-material/Hearing';
import { yellow, purple } from '@mui/material/colors';
import {styled} from '@mui/material/styles'
import { Circle, Square } from '@mui/icons-material';
//chloe
import Slider from '@mui/material/Slider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const ColorButton = styled(IconButton)(({theme}) => ({
  color: purple[500],
}))


var audio_BG = new Audio(alarm);

/*   const [play] = useSound({alarm}) 
function play() {
  new Audio(alarm).play()
}*/


class App extends React.Component {
  constructor(props) {
    super(props);
    this.setState({msg : "Trykk på en knapp for å begynne"});
    this.state = {audio_BG : false};
    this.state = {audio_endre : false}
    this.state = {audio_endre_vol : 5}
    
    this.handleEl1 = this.handleEl1.bind(this);
    this.handleEl2 = this.handleEl2.bind(this);
    this.handleSt1 = this.handleSt1.bind(this);
  }


  handleEl1() {
    this.setState({msg : audio_BG.volume});
    //this.setState({msg : "El-kantina"});
    if(this.state.audio_BG) {
     audio_BG.pause(); 
     this.setState({audio_BG: false})
    }
    audio_BG = new Audio(alarm);
    //audio_BG.volume() =
    audio_BG.play();
    this.setState({audio_BG : true});
  }

  handleEl2() {
    this.setState({msg : "Ekkofritt rom"});
    if(this.state.audio_BG) {
     audio_BG.pause(); 
     this.setState({audio_BG: false})
    }
    audio_BG = new Audio(alarm);
    audio_BG.play();
    this.setState({audio : true});
    
  }
  handleSt1() {
    this.setState({msg : "Hangaren"});
    if(this.state.audio_BG) {
     audio_BG.pause(); 
     this.setState({audio_BG: false})
    }
    
  }



  render() {

    return (
      <div className="App">
          
        <Grid container spacing={2}>
            <Grid item xs={2}>
              <Typography id="discrete-slider-always" gutterBottom>
                 Always visible
              </Typography>
              <Slider
              onChange={ (e, val) => audio_BG.volume = val/100 }
              onDragStop={ (e) => this.props.update(e, audio_BG.volume) }
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
              value={this.state.audio_BG_vol}
              aria-label="Volume"
              valueLabelDisplay="auto"
              />
            </Grid>
            <Grid item xs={8}>
            <div class="container">
              <p className='paragraph-place'>{this.state.msg}</p>
              <img src={kart} className="kart" alt="logo" />

              <button className='el1' aria-label='El1' top="50%" onClick={this.handleEl1} title='Elkantina'>
                <HearingIcon />
              </button>
              <button className='el2' aria-label='El2' top="50%" onClick={this.handleEl2} title='Ekkofritt rom'>
                <HearingIcon />
              </button>
              <button className='st1' aria-label='St1' top="50%" onClick={this.handleSt1} title='Hangaren'>
                <HearingIcon />
              </button>
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
