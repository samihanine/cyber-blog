import React from 'react';
import './Blog.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { TextField } from '@mui/material';

function Blog() {

  return (
    <div className='blog page'>
      <div className='filter'>
        <TextField id="outlined-basic" label="Nom de l'article" variant="filled" />
      </div>
    </div>
  );
}

export default Blog;