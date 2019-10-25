import React from 'react';

import './ImageCard.css';

class ImageCard extends React.Component{
    constructor(props){
        super(props);

        this.state = { spans: 0 };

        this.imageRef = React.createRef();
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        //grid-row-end
        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil(height / 10);
        console.log('height:' + height + ' , span: ' +  spans);
        this.setState({ spans: spans })
    }

    renderSaveState() {
        return <a></a>
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
        const { comments, favorites, likes, pageURL, tags, type, views, previewURL } = this.props.image;
        

        return(
            <div className="item">
                <div className="ui medium image">
                    <img height="250px" width="250px" ref={ this.imageRef } src={ previewURL} />
                    { this.renderSaveState() }
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