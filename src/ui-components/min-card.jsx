import React from 'react';
import mid from "../img/cover.jpg";
import cut from "../img/cut.png";

const MidCard = () => {
    return (
        <div className="card-mid">
            <div className="midCard">
                <div className="imgDiv">
                    <img src={mid} alt="" />
                </div>
                <div className="txt">
                    <img src={cut} alt="" />
                    <span>Blog</span>
                </div>
            </div>
            <div className="finder">
                <input type="search" placeholder='Search' className="find" />
            </div>
        </div>
    )
}

export default MidCard