import React from 'react';
import franck from "../img/franck.jpg";
import lewi from "../img/lewi.jpg";
import raf from "../img/raf.jpg";
import ansu from "../img/ansu.jpg";
import aub from "../img/aub.jpg";
import author from "../img/auth.jpg";
import ped from "../img/ped.jpg";
import lewiSi from "../img/lewiSi.jpg";
import leo from "../img/leo.jpg";
import goa from "../img/goa.jpg";
import PostGridItem from './post-grid-item';


const BlogGrid = () => {
  return (
    <div className="grid">
        <PostGridItem
            pic={franck}
            author={author}
        />
        <PostGridItem
            pic={lewi}
            author={author}
        />
        <PostGridItem
            pic={raf}
            author={author}
        />
        <PostGridItem
            pic={ansu}
            author={author}
        />
        <PostGridItem
            pic={ped}
            author={author}
        />
        <PostGridItem
            pic={aub}
            author={author}
        />
        <PostGridItem
            pic={leo}
            author={author}
        />
        <PostGridItem
            pic={lewiSi}
            author={author}
        />
        <PostGridItem
            pic={goa}
            author={author}
        />
    </div>
  )
}

export default BlogGrid