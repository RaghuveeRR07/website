import React from 'react'
import CountUp from 'react-countup';
import { RAIDStats } from '../../data/HomePageStats';
import '../styles/Statistics.css';

export default function Statistics() {

    const duration = 4;

    return (
        <div className='statistics-container'>
            {Object.keys(RAIDStats).map((key, index) => {
                return (
                    <div className='stat-card' key={index}>
                        <div className={`stat-card-icon ${RAIDStats[key][1]}`}></div>
                        <div className='stat-card-info'>
                            <div className='stat-card-count'>
                                <CountUp className='stat-card-countup-tag' start={0} end={RAIDStats[key][0]} duration={duration} />
                                &nbsp;{RAIDStats[key][2]}
                            </div>
                            <div className='stat-card-title'>
                                {key}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
