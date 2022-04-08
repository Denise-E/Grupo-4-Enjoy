import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Totalproducts from './totalProducts';



export default function Cardtotalproducts() {
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
        <Totalproducts />
          <br />
          
        </Typography>
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
  );
}
