import React from 'react';
import About from '../blogpost-parts/about';
import Body from '../blogpost-parts/body';
import Head from '../blogpost-parts/head';
import LeaveAComment from '../blogpost-parts/leave-a-comment';


const BlogBody = () => {
  return (
    <div className="body">
        <Head/>
        <Body/>
        <About/>
        <LeaveAComment/>
    </div>
  )
}

export default BlogBody;