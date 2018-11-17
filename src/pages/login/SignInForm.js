import React from 'react';
import styled from '@emotion/styled/macro';

import { Input, PrimaryButton, Button } from '../../styled/components';

const SubmitButton = PrimaryButton.withComponent('input');

const Form = styled.form({
  'input:not([type="submit"])': {
    marginBottom: '1em',
  },
});

const FormActions = styled.div({
  display: 'flex',
  flexDirection: 'row-reverse',
});

class SignInForm extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state.email, this.state.password);
  };

  resetPassword = e => {
    e.preventDefault();
    this.props.resetPassword(this.state.email);
  };

  render() {
    const { email, password } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <label>
          Email
          <Input
            required
            autoFocus
            name="user-email"
            type="email"
            placeholder="user@domain.org"
            value={email}
            onChange={e => this.setState({ email: e.target.value })}
          />
        </label>

        <label>
          Password
          <Input
            required
            name="user-password"
            type="password"
            value={password}
            onChange={e => this.setState({ password: e.target.value })}
          />
        </label>

        <FormActions>
          <SubmitButton type="submit" value="Sign in" />
          {/* TODO: Implement resetting password*/}
          <Button
            formnovalidate
            onClick={this.resetPassword}
            style={{ marginRight: '1em' }}
          >
            Forgot password
          </Button>
        </FormActions>
      </Form>
    );
  }
}

export default SignInForm;
