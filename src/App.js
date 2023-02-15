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


var audio1 = new Audio(alarm);
var audio2 = new Audio(alarm);


function preventHorizontalKeyboardNavigation(event: React.KeyboardEvent) {
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault();
  }
}

/*   const [play] = useSound({alarm}) 
function play() {
  new Audio(alarm).play()
}*/


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {msg : "Trykk på en knapp for å begynne"};
    this.state = {audio1 : false};
    this.state = {audio2 : false};
    
    this.handleEl1 = this.handleEl1.bind(this);
    this.handleEl2 = this.handleEl2.bind(this);
    this.handleSt1 = this.handleSt1.bind(this);
  }


  handleEl1() {
    this.setState({msg : "El-kantina"});
    if(this.state.audio1) {
     audio1.pause(); 
    }
    /*if(this.state.audio2) {
      audio2.pause();
    }*/
    audio1 = new Audio(alarm);
    audio1.play();
    this.setState({audio : true});
  }

  handleEl2() {this.setState({msg : "Ekkofritt rom"})}
  handleSt1() {this.setState({msg : "Hangaren"})}



  render() {

    return (
      <div className="App">
          
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
              min={20}
              max={80}
              aria-label="Volume"
              valueLabelDisplay="auto"
              onKeyDown={preventHorizontalKeyboardNavigation}
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
