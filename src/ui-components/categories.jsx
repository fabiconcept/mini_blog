import React, { useState } from 'react'

const Categories = () => {
    const [active, setActive] = useState(0)
    return (
        <div className="categories">
            <ul>
                <li className={`${active === 0 && 'active'}`} onClick={()=>setActive(0)}>All</li>
                <li className={`${active === 1 && 'active'}`} onClick={()=>setActive(1)}>Laliga</li>
                <li className={`${active === 2 && 'active'}`} onClick={()=>setActive(2)}>Copa Del Rey</li>
                <li className={`${active === 3 && 'active'}`} onClick={()=>setActive(3)}>Europa</li>
                <li className={`${active === 4 && 'active'}`} onClick={()=>setActive(4)}>Friendlies</li>
                <li className={`${active === 5 && 'active'}`} onClick={()=>setActive(5)}>Champions League</li>
            </ul>
        </div>
    )
}

export default Categories