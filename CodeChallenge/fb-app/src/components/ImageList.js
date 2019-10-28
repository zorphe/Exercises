import React from 'react';
import ImageCard from './ImageCard';
import './ImageList.css';

const ImageList = (props) => {
    const images = props.images.map((image) => {
        return <ImageCard key = { image.id } image={ image } savedImages = { props.savedImages } updateSavedImages = { props.updateSavedImages } />
    });

    return (
        <div className="image-list ui items">{ images }</div>
    )
}

export default ImageList;