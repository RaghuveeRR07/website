import React from 'react'

export default function PubCard(props) {
    const publication = props.publication;
    return (
        <div className="publs-card">
            <div className="publs-card-header">
                <img className="publs-card-img" src={publication.imgUrl}/>
            </div>
            <div className="publs-card-title">
                <p>{publication.title}</p>
            </div>
            <div className="publs-card-conference">
                <p>{publication.conference}</p>
            </div>
            <div className="publs-card-keywords">
                {publication.keywords.map((elem)=>{return <div className='keyword'>{elem}</div>})}
            </div>
            <div className="publs-card-hider">
                {publication.abstract}
            </div>
        </div>
    );
}
