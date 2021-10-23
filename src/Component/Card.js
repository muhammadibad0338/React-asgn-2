import React from 'react'

const Card = (props) => {
    const {imgSrc,title,price} = props;
    return (
        <>
        <div className="card" style={{width: "18rem",borderRadius:'20px',paddingTop:'15px'}}>
            <img className="card-img-top" src={imgSrc} alt="Card image cap"/>
            <div className ="card-body">
            <h5 className ="card-title">{title}</h5>
            <p className ="card-text">{price}</p>
            </div>
        </div>
        </>
    )
}

export default Card
