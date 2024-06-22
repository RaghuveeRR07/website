import React from 'react';
import '../styles/FoundersSlider.css'; // Import your CSS file

const FoundersSlider = () => {
    const founders = [
        {
            id: 1,
            name: 'John Doe',
            image: 'https://cdn.pixabay.com/photo/2022/03/03/20/47/the-simpson-7046041_1280.jpg', // Replace with actual image URL
            description: 'John Doe is the co-founder and CEO of RAID. He has over 10 years of experience in entrepreneurship and business development.'
        },
        {
            id: 2,
            name: 'Jane Smith',
            image: 'https://www.chroniquedisney.fr/imgPerso/simpson/1992-kirk-van-houten-01.jpg', // Replace with actual image URL
            description: 'Jane Smith is the co-founder and COO of RAID. She is passionate about operations and customer satisfaction.'
        },
        {
            id: 3,
            name: 'David Johnson',
            image: 'https://e7.pngegg.com/pngimages/61/871/png-clipart-bart-simpson-the-simpsons-season-23-cartoon-avatar-bart-simpson-text-photography.png', // Replace with actual image URL
            description: 'David Johnson is the co-founder and CTO of RAID. He specializes in technology and product development.'
        },
        {
            id: 4,
            name: 'Emily Wilson',
            image: 'https://i.pinimg.com/170x/f0/83/0d/f0830d2b4373b74ea38d4a25fd95b568.jpg', // Replace with actual image URL
            description: 'Emily Wilson is the co-founder and CFO of RAID. She manages finances and strategic investments.'
        }
    ];

    return (
        <div className="founders-page">
            <h1>Meet Our Founders</h1>
            <div className="founders-list">
                {founders.map(founder => (
                    <div key={founder.id} className="founder-card">
                        <div className="founder-image">
                            <img src={founder.image} alt={founder.name} />
                        </div>
                        <div className="founder-details">
                            <h2>{founder.name}</h2>
                            <p>{founder.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FoundersSlider;

