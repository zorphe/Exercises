import React from 'react';

import {CATEGORYLIST} from './constants';

import './SearchBar.css';

class SearchBar extends React.Component{
    /*constructor(props){
        super(props);

        this.onFormSubmit = this.onFormSubmit.bind(this);
    }*/

    state = {
        term: "",
        category: ""
    };

    onFormSubmit = (evt) => {
        evt.preventDefault();

        this.props.onFormSubmit(this.state.term);
    };

    renderSelect(){
        let styleObj = { color : this.state.category === "" ? "grey" : "black" };

        return (
            <select value={ this.state.category } onChange={(e) => this.setState({category: e.target.value})} style={ styleObj }>
                <option value="" disabled selected>Category...</option>
                { CATEGORYLIST.map((value ) => <option key={value} value={value}>{value}</option> )}
            </select>
        )
    }
    // fashion, nature, backgrounds, science, education, people, feelings, religion, health, places, animals, industry, food, computer, sports, transportation, travel, buildings, business, music

    render(){
        return (
            <div className="">
                <form className="" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <input 
                            type="text"
                            placeholder="Keyword..."
                            value={this.state.term}
                            onChange={(e) => this.setState({term: e.target.value})}
                        />

                        { this.renderSelect() }

                        <input className="submitBtn" type="submit" value="Search" />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;