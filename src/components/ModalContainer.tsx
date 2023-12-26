import {Modal, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';

type TModalContainer = {
  children: React.ReactNode;
  onClose?: () => void;
};
const ModalContainer = (props: TModalContainer) => {
  return (
    <Modal transparent animationType="fade">
      <View style={styles.container}>
        <TouchableOpacity
          onPress={props.onClose}
          activeOpacity={1}
          style={styles.closingArea}
        />
        {props.children}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  closingArea: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

export default ModalContainer;
