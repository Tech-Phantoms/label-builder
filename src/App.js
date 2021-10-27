import React, {useState} from 'react';
import {
  Container,
  Grid,
  TextField,
  Button,
  Chip
} from '@mui/material';

import LabelCode from './components/label-code';

function App() {

  const [label, setLabel] = useState({
    name: '',
    description: '',
    alias: '',
    color: ''
  });

  const [labelList, updateLabelList] = useState([]);

  const addLabel = () => {
    updateLabelList([...labelList, label])
  }

  const LabelHandler = {
    name: (e) => {
      setLabel({
        name: e.target.value
      });
    },
    description: (e) => {
      setLabel({
        ...label,
        description: e.target.value
      })
    },
    alias: (e) => {
      setLabel({
        ...label,
        alias: e.target.value
      })
    },
    color: (e) => {
      setLabel({
        ...label,
        color: e.target.value
      })
    }
  }

  return (
    <div>
      <Container>
        <h1>Label Builder</h1>
        <Grid container spacing={2}>

          <Grid item xs={12} md={6}>

            <Grid container item spacing={2}>

              <Grid item xs={12} md={6}>
                <TextField label="name" fullWidth 
                value={label.name} 
                onChange={LabelHandler.name}
                
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField label="description" fullWidth
                value={label.description}
                onChange={LabelHandler.description}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField label="alias" fullWidth
                value={label.alias}
                onChange={LabelHandler.alias}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField label="color" fullWidth
                value={label.color}
                onChange={LabelHandler.color}
                />
              </Grid>

              <Grid item xs={12}>
                <Button onClick={addLabel} fullWidth>Add</Button>
              </Grid>

              <Grid container item xs={12} spacing={2}>
                {labelList.length !== 0? [labelList].map(el => <Grid item xs="auto" key={el}>
                  <Chip label={el.name} onDelete={() => {}} size="small" />
                </Grid>): null}
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
