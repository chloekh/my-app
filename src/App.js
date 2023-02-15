import kart from './resources/gløskart.png'
import audio from './resources/musikk.wav'
import './App.css';
import * as React from 'react';
import Slider from '@mui/material/Slider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


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
