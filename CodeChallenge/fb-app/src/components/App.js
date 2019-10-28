import React from 'react';
import pixabay from '../api/pixabay';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import SideBar from './SideBar';
import './App.css';

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            images: [],
            saved: []
        };

        this.cleanup = this.cleanup.bind(this);
    }

    // check local storage for savedImage data
    //componentWillMount(){}

    componentDidMount(){
        let existingDataStr = localStorage.getItem('savedImages');
        if (existingDataStr !== null){
            let existingDataObj;
            try {
                existingDataObj = JSON.parse(existingDataStr);

                this.setState({
                    saved : existingDataObj
                });
            } catch(e){ } // parsing error - ignore data.
        }

        window.addEventListener('beforeunload', this.cleanup);
    }

    // store savedImage data into localStorage
    componentWillUnmount(){
        this.cleanup();
        window.removeEventListener('beforeunload', this.cleanup);
    }

    cleanup(){
        let savedJSON = JSON.stringify(this.state.saved);
        if (savedJSON !== '{}') localStorage.setItem('savedImages', savedJSON);
    }

    onSearchSubmit = async (term, category) => {
        // 100 length limit for query [q]
        const response = await pixabay.get('', {
            params: { 
                q : term.trim().replace(/\s+/g,"+"), // trim all excess whitespace
                category: category, 
                per_page: 10
            }
        });

        console.log(response);
        this.setState({ images : response.data.hits })
    }

    updateSavedImages = (image, AlreadyInStateArr) => {
        if (AlreadyInStateArr){ // remove
            let index = this.state.saved.findIndex((img) => img.id === image.id);
            this.setState({
                saved: this.state.saved.filter((_, i) => i !== index)
            });
        } else { // add
            this.setState({
                saved: [...this.state.saved, image]
            });
        }
    }

    render(){
        return (
            <div className ="container">
                <div className="main">
                    <SearchBar onFormSubmit={ this.onSearchSubmit }/>
                    <ImageList images = { this.state.images } savedImages = { this.state.saved } updateSavedImages = { this.updateSavedImages }/>
                </div>

                <SideBar savedImages = { this.state.saved }/>
            </div>
        )
    }
}

export default App;