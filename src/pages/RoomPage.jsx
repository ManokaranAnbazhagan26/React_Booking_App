import React from 'react';
import CommonHeading from '../components/common/CommonHeading';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const RoomPage = () => {
  // Array of objects containing the names and images for each card
  const cardContent = [
    { name: 'JP Nagar', image: 'https://media.istockphoto.com/id/1329268101/photo/children-playground-equipment-colorful-playground-empty-outdoor-playground-set-play-area-play.webp?b=1&s=170667a&w=0&k=20&c=wJY69cXS3kagEYopYOS6R7gusmbwHXXWIE8dklx-daw=' },
    { name: 'Indiranagar', image: 'https://media.istockphoto.com/id/1432954959/photo/playground-at-highlands-park-in-autumn-woodbridge-canada.webp?b=1&s=170667a&w=0&k=20&c=vsFp48WI8ngXUnotCHLM_q8iaYOE8fHZQqYrvYycFfA=' },
    { name: 'Koramangala', image: 'https://media.istockphoto.com/id/1446681698/photo/small-playground-in-a-park-at-san-diego-california.webp?b=1&s=170667a&w=0&k=20&c=ZoRc9WNlhJapzrJdXkLi2-nLGYrEveqPsE4RdOIJJIE=' },
    { name: 'Whitefield', image: 'https://media.istockphoto.com/id/525027976/photo/empty-colorful-swings-at-the-park.webp?b=1&s=170667a&w=0&k=20&c=xzAZiPnC7wvBvjjoQUH6LCF3ObkJyJGIIFurRjUkQMk=' },
    { name: 'Marathahalli', image: 'https://media.istockphoto.com/id/473313240/photo/children-playing-in-the-park-at-playground-and-communicating.webp?b=1&s=170667a&w=0&k=20&c=_ca1GlefiY6ECp8GGTj3TnNYUjWJUVLFJe6h_w4lw5c=' },
    { name: 'Electronic City', image: 'https://media.istockphoto.com/id/898182848/photo/colorful-playground-equipment.webp?b=1&s=170667a&w=0&k=20&c=a-UQXg_hXuV-RBv7NTBz4jPh-c-s0-CWo0SqmaR5qxU=' }
  ];

  return (
    <div className="mt-5" style={{ display: 'flex', justifyContent: 'center' }}>
      <div>
        <CommonHeading
          heading="Grounds"
          title=" with your friends and family"
          subtitle="Play"
        />
        <Grid container spacing={3} justifyContent="center">
          {cardContent.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} style={{ display: 'flex', justifyContent: 'center' }}>
              <Card sx={{ maxWidth: 650, width: '100%' }}>
                <CardMedia
                  sx={{ height: 250 }}
                  image={item.image}
                  title={item.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions style={{ justifyContent: 'center' }}>
                  <Button size="small" variant="contained" style={{ backgroundColor: 'orange', color: 'white' }}>Book-Now</Button>
                  <Button size="small" variant='outlined' style={{ color: 'orange', borderColor: 'orange' }}>View-Details</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  )
}

export default RoomPage;
