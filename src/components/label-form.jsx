import React from 'react';
import {
    TextField,
    Box,
    Grid,
    Button
} from '@mui/material';

function LabelForm() {
    return <Box
        component="form"
        autoComplete="off"
    >
        <Grid container gap={2}>
            <Grid xs={6} >
                <TextField label="name" />
            </Grid>
            <Grid xs={6}>
                <TextField label="description" />
            </Grid>
            <Grid xs={6} >
                <TextField label="alias" />
            </Grid>
            <Grid xs={6}>
                <TextField label="color" />
            </Grid>
            <Grid xs={12}>
                <Button>Add</Button>
            </Grid>
        </Grid>
    </Box>
}

export default LabelForm;