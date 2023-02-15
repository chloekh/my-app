import kart from './resources/gløskart.png'
import audio from './resources/musikk.wav'
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


function preventHorizontalKeyboardNavigation(event: React.KeyboardEvent) {
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault();
  }
}

/*   const [play] = useSound({audio}) */
function play() {
  new Audio(audio).play()
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {msg : "Trykk på en knapp for å begynne"};
    this.handleEl1 = this.handleEl1.bind(this);
    this.handleEl2 = this.handleEl2.bind(this);
    this.handleSt1 = this.handleSt1.bind(this);
  }


  handleEl1() {this.setState({msg : "El-kantina"})}
  handleEl2() {this.setState({msg : "Ekkofritt rom"})}
  handleSt1() {this.setState({msg : "Hangaren"})}



  render() {

    return (
      <div className="App">
      <p className='paragraph-place'>{this.state.msg}</p>
        <div class="container">
          
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

          <button className='el1' aria-label='El1' title='Elkantina' top="50%" onClick={this.handleEl1}>
            <HearingIcon />
          </button>
          <button className='el2' aria-label='El2' title='Ekkofritt rom' top="50%" onClick={this.handleEl2}>
            <HearingIcon />
          </button>
          <button className='st1' aria-label='St1' title='Ekkofritt rom' top="50%" onClick={this.handleSt1}>
            <HearingIcon />
          </button>
          <img src={kart} className="kart" alt="logo" />
          </div>
      </div>
    );
  
  }


function App() {

  function preventHorizontalKeyboardNavigation(event: React.KeyboardEvent) {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
    }
  }

/*   const [play] = useSound({audio}) */
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
}


export default App;
