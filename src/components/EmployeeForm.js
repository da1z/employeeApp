import React, { Component } from 'react';
import { Text, Picker } from 'react-native';
import { Input } from 'react-native-elements';
import Spacer from './Spacer';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';

class EmployeeForm extends Component {
  render() {
    return (
      <>
        <Spacer>
          <Input
            label="Name"
            placeholder="John"
            value={this.props.name}
            onChangeText={text =>
              this.props.employeeUpdate({ prop: 'name', value: text })
            }
          ></Input>
        </Spacer>
        <Spacer>
          <Input
            label="Phone"
            placeholder="201-201-2012"
            value={this.props.phone}
            onChangeText={text =>
              this.props.employeeUpdate({ prop: 'phone', value: text })
            }
          ></Input>
        </Spacer>
        <Spacer>
          <Text
            style={{
              fontWeight: 'bold',
              marginLeft: 10,
              color: '#86939e',
              fontSize: 16
            }}
          >
            Shift
          </Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={day =>
              this.props.employeeUpdate({ prop: 'shift', value: day })
            }
          >
            <Picker.Item label="Monday" value="Monday"></Picker.Item>
            <Picker.Item label="Tuesday" value="Tuesday"></Picker.Item>
            <Picker.Item label="Wednesday" value="Wednesday"></Picker.Item>
            <Picker.Item label="Thursday" value="Thursday"></Picker.Item>
            <Picker.Item label="Friday" value="Friday"></Picker.Item>
            <Picker.Item label="Saturday" value="Saturday"></Picker.Item>
            <Picker.Item label="Sunday" value="Sunday"></Picker.Item>
          </Picker>
        </Spacer>
      </>
    );
  }
}
const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeCreate;
  return { name, phone, shift };
};
export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
