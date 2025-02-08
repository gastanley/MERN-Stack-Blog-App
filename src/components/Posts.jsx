import React, { useState } from 'react'

import Thumbnail1 from '../images/image1.jpg'
import Thumbnail2 from '../images/image2.jpg'
import Thumbnail3 from '../images/image3.jpg'
import Thumbnail4 from '../images/image4.jpg'
import PostItem from '../components/PostItem'

const DUMMY_POSTS = [
    {
        id:'1',
        thumbnail: Thumbnail1,
        category: 'education',
        title: 'This is the title of the very first post on this blog',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas vitae repellat cupiditate ducimus fugiat. Ad cupiditate eum dolore? Nesciunt voluptatum beatae vel, deserunt quasi iste a! Quae tenetur voluptates magnam?",
        authorID: 3
    },
    {
        id:'2',
        thumbnail: Thumbnail2,
        category: 'science',
        title: 'This is the title of the very second post on this blog',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas vitae repellat cupiditate ducimus fugiat. Ad cupiditate eum dolore? Nesciunt voluptatum beatae vel, deserunt quasi iste a! Quae tenetur voluptates magnam?",
        authorID: 1
    },
    {
        id:'3',
        thumbnail: Thumbnail3,
        category: 'weather',
        title: 'This is the title of the very third post on this blog',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas vitae repellat cupiditate ducimus fugiat. Ad cupiditate eum dolore? Nesciunt voluptatum beatae vel, deserunt quasi iste a! Quae tenetur voluptates magnam?",
        authorID: 13
    },
    {
        id:'4',
        thumbnail: Thumbnail4,
        category: 'farming',
        title: 'This is the title of the very fourth post on this blog',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas vitae repellat cupiditate ducimus fugiat. Ad cupiditate eum dolore? Nesciunt voluptatum beatae vel, deserunt quasi iste a! Quae tenetur voluptates magnam?",
        authorID: 11
    }
]

const Posts = () => {
    const [posts, setPosts] = useState(DUMMY_POSTS)
  return (
    <section className="posts">
        <div className="container posts__container">
            {
                posts.map(
                    ({id, thumbnail, category, title, description, authorID})=> 
                    <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title} 
                    description={description} authorID={authorID}/>
                )        
            }
        </div>
    </section>
  )
}

export default Posts