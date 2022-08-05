import React from 'react';

const MiniNav = ({post}) => {
  return (
    <div className="mininav">
        <span>Home</span> {">"} <span>Blog</span> {">"} <span>{post}</span>
    </div>
  )
}

export default MiniNav;