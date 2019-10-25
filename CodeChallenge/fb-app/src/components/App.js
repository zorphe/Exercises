import React from 'react';
import pixabay from '../api/pixabay';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

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
                <SearchBar onFormSubmit={ this.onSearchSubmit }/>
                <ImageList images = { this.state.images }/>
            </div>
        )
    }
}

export default App;