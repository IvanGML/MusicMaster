import React from 'react';
import '../App/App.css';

class Galary extends React.Component{
    render(){
        const {tracks} = this.props;
        return(
            <div className='galary'>
                {tracks.map((item, key)=>{
                    const trackImg = item.album.images[0].url;
                    return (
                        <div key={key} className='galary-item'>
                            <img src={trackImg} alt='album-img'/>
                            <p>{item.name}</p>
                        </div>
                    )
                })}
            </div>
        );
    }
}
export default Galary;