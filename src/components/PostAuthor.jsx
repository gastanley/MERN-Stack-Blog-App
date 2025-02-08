import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../images/image8.jpg'

const PostAuthor = () => {
  return (
    <Link to={'/posts/users/sdfsdf'} >
        <div className="post__author-avatar">
            <img src={Avatar} alt="" />
        </div>
        <div className="post__author-detail">
            <h5>By: Ashley GASTON</h5>
            <small>Just Now</small>
        </div>
    </Link>
  )
}

export default PostAuthor