import React from "react";

export default class Form extends React.Component {
    constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
        status: ""
    };
}

render() {
    const { status } = this.state;
    const { isValid, name, email, phone, message } = this.props;

    return (
        <form onSubmit={this.submitForm} action="https://formspree.io/f/mjvpejyy" method="POST">
            <input type="hidden" name="name" value={ name }/>
            <input type="hidden" name="email" value={ email }/>
            <input type="hidden" name="phone" value={ phone }/>
            <input type="hidden" name="message" value={ message }/>
            {isValid && <button type="button" class="btn btn-danger mt-1 w-50 float-right">Senden</button>}
            {status === "SUCCESS" && <p>Danke für die Nachricht!</p>}
            {status === "ERROR" && <p>Ooops! Es ist ein fehler aufgetreten.</p>}
        </form>
    );
}

submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
        } else {
        this.setState({ status: "ERROR" });
        }
    };
    xhr.send(data);
    }
}