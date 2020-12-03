import React from 'react';
import {Chrono} from 'react-chrono';

import Form from './Form';

import styles from "../../scss/animations.module.scss";

const data = [
    {
        title: "08.01.2019",
        cardTitle: "Jahresauftakt im Krankenhaus der Elisabethinen Graz",
        cardSubtitle: 'TODO',
    },
    {
        title: "08.12.2019",
        cardTitle: "Eiskrippensingen",
        cardSubtitle: 'TODO',
        // cardDetailedText: 'Detail TODO'
    },
    {
        title: "20.12.2019",
        cardTitle: "A capella im Café im Krankenhaus der Elisabethinen Graz",
        cardSubtitle: 'TODO',
        // cardDetailedText: 'Detail TODO'
    },
    {
        title: "30.08.2019 ",
        cardTitle: "Hochzeitssingen am Weizberg",
        cardSubtitle: 'TODO',
        // cardDetailedText: 'Detail TODO'
    },
    {
        title: "Jänner 2020",
        cardTitle: "Jahresauftakt im Krankenhaus der Elisabethinen Graz",
        cardSubtitle: 'TODO',
        // cardDetailedText: 'Detail TODO'
    },
    {
        title: "Soon",
        cardTitle: "Upcoming events...",
        cardSubtitle: 'TODO',
        // cardDetailedText: 'Detail TODO'
    },
];

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

    const [showContactForm, setShowContactForm] = React.useState(false);
    const [animate, setAnimate] = React.useState(0);

    const handleContactUs = () => {
        setAnimate(1);
    };

    const handleAnimationEnd = () => {
        setAnimate(0);
        setShowContactForm(!showContactForm);
    };

    let isValid = true;
    if (!validateEmail(email)) {
        isValid = false;
    };

    if (showContactForm) return (
        <div className="w-75 h-75">
            <div className="h-100">
                <h1>Kontakt</h1>
                <div className="d-flex flex-column">
                    <input type="text" placeholder="Name.." value={ name } onChange={ handleNameChange } />
                    <input type="tel" placeholder="Telefonnummer..." value={ phone } onChange={ handlePhoneChange } />
                    <input type="email" placeholder="Email-Adresse..." value={ email } onChange={ handleEmailChange } />
                    <textarea style={{maxHeight: '20vh', height: '15vh', minHeight: '10vh'}} type="text" placeholder="Schicken sie uns eine Nachricht..." value={ message } onChange={ handleMessageChange }/>
                </div>
                <Form isValid={ isValid } name={ name } email={ email } phone={ phone } message={ message }/>
            </div>
            <button animate={ animate } type="button" className={ styles.buttonAnimationLeft + ' btn btn-danger mt-1 w-100'} onClick={ handleContactUs } onAnimationEnd={ handleAnimationEnd }>Zurück zur timeline</button>
        </div>
    )

    return (
        <div className="w-75 h-75">
            <div className="h-100">
                <Chrono items={data.reverse()} mode="VERTICAL" theme={{secondary: "#b0cbe8" }}/>
            </div>
            <button animate={ animate } type="button" className={ styles.buttonAnimationRight + ' btn btn-danger mt-1 w-100'} onClick={ handleContactUs } onAnimationEnd={ handleAnimationEnd }>Interessiert? Schreib uns eine Nachricht...</button>
        </div>
    )
}

export default Contact;