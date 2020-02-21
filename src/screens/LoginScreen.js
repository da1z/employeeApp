import React from 'react';
import { StyleSheet, View } from 'react-native';
import LoginForm from '../components/LoginForm';
const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <LoginForm></LoginForm>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  }
});
export default LoginScreen;
