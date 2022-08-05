import React from 'react';
import arrow from "../img/arrow.png";

const PostGridItem = ({pic, author}) => {
    return (
        <section className="blog-grid">
            <div className="blog-grid-img">
                <img src={pic} alt="" />
                <div className="hover-cover">
                    <div className="img"><img src={arrow} alt="" /></div>
                </div>
            </div>
            <div className="blog-info">
                <div className="tag">Barcelona</div>
                <div className="title">Simon Lizotte Take A Big Advance In The Last Tournament</div>
                <div className="story">Back in 2020, Gucci brought video games to its app with a new section called Gucci arcade, inspired by creatives</div>
                <div className="author">
                <div className="auth-img">
                    <img src={author} alt="" />
                </div>
                <div className="auth-txt">
                    <div className="auth-name">Mohammed Reza</div>
                    <div className="post-date">
                        Jun 27, 2022
                    </div>
                </div>
            </div>
            </div>
            
        </section>
    )
}

export default PostGridItem