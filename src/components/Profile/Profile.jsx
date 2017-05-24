import React from 'react';
import '../App/App.css';

class Profile extends React.Component{
    render(){
        let artist = {name: '', followers: {total: ''}, images: [{url: ''}]}
        this.props.artist !== null?artist = this.props.artist : null
        return(
            <div>
                {this.props.artist !== null?
                    <div className='profile'>
                        <img src={artist.images[0].url} alt='profile' className='profile-img'/>
                        <div>
                            <div className='profile-info'>
                                <div className='profile-name'>{artist.name}</div>
                                <div className='profile-followers'>{artist.followers.total} followers</div>
                                <div>{artist.genres.map((item,index)=>{
                                    return <span className='genre' key={index}>{item}</span>
                                    })}</div>
                            </div>
                        </div>
                    </div>
                :null}
            </div>
        );
    }
}
export default Profile;