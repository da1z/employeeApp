import _ from 'lodash';
import React, { PureComponent, Component } from 'react';
import { connect } from 'react-redux';
import { employeeFetch } from '../actions';
import { StyleSheet, FlatList } from 'react-native';
import { Text, Button, ListItem } from 'react-native-elements';
import { navigate } from '../helpers/navigationRef';

class EmployeeListScreen extends Component {
  componentDidMount() {
    this.props.employeeFetch();
  }

  renderRow({ item }) {
    return (
      <ListItem
        title={item.name}
        subtitle={item.phone}
        bottomDivider
        chevron
        rightSubtitle={item.shift}
        onPress={() => navigate('EmployeeEdit', { employee: item })}
      ></ListItem>
    );
  }

  render() {
    this.props.navigation.setOptions({
      headerRight: () => (
        <Button
          title="Add"
          type="clear"
          onPress={() => navigate('EmployeeCreate')}
        />
      )
    });
    return (
      <>
        <Text h2>Employee List Screen</Text>
        <FlatList
          data={this.props.employees}
          renderItem={this.renderRow}
          keyExtractor={item => item.uid}
        ></FlatList>
      </>
    );
  }
}

const styles = StyleSheet.create({});

const mapStateToProps = state => {
  return {
    employees: _.map(state.employeeList, (val, uid) => {
      return { ...val, uid };
    })
  };
};

export default connect(mapStateToProps, { employeeFetch })(EmployeeListScreen);
