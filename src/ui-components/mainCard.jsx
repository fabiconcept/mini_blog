import React from 'react';
import champ from "../img/1658454113690.jpg";
import author from "../img/auth.jpg";
import arrow from "../img/arrow.png";

const MainCard = () => {
  return (
    <div className="main-card">
        <section className='maincard-img'>
            <img src={champ} alt="" />
              <div className="hover-cover">
                  <div className="img"><img src={arrow} alt="" /></div>
              </div>
        </section>
        <section className='maincard-text'>
            <div className="tag">Champions League</div>
            <div className="title">An extraordinary WebGL has Been Released By Great China Scientists</div>
            <div className="preview-txt">
                Back in 2019, Gucci brought video games to its app with a new section called Gucci Arcade, insprired by creative director Alessandro Michele's..Unique ability to combine the...
            </div>
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
        </section>
    </div>
  )
}

export default MainCard