import React from 'react';
import '../App/App.css';

class Galary extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isPlaying: false,
            curentUrl: '',
            audio: null
        }
    }
    playAudio = (url) => {
        console.log(url);
        let audio = new Audio(url);
        if (!this.state.isPlaying){
            audio.play();
            this.setState({
                isPlaying: true,
                curentUrl: url,
                audio
            })
        } else {
            if(this.state.curentUrl === url){
                this.state.audio.pause();
                this.setState({
                    isPlaying: false
                }) 
            } else {
                this.state.audio.pause();
                audio.play();
                this.setState({
                    curentUrl: url,
                    isPlaying: true,
                    audio
                })   
            }
        }
    }
    render(){
        const {tracks} = this.props;
        return(
            <div className='galary'>
                {tracks.map((item, key)=>{
                    const trackImg = item.album.images[0].url;
                    return (
                        <div key={key} className='galary-item' onClick={()=>this.playAudio(item.preview_url)}>
                            <img src={trackImg} alt='album-img' />
                            <p>{item.name}</p>
                            <div className='playback'>
                                <div className='playback-inner'>
                                    {this.state.curentUrl === item.preview_url?
                                        (this.state.isPlaying?
                                            <span>&#9208;</span>:
                                            <span>&#9654;</span>):
                                        <span>&#9654;</span>}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}
export default Galary;