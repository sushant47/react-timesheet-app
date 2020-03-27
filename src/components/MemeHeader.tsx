import React, { Component } from "react";

export class MemeHeader extends Component {
    render() {
        return (
            <header className='header'>
                <img src='http://www.pngall.com/wp-content/uploads/2016/05/Trollface-PNG-Image.png'
                    alt='problem'></img>
                <p>Meme Generator</p>
            </header>
        )
    }
}