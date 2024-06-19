import React from 'react'
import PubCard from './PubCard'

export default function PublsMain(publications) {
    return (
        <div className='publs-main'>
            {
                publications.publications.map((elem)=>{
                    return <PubCard publication={elem}/>
                })
            }
        </div>
    );
}
