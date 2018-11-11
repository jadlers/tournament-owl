import React from 'react';

class SignInForm extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.submit(this.state.email, this.state.password);
  };

  render() {
    const { email, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          required
          name="user-email"
          type="email"
          value={email}
          onChange={e => this.setState({ email: e.target.value })}
        />
        <input
          required
          name="user-password"
          type="password"
          value={password}
          onChange={e => this.setState({ password: e.target.value })}
        />
        <button>Sign in</button>
      </form>
    );
  }
}

export default SignInForm;
