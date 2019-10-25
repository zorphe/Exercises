import React from 'react';

import './ImageCard.css';

class ImageCard extends React.Component{
    constructor(props){
        super(props);

        this.imageRef = React.createRef();
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load', this.onImageLoad);
    }

    onImageLoad = () => {
        const height = this.imageRef.current.clientHeight;
        console.log('height:' + height);
    }

    renderSaveState(imgWidth) {
        // check state.
        let innerText = "Save";

        return (
            <div className="img-overlay" style={{width: imgWidth + 'px'}}>
                <div>{ innerText }</div>
            </div>
        )
    }

    renderTags(tags){
        let tagsArr = tags.split(", ")
        return (
            <div className="tag-holder">
                { tagsArr.map((tag ) => <div className="tag-item" key={tag}>{tag}</div> )}
            </div>
        )
    }

    renderStats(likes, favorites, comments){

        return (
            <div className="float-bottom">
                <span>{likes || 0} <i class="thumbs up icon"/></span>
                <span>{favorites || 0} <i class="star icon"/></span>
                <span>{comments || 0} <i class="comments icon"/></span>
            </div>
        )
    }

    render(){
        const { comments, favorites, likes, pageURL, tags, type, views, previewURL, previewWidth, previewHeight } = this.props.image;
        

        return(
            <div className="item" style={{'height': previewHeight + 'px'}}>
                <div className="ui medium image" style = {{'height': previewHeight + 'px', 'width': '150px' }}>
                    <img ref={ this.imageRef } alt="" height={ previewHeight } width ={ previewWidth } src={ previewURL} />
                    { this.renderSaveState(previewWidth) }
                </div>
    
                <div className="right-side">
                    { this.renderTags(tags) }
                    { this.renderStats(likes, favorites, comments) }
                </div>
                
            </div>
        )
    }
}

export default ImageCard;