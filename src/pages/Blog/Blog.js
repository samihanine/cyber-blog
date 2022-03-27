import React, { useEffect } from 'react';
import './Blog.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { TextField, Button } from '@mui/material';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import tags from 'data/tags';
import Card from 'components/Card/Card';
import articles from 'data/articles';
import { NavLink } from 'react-router-dom';


function Blog({ search, setSearch, tag, setTag }) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const DisplayArticles = () => {
    return articles.map((item, index) => {
      if (tag != -1 && tag != item.tag) return null;
      if (!item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) && search != "") return null;

      return <NavLink to={"/article/" + index + "/" + convertToSlug(item.title) + "--securite"}>
          <Card article={item} />
      </NavLink>
    })
  }

  return (
    <div className='blog page'>
      <div className='filter'>
        <FormControl className='form'>

          <TextField value={search} onChange={e => setSearch(e.target.value)} id="outlined" label="Nom de l'article" variant="outlined" />
          <div>
            <FormLabel id="demo-row-radio-buttons-group-label">Thèmes</FormLabel>
            <RadioGroup
              row
              className='group'
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={tag}
              onChange={e => setTag(e.target.value)}
            >
              <FormControlLabel value={-1} control={<Radio />} label={"Tous"} />
              {tags.map((item, index) => <FormControlLabel value={index} control={<Radio />} label={item} />)}
            </RadioGroup>
        
          </div>

          <Button onClick={() => {setTag(-1); setSearch("");}} variant="contained">Rénitialiser</Button>
        </FormControl>
      </div>

      <div className='articles'>
        <DisplayArticles />
      </div>
    </div>
  );
}

function convertToSlug(text) {
  return text.toLowerCase()
             .replace(/[^\w ]+/g, '')
             .replace(/ +/g, '-');
}

export default Blog;