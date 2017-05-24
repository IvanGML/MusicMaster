import React from 'react';
import './App.css';
import { FormControl, FormGroup, InputGroup, Glyphicon } from 'react-bootstrap'
import Profile from '../Profile/Profile'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            query: 'Madonna',
            artist: null
        }
    }
    search = () => {
        const BASE_URL = 'https://api.spotify.com/v1/search?';
        const FETCH_URL = BASE_URL + `q=${this.state.query}&type=artist&limit=1`;
        fetch(FETCH_URL, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(json => {
            const artist = json.artists.items[0];
            this.setState({artist})
        })
    }
    render(){
        return(
            <div className='App'>
                <div className='App-title'>Music Master</div>

                    <FormGroup>
                        <InputGroup>
                            <FormControl 
                            type='text' 
                            value={this.state.query}
                            placeholder='Search for an artist'
                            onChange={event=>{this.setState({query: event.target.value})}}
                            onKeyPress={event=>{
                                if(event.key === 'Enter'){
                                    this.search();
                                }
                            }} />
                            <InputGroup.Addon>
                                <Glyphicon 
                                    glyph='search'
                                    onClick={this.search}>
                                </Glyphicon>
                            </InputGroup.Addon>
                        </InputGroup>
                    </FormGroup>
                    <Profile artist={this.state.artist}/>
            </div>
        );
    }
}
export default App;