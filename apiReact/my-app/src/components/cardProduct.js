import * as React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import Productlast from './productLast';



export default function BasicCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          
        </Typography>
        <Typography variant="h5" component="div">
          
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          
        </Typography>
        <Typography variant="body2">
        <Productlast/>
          <br />
          
        </Typography>
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
  );
}
