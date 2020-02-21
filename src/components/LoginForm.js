import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { StyleSheet, View } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import Spacer from './Spacer';

class LoginForm extends Component {
  onEmailChanged(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onLoginPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderError() {
    if (this.props.error) {
      return (
        <View>
          <Text style={styles.errorTextStyle}>{this.props.error}</Text>
        </View>
      );
    }
  }

  render() {
    return (
      <>
        <Spacer>
          <Input
            label="Email"
            placeholder="example@email.com"
            autoCapitalize="none"
            autoCompleteType="off"
            onChangeText={this.onEmailChanged.bind(this)}
            value={this.props.email}
          ></Input>
        </Spacer>
        <Spacer>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          ></Input>
        </Spacer>
        {this.renderError()}
        <Spacer>
          <Button
            style={styles.btn}
            title="Login"
            loading={this.props.loading}
            onPress={this.onLoginPress.bind(this)}
          ></Button>
        </Spacer>
      </>
    );
  }
}
const styles = StyleSheet.create({
  btn: {
    marginHorizontal: 10
  },
  errorTextStyle: {
    alignSelf: 'center',
    color: 'red'
  }
});

const mapStateToProps = ({ auth: { email, password, error, loading } }) => {
  return {
    email,
    password,
    error,
    loading
  };
};
export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser
})(LoginForm);
