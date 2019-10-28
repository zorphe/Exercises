import React from 'react';

import './ImageCard.css';

class ImageCard extends React.Component{
    constructor(props){
        super(props);

        this.imageRef = React.createRef();
    }

    /* alternatively, the save/saved overlay could appear on hover for desktop sites.
        mobile support would require a touch action for it to appear, and this wouldn't be as intuitive. 
        ==> consider it to be always visible for mobile? */
    renderSaveState(imgWidth) {
        let imageId = this.props.image.id;
        let savedImg = this.props.savedImages.some((image) => image.id === imageId );
        let innerText = savedImg ? "Saved" : "Save";
        let classes = "img-overlay " + (savedImg ? "saved" : "");

        return (
            <div className={ classes } style={{width: imgWidth + 'px'}} onClick={() => this.props.updateSavedImages(this.props.image, savedImg)}>
                <div>{ innerText }</div>
            </div>
        )
    }

    renderTags(tags){
        let tagsArr = tags.split(", ")
        return (
            <div className="tag-holder">
                { tagsArr.map((tag) => <div className="tag-item" key={ tag }>{ tag }</div> )}
            </div>
        )
    }

    renderStats(likes, favorites, comments){

        return (
            <div className="float-bottom">
                <span>{likes || 0} <i className="thumbs up icon"/></span>
                <span>{favorites || 0} <i className="star icon"/></span>
                <span>{comments || 0} <i className="comments icon"/></span>
            </div>
        )
    }

    render(){
        const { comments, favorites, likes, tags, previewURL, previewWidth } = this.props.image;
        let { previewHeight } = this.props.image;
        previewHeight += 20; //overlay padding

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