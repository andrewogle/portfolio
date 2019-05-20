import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";


class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      message: "",
      email: "",
      sent: false,
      buttonText: "Send Message"
    };
  }
  formSubmit = e => {
    e.preventDefault();

    this.setState({
      buttonText: "...sending"
    });

    let data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    };

    axios
      .post("https://andrew-ogle-contact-form.herokuapp.com/api/v1", data)
      .then(res => {
        this.setState({ sent: true }, this.resetForm());
      })
      .catch(() => {
        this.setState({
          name: "",
          message: "",
          email: "",
          buttonText: "Message Not Sent"
        });
      });
  };
  resetForm = () => {
    this.setState({
      name: "",
      message: "",
      email: "",
      buttonText: "Message Sent"
    });
  };
  handleChange = event => {
    event.preventDefault();
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };
  render() {
   
    return (
      <Container>
      <h1>Contact Me</h1>
      <h2>I can be reached at andrewryanogle@gmail.com</h2>
      <h3>or via this handy dandy contact form!</h3>
        <form className="contact-form" onSubmit={e => this.formSubmit(e)}>
          <label htmlFor="message-input">Your Message</label>
          <textarea
            onChange={this.handleChange}
            name="message"
            type="text"
            placeholder="Please write your message here"
            value={this.state.message}
            required
          />

          <label class="message-name" htmlFor="message-name">
            Your Name
          </label>
          <input
            onChange={e => this.setState({ name: e.target.value })}
            name="name"
            type="text"
            placeholder="Your Name"
            value={this.state.name}
          />

          <label htmlFor="message-email">Your Email</label>
          <input
            onChange={e => this.setState({ email: e.target.value })}
            name="email"
            type="email"
            placeholder="your@email.com"
            required
            value={this.state.email}
          />

          <div className="button--container">
            <button type="submit" className="button button-primary">
              {this.state.buttonText}
            </button>
          </div>
        </form>
      </Container>
    );
  }
}
const Container = styled.div`
width: 75%;
font-family: "Crimson Text", serif;
padding: 33px;
background-color: #efefea;
font-size: 16px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: fixed;
left: 25vw;
height: 100vh;
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
input {
  border-radius: 5px;
  margin: 5px;
}
textarea {
  border-radius: 5px;
}
`;
export default Contact;
