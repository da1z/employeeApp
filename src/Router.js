import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import EmployeeListScreen from './screens/EmployeeListScreen';
import { setNavigator } from './helpers/navigationRef';
import EmployeeCreateScreen from './screens/EmployeeCreateScreen';
import EmployeeEditScreen from './screens/EmployeeEditScreen';
const LoginFlowStack = createStackNavigator();

const LoginFlow = () => {
  return (
    <LoginFlowStack.Navigator>
      <LoginFlowStack.Screen
        name="Login"
        options={{
          title: 'Please Login'
        }}
        component={LoginScreen}
      ></LoginFlowStack.Screen>
    </LoginFlowStack.Navigator>
  );
};

const EmployeeFlowStack = createStackNavigator();
const EmployeeFlow = () => {
  return (
    <EmployeeFlowStack.Navigator>
      <EmployeeFlowStack.Screen
        name="EmployeeList"
        component={EmployeeListScreen}
        options={{
          title: 'Employee List'
        }}
      ></EmployeeFlowStack.Screen>
      <EmployeeFlowStack.Screen
        name="EmployeeCreate"
        component={EmployeeCreateScreen}
        options={{ title: 'New Employee' }}
      ></EmployeeFlowStack.Screen>
      <EmployeeFlowStack.Screen
        name="EmployeeEdit"
        component={EmployeeEditScreen}
        options={{ title: 'Edit Employee' }}
      ></EmployeeFlowStack.Screen>
    </EmployeeFlowStack.Navigator>
  );
};

const MainFlowStack = createStackNavigator();
const MainFlow = () => {
  return (
    <MainFlowStack.Navigator headerMode="none">
      <MainFlowStack.Screen name="LoginFlow" component={LoginFlow} />
      <MainFlowStack.Screen name="EmployeeFlow" component={EmployeeFlow} />
    </MainFlowStack.Navigator>
  );
};

const Router = () => {
  return (
    <NavigationContainer ref={navigator => setNavigator(navigator)}>
      <MainFlow />
    </NavigationContainer>
  );
};

export default Router;
