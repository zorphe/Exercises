import React from 'react';
import pixabay from '../api/pixabay';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import SideBar from './SideBar';
import './App.css';

class App extends React.Component {
    state = {
        images: []
    }

    onSearchSubmit = async (term, category) => {
        // trim + process input.
        // 100 length limit for query [q]

        const response = await pixabay.get('', {
            params: { 
                q : term.trim(), 
                category: category, 
                per_page: 10
            }
        });

        console.log(response);
        this.setState({ images : response.data.hits })
    }

    render(){
        return (
            <div className ="ui container" style={{marginTop: '10px'}}>
                <div className="main">
                    <SearchBar onFormSubmit={ this.onSearchSubmit }/>
                    <ImageList images = { this.state.images }/>
                </div>

                <SideBar />
            </div>
        )
    }
}

export default App;