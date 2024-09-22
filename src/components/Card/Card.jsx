import React from 'react'
import './Card.css';

const Card = ({ id, title, tag, status }) => {
    return (
        <div className="cardContainer flex-gap-10" style={{ gap: '5px' }}>
            <div className="cardHeading flex-sb">
                <span style={{ textTransform: "uppercase" }} className='color-grey'>{id}</span>
                <div className="imageContainer relative" style={{ width: "30px", height: "30px" }}>
                    <img style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover", }} src="https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="UserImage" />
                    <div className="showStatus"></div>
                </div>
            </div>
            <div className="cardTitle" style={{ fontWeight: 200 }} >
                <p>{title}</p>
            </div>
            <div className="cardTags">
                <div className="tags color-grey"> ... </div>
                {
                    tag?.map((elem, index) => {
                        return <div key={index} className="tags color-grey"> <span>•</span> {elem}</div>
                    })
                }
            </div>
        </div>
    )
}

export default Card;