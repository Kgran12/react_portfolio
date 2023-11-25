import React, { useState } from 'react';
import '../App.css';
import { validateEmail } from '../utils/helpers';

const Contact = () => {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ message, setMessage ] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'message') {
            setMessage(inputValue);
        }
    };

    const handelOnName = (e) => {
        e.preventDefault();

        if (!message) {
            alert('Field cannot be blank')
        }
    }

    const handelOnMessage = (e) => {
        e.preventDefault();

        if (!message) {
            alert('Field cannot be blank')
        }
    }

    const handleOnEmail = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            alert('Email is invalid');
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Contact Me</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input value={name} name="name" onChange={handleInputChange} onBlur={handelOnName} type="text" className="form-control" placeholder="Enter Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email address:</label>
                            <input value={email} name="email" onChange={handleInputChange} onBlur={handleOnEmail} type="email" className="form-control" placeholder="Enter Email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea value={message} name="message" onChange={handleInputChange} onBlur={handelOnMessage} className="form-control" rows="5" placeholder="Enter Message"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div> 
            </div>
        </div>
    );
}

export default Contact;
