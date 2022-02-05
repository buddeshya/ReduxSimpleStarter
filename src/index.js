import React, {Component} from 'react';
import ReactDOM, { render } from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY ="AIzaSyDe3Sjgh72w0dQ094P63JXqD-AXfYV70T4";



class App extends Component{
    constructor(props) {
        super(props);

        this.state = { videos: []}

        YTSearch({key:API_KEY, term:"surfboards"}, (videos) =>
        {
            this.setState({videos})
        });
    }
    render() {
    return (
        <div>
        <SearchBar />
    </div>
    );
}
}

ReactDOM.render(<App />, document.querySelector('.container') );