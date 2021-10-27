import React, { useState } from 'react';
import {
  Container,
  Grid,
  TextField,
  Button,
  Chip
} from '@mui/material';
import shortId from 'shortid';
import { remove } from 'lodash';
import {lightOrDark} from './utils';

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
    
    if (labelList.length === 0) {
      updateLabelList([{ ...label, id: shortId.generate(), alias: (label.alias? label.alias.split(','): '') }])
    } else {
      updateLabelList([...labelList, { ...label, id: shortId.generate() }])
    }
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
                {labelList.length === 0 ? null : [labelList][0].map(el => {
                  console.log(el)
                  return <Grid item xs="auto" key={el.id}>
                    <Chip label={el.name} sx={{
                      backgroundColor: el.color,
                      color: (el.color)? (lightOrDark(el.color) === 'light'? 'black':'white'): null
                    }} onDelete={() => {
                      const newLabelList = remove(labelList, (o) => {
                        return o.id !== el.id
                      })
                      console.log(newLabelList);
                      updateLabelList(newLabelList);
                    }} size="small" />
                  </Grid>
                })}
              </Grid>

            </Grid>

          </Grid>

          <Grid item xs={12} md={6}>
            <LabelCode code={labelList.map(({ name, alias, description, color }) => ({
              name,
              alias,
              description,
              color
            }))} />
          </Grid>

        </Grid>
      </Container>
    </div>
  );
}

export default App;
