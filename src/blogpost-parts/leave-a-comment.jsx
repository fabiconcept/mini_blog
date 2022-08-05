import React from 'react'

const LeaveAComment = () => {
  return (
    <div className="leavecomment">
        <div className="top">JUMP INTO THE CONVERSATION</div>
        <div className="form">
            <div className="title">Comment:</div>
            <textarea placeholder='Comment' cols="30" rows="5"></textarea>
            <input type="text" name="" placeholder='Name *' id="" />
            <input type="email" name="" placeholder='Email *' id="" />
            <input type="text" name="" placeholder='Website *' id="" />
            <div className="check"><input type="checkbox" name="" id="" /> Save my details in this browser for the next time I comment.</div>
            <div className="post-btn">Post coment</div>
        </div>
    </div>
  )
}

export default LeaveAComment