import _ from 'lodash';
import React, { Component, useState } from 'react';
import communications from 'react-native-communications';
import Spacer from '../components/Spacer';
import { Button } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';
import EmployeeForm from '../components/EmployeeForm';
import { connect } from 'react-redux';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { Confirm } from '../components/Confirm';

class EmployeeEditScreen extends Component {
  state = { showModal: false };
  constructor(props) {
    super(props);
    _.each(this.props.route.params.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onTextPress() {
    const { phone, shift } = this.props;
    communications.text(phone, `Your upcoming schedule ${shift}`);
  }

  onFireEmployeeAccept() {
    this.setState({ showModal: false });
    this.props.employeeDelete({ uid: this.props.route.params.employee.uid });
  }

  render() {
    return (
      <View style={styles.container}>
        <EmployeeForm></EmployeeForm>
        <Spacer>
          <Button
            style={styles.btn}
            title="Save Changes"
            onPress={() => {
              const { name, phone, shift } = this.props;
              this.props.employeeSave({
                name,
                phone,
                shift,
                uid: this.props.route.params.employee.uid
              });
            }}
          ></Button>
          <Button
            style={styles.btn}
            title="Text Schedule"
            onPress={this.onTextPress.bind(this)}
          ></Button>
          <Button
            style={styles.btn}
            title="Fire Employee"
            onPress={() => {
              this.setState({ showModal: !this.state.showModal });
            }}
          ></Button>
          <Confirm
            visible={this.state.showModal}
            onAccept={this.onFireEmployeeAccept.bind(this)}
            onDecline={() => {
              this.setState({ showModal: false });
            }}
          >
            Are you sure want to fire this employee?
          </Confirm>
        </Spacer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  btn: {
    marginHorizontal: 10,
    marginBottom: 15
  }
});

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeCreate;
  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdate,
  employeeSave,
  employeeDelete
})(EmployeeEditScreen);
