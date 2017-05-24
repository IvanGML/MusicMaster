import React from 'react';
import '../App/App.css';

class Profile extends React.Component{
    render(){
        let artist = {name: '', followers: {total: ''}, images: [{url: ''}]}
        this.props.artist !== null?artist = this.props.artist : null
        return(
            <div className='Profile'>
                {this.props.artist !== null?
                <div>
                    <img src={artist.images[0].url} alt='pic' className='profile-img'/>
                    <div>{artist.name}</div>
                    <div>{artist.followers.total}</div>
                    <div>{artist.genres.map((item,index)=>{
                        return <span className='genre' key={index}>{item}</span>
                        })}</div>
                </div>:null}
            </div>
        );
    }
}
export default Profile;