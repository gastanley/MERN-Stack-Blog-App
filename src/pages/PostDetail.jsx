import React from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from '../components/PostAuthor'
import Thumbnail from '../images/image10.jpg'

const PostDetail = () => {
  return (
    <section className="post-detail">
        <div className="container post-detail__container">
            <div className="post-detail__header">
                <PostAuthor/>                    
                <div className="post-detail__buttons">
                    <Link to={'/posts/werwer/edit'} className='btn sm primary'>Edit</Link>
                    <Link to={'/posts/werwer/delete'} className='btn sm danger'>Delete</Link>
                </div>
            </div>
                <h1>This is the post title</h1>
                <div className="post-detail__thumbnail">
                    <img src={Thumbnail} alt="Blog" />
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, harum? 
                    Autem fuga consectetur sint corrupti tempora debitis quaerat dolorem eveniet 
                    facilis facere asperiores dolores, est hic nihil amet voluptas. Commodi repudiandae 
                    iure officiis. Suscipit eveniet ratione est, neque consectetur dolorum!
                </p>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo distinctio aut, 
                    doloribus molestias tempore sunt! Dicta officiis ad nihil facilis vitae hic voluptate 
                    illo consequuntur aliquam repellendus eaque possimus similique atque in ullam soluta 
                    obcaecati corrupti, suscipit laboriosam sit expedita repellat ratione. Voluptatum recusandae 
                    doloremque fuga accusamus? Quas perspiciatis recusandae totam suscipit quidem optio dolorum.
                </p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem consectetur hic repellendus 
                ipsum maxime aspernatur dolorem sit iure maiores autem sed dolorum, repudiandae odit commodi? 
                Fugit, rerum! Soluta quod corrupti autem optio non a qui accusantium, sit ducimus temporibus. 
                Dolorum voluptatem consequuntur quasi laudantium fugit officiis quaerat voluptas perferendis enim 
                error deleniti quidem nihil dignissimos praesentium earum, maiores aut et esse! Mollitia 
                accusantium amet vero cumque non. Ad odit architecto nisi, doloribus pariatur quos provident 
                voluptatum deserunt eius error quasi suscipit dolor sunt omnis blanditiis quae cumque. Tenetur 
                quas doloribus adipisci. Labore maiores numquam ipsa perferendis eligendi sunt nobis aperiam 
                eum aspernatur delectus harum a quae consectetur illo necessitatibus, optio veritatis.
            
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero illum perspiciatis a animi 
                voluptates debitis, distinctio porro optio. Iure, incidunt.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat consequuntur 
                autem mollitia voluptas quisquam ullam numquam ipsam, beatae provident quae minima laborum 
                doloribus, tenetur atque et corporis? Vitae esse culpa assumenda, minima incidunt facilis 
                voluptatum! Porro magni quod, nulla ut molestiae reprehenderit dolorem laudantium soluta 
                voluptate ducimus eveniet recusandae necessitatibus doloremque iste quia quibusdam labore 
                sed fugiat. Quaerat aspernatur, dolorem ducimus porro nulla eaque sit accusantium iusto! 
                Vitae veniam porro rerum ipsam rem, illum dicta labore voluptatum modi ipsa inventore 
                deserunt? Asperiores vitae quibusdam mollitia aut maxime adipisci reprehenderit earum quia? 
                Doloribus ducimus consequuntur ipsam sequi, dolores magni libero quas fugit dignissimos 
                deserunt deleniti. Voluptate facilis aliquam dolor corrupti, adipisci a, doloremque 
                voluptates officiis nisi ad perspiciatis omnis maiores libero esse quam? Facere suscipit 
                ut ea consequuntur illum possimus tempora magni modi! Consectetur sint quis iste, vel minus 
                aut unde, delectus adipisci quam odio voluptates, corrupti itaque officiis nemo quia. 
                Cumque ipsum nam excepturi earum inventore quidem vel qui eum perferendis quia a animi 
                quis blanditiis labore consequuntur laboriosam, totam vero quisquam quo perspiciatis 
                possimus veniam, magnam mollitia? Itaque, aut sint ratione autem, fugiat beatae veniam 
                perferendis eligendi suscipit soluta facere blanditiis harum ducimus cumque natus fugit 
                ab vel officia.
            </p>
        </div>
        </section>
  )
}

export default PostDetail