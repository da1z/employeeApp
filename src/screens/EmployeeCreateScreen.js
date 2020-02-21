import React from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { View, StyleSheet, Picker } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import EmployeeForm from '../components/EmployeeForm';

const EmployeeCreateScreen = ({
  name,
  phone,
  shift,
  employeeCreate,
}) => {
  return (
    <View style={styles.container}>
      <EmployeeForm></EmployeeForm>
      <Spacer>
        <Button
          style={styles.btn}
          title="Save"
          onPress={() =>
            employeeCreate({ name, phone, shift: shift || 'Monday' })
          }
        ></Button>
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  btn: {
    marginHorizontal: 10
  }
});

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeCreate;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(
  EmployeeCreateScreen
);
