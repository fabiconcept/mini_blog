import React from 'react'
import { useParams } from 'react-router-dom'
import BlogBody from '../ui-components/blog-body'
import BlogGrid from '../ui-components/blog-grid'
import Categories from '../ui-components/categories'
import MiniNav from '../ui-components/mini-nav'

const Blog = () => {
  const {id} = useParams()
  return (
    <div className="blogbody">
      <MiniNav post={`${id ? "Leo Leaves": ""}`} />
      {!id &&<Categories/>}
      {!id &&<BlogGrid/>}
      {id && <BlogBody />}
    </div>
  )
}

export default Blog