import React from 'react';
import ReactDOM from 'react-dom';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'swordfish',
      authorized: false
    };
    this.authorize = this.authorize.bind(this);
  }

  authorize(e) {
    const password = e.target.querySelector(
      'input[type="password"]').value;
    const auth = password == this.state.password;
    this.setState({
      authorized: auth
    });
  }

  render() {
      const login = (
        <form action="#" onSubmit = {this.authorize}>
          <input type="password" placeholder="Password" />
          <input type="submit" />
        </form>
      );
      const contactInfo = (
          <ul>
            <li>
              client@contactplus.com
            </li>
            <li>
              999.888.7776
            </li>
        </ul>
      );
    return (
      <div id="authorization">
        <div id="header">
          <h1>Contact Form</h1>
        </div>
        <h2>
          {this.state.authorized ? 'Contact' : 'Enter the password'}
        </h2>
        {this.state.authorized ? contactInfo : login}
      </div>
    );
  }
}

ReactDOM.render(
  <Contact />, 
  document.getElementById('app')
);
