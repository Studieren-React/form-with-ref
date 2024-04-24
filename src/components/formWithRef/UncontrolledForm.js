import React, { Component } from "react";
import './FormWithRef.css';

const MAX_LENGTH = 16;
const EMAIL_PATTERN = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export class UncontrolledForm extends Component {
    constructor(props) {
        super(props);
        this.userNameRef = React.createRef();
        this.userEmailRef = React.createRef();
    }

    inputHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value }, () => {
            if (this.state.userName.length === MAX_LENGTH) {
                this.userEmailRef.current.focus();
            }
        });
    }

    componentDidMount() {
        this.userNameRef.current.focus();
    }

    handleSubmit = (event) => {
        if (this.userNameRef.current.value.length < MAX_LENGTH) {
            alert(`Current name lenth ${this.userNameRef.current.value.length} less than ${MAX_LENGTH}`);
            return;
        }

        if (!EMAIL_PATTERN.test(this.userEmailRef.current.value)) {
            alert(`Achtung! Email ${this.userEmailRef.current.value} isn't valid!`);
            return;
        }

        this.userNameRef.current.value = '';
        this.userEmailRef.current.value = '';
    }

    render() {
        return (
            <form
                className="FormWithRef"
                onSubmit={this.handleSubmit}
            >
                <h3>Uncontrolled Form</h3>
                <input
                    className="FormWithRefInput"
                    type="text"
                    name="userName"
                    placeholder="user name"
                    onChange={this.inputHandler}
                    ref={this.userNameRef}
                />
                <input
                    className="FormWithRefInput"
                    type="email"
                    name="userEmail"
                    placeholder="user email"
                    onChange={this.inputHandler}
                    ref={this.userEmailRef}
                />
                <button
                    className="Button"
                    type="submit"
                >send data</button>
            </form>
        )
    }
}