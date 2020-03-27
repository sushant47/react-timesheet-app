import React, { Component, FormEvent } from "react";

interface memeheader {
    topText: string;
    bottomText: string;
    randomImg: string;
    allMemesImgs: meme[];
}
interface meme {
    id: string;
    name: string;
    url: string;
    width: number;
    height: number;
    box_count: number;
}
export class MemeGenerator extends Component<{}, memeheader> {
    constructor(props: {}) {
        super(props);
        this.state = {
            topText: '',
            bottomText: '',
            randomImg: 'http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png',
            allMemesImgs: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event: any) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        } as any)
    }
    componentDidMount() {
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(response => {
                const { memes } = response.data;
                console.log(memes[0]);
                this.setState({ allMemeImgs: memes })
            })
    }
    // private handleSubmit = async (
    //     e: FormEvent<HTMLFormElement>
    // ): Promise<void> => {
    //     e.preventDefault();
    //     const randomNum = Math.floor(Math.random() * this.state.allMemesImgs.length)
    //     const randomMemeImg = this.state.allMemesImgs[randomNum].url;
    //     this.setState({ randomImg: randomMemeImg })
    //     if (this.validateForm()) {
    //       const submitSuccess: boolean = await this.submitForm();
    //       this.setState({ submitSuccess });
    //     }
    // };
    handleSubmit(event: any) {
        event.preventDefault();
        const randomNum = Math.floor(Math.random() * this.state.allMemesImgs.length);
        console.log('hell ', randomNum);
        const randomMemeImg = this.state.allMemesImgs[randomNum].url;
        this.setState({ randomImg: randomMemeImg})
    }
    render() {
        return (
            <div>
                <form className='meme-form' onSubmit={this.handleSubmit}>
                    <input type='text'
                        name='topText'
                        placeholder='Top Text'
                        value={this.state.topText}
                        onChange={this.handleChange} />
                    <input type='text'
                        name='bottomText'
                        placeholder='Bottom Text'
                        value={this.state.bottomText}
                        onChange={this.handleChange} />
                    <button type='submit'>Gen</button>
                </form>
                <div>
                    <img src={this.state.randomImg} alt='' />
                    <h2 className='top'>{this.state.topText}</h2>
                    <h2 className='bottom'>{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}