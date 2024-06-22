import React from 'react';
import '../styles/PhotoGallery.css'; // Import your CSS file

const PhotoGallery = () => {
    return (
        <div className="grid grid-cols-2 gap-2">
            <div>
                <img className="gallery-img" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="" />
            </div>
            <div>
                <img className="gallery-img" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="" />
            </div>
            <div>
                <img className="gallery-img" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="" />
            </div>
            <div>
                <img className="gallery-img" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="" />
            </div>
        </div>
    );
}

export default PhotoGallery;
