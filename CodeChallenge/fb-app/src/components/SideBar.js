import React from 'react';
import './SideBar.css';

const SideBar = (props) => {

    let renderSavedItems = () => {
        //let temp = props;
        //return <b>items</b>;
        
        let inner = props.savedImages.map((img, idx) => {
            return <li key={ img.id }><a href={ img.largeImageURL } target="_blank" rel="noopener noreferrer" >#{ img.id } <i /></a></li>
        })

        return <ul>{ inner } </ul>
        
    }
    
    return (
        <div className="side-bar">
            <h2>Saved</h2>
            
            { renderSavedItems() }
        </div>
    )
}

export default SideBar;