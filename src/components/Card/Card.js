import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import tags from 'data/tags';

export default function MyCard({ article }) {

  return (
      <Card sx={{ width: 305, height: 300 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={article.img}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {tags[article.tag]}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {article.title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Voir
          </Button>
        </CardActions>
      </Card>
  );
}