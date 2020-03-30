import React, { Component } from 'react';

interface Contact {
    name: string;
    imgUrl: string;
    phone: string;
    email: string;
}
export class ContactCard extends Component<Contact> {

    constructor(props: Contact) {
        super(props);
        this.state = {
            name: '',
            imgUrl: '',
            phone: '',
            email: ''
        }
    }
    render() {
        return (
            <div className='contact-card'>
                <img src='http://placekitten.com/300/200'></img>
                <h3>Mr. Whiskerson</h3>
                <p>Phone: (212) 555-121-525</p>
                <p>Email: mr.whiskerson@catnp.meow</p>
            </div>
        )
    }
}
// function ContactCard() {
//     return (
//         <div className='contact-card'>
//             <img src='http://placekitten.com/300/200'></img>
//             <h3>Mr. Whiskerson</h3>
//             <p>Phone: (212) 555-121-525</p>
//             <p>Email: mr.whiskerson@catnp.meow</p>
//         </div>
//     )
// }
export default ContactCard;