import React from 'react';

import Form from './Form';

const validateEmail = email => {
    if (typeof email !== "undefined") {
        const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      
        if (!pattern.test(email)) {
            return false;
        }
        return true;
    }
    return false;
}

const Contact = () => {
    const [name, setName] = React.useState(undefined);
    const [email, setEmail] = React.useState(undefined);
    const [phone, setPhone] = React.useState(undefined);
    const [message, setMessage] = React.useState(undefined);

    const handleNameChange = val => setName(val.target.value);
    const handleEmailChange = val => setEmail(val.target.value);
    const handlePhoneChange = val => setPhone(val.target.value);
    const handleMessageChange = val => setMessage(val.target.value);

    let isValid = true;
    if (!validateEmail(email)) {
        isValid = false;
    }

    return (
        <div className="w-75 h-75">
            <h1>Kontakt</h1>
            <div className="d-flex flex-column">
                <input type="text" placeholder="Name.." value={ name } onChange={ handleNameChange } />
                <input type="tel" placeholder="Telefonnummer..." value={ phone } onChange={ handlePhoneChange } />
                <input type="email" placeholder="Email-Adresse..." value={ email } onChange={ handleEmailChange } />
                <textarea style={{maxHeight: '20vh', height: '15vh', minHeight: '10vh'}} type="text" placeholder="Schicken sie uns eine Nachricht..." value={ message } onChange={ handleMessageChange }/>
            </div>
            <Form isValid={ isValid } name={ name } email={ email } phone={ phone } message={ message }/>
        </div>
    )
}

export default Contact;