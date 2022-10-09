import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const ContactForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [disabled, setDisabled] = useState(false);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: name,
            email: email,
            message: message
        }
        axios.post('https://sheet.best/api/sheets/a949dce3-4bc4-450d-9a8c-cc7f6d8633c2',data)
        .then((response) => {
            setName('');
            setEmail('');
            setMessage('');
        })
        .then((response) => {
            toast.success('Thank You,Your Message is Sent ', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        })
        .catch((err) => {
            toast.error('Fill your Response Correctly', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        });
        
    }
    


  return (
    <form onSubmit={handleSubmit}>
            <div className="form-container">
            <label>Name</label>
            <input type='text' name='name' placeholder='Enter your Name' required value={name} onChange={e => setName(e.target.value)}/> <div className='error'></div> &nbsp;
            <label>E-mail</label>
            <input type='email' name='email' placeholder='Enter your Email' required value={email} onChange={e => setEmail(e.target.value)}/> <div className='error'></div> &nbsp;
            <label>Your Message</label>
            <textarea name='message' rows='7' placeholder='Your Message' required value={message} onChange={e => setMessage(e.target.value)}></textarea> <div className='error'></div> &nbsp;
            <div className='button-container'>
            <button type='submit' className='btn btn-primary' onClick={() => setDisabled(true)} > {disabled ? 'Sent' : 'Send Message' }  </button>
              
            </div>
            </div>
            <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
          </form>
  )
}

