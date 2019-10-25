import React from 'react';
import './SideBar.css';

const SideBar = (props) => {

    let renderSavedItems = () => {
        return <a></a>;
    }
    
    return (
        <div className="side-bar">
            <h2>Saved</h2>
            { renderSavedItems() }
        </div>
    )
}

export default SideBar;