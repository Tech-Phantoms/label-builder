import React from 'react';
import {
  Container,
  Grid,
  TextField,
  Button,
} from '@mui/material';

import LabelCode from './components/label-code';

function App() {

  return (
    <div>
      <Container>
        <h1>Label Builder</h1>
        <Grid container spacing={2}>

          <Grid item xs={12} md={6}>

            <Grid container item spacing={2}>

              <Grid item xs={12} md={6}>
                <TextField label="name" fullWidth />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField label="description" fullWidth/>
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField label="alias" fullWidth />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField label="color" fullWidth />
              </Grid>

              <Grid item xs={12}>
                <Button fullWidth>Add</Button>
              </Grid>

            </Grid>

          </Grid>

          <Grid item xs={12} md={6}>
            <LabelCode code={JSON.stringify({name: 'todo'})} />
          </Grid>

        </Grid>
      </Container>
    </div>
  );
}

export default App;
