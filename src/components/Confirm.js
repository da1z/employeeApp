import React from 'react';
import { View, Modal, StyleSheet } from 'react-native';
import { Card, Button, Text } from 'react-native-elements';
import Spacer from './Spacer';
const Confirm = ({ children, visible, onAccept, onDecline }) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={() => {}}
      transparent
    >
      <View style={styles.containerStyle}>
        <Card title={children}>
          <View>
            <Spacer>
              <Button title="Yes" onPress={onAccept}></Button>
            </Spacer>
            <Spacer>
              <Button title="No" onPress={onDecline}></Button>
            </Spacer>
          </View>
        </Card>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: 'rgba(0,0,0,0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
});
export { Confirm };
