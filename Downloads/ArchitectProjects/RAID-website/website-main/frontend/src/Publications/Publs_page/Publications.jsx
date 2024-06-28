import React from 'react'
import '../styles/Publications.css'
import PublsMain from '../Publs_widgets/PublsMain'

export default function Publications(){
    const publications = [
        {
            'imgUrl':'https://builtin.com/cdn-cgi/image/f=auto,quality=80,width=752,height=435/https://builtin.com/sites/www.builtin.com/files/styles/byline_image/public/2021-12/machine-learning-examples-applications.png',
            'title':'Title1',
            'conference':'IEEE',
            'abstract':'So hey, its our first ever publication and it\'s a must read one!',
            'keywords':['keyword11','keyword12','keyword13']
        },
        {
            'imgUrl':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU2It7vByy0yh_LpGkmFGlz9wKlTERmQUMeA&usqp=CAU',
            'title':'Title2',
            'conference':'IEEE',
            'abstract':'So hey, its our second publication and it\'s a must read one!',
            'keywords':['keyword21','keyword22','keyword23']
        },
    ];

    return (
        <div className='publs-page'>
            <PublsMain publications={publications} />
        </div>
    )
}