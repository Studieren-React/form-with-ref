import React, { Component } from "react";
import './FormWithRef.css';

const MAX_LENGTH = 16;

export class FormWithRef extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            userEmail: ''
        }
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

    render() {
        const { userName, userEmail } = this.state;

        return (
            <div className="FormWithRef">
                <input
                    className="FormWithRefInput"
                    type="text"
                    name="userName"
                    placeholder="user name"
                    value={userName}
                    onChange={this.inputHandler}
                    ref={this.userNameRef}
                />
                <input
                    className="FormWithRefInput"
                    type="email"
                    name="userEmail"
                    placeholder="user email"
                    value={userEmail}
                    onChange={this.inputHandler}
                    ref={this.userEmailRef}
                />
            </div>
        )
    }
}