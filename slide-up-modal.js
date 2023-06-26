import React, { useState } from 'react';
import { View, TouchableOpacity, Modal, StyleSheet, Animated } from 'react-native';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const slideAnimation = new Animated.Value(0);

  const handleBoxPress = () => {
    setModalVisible(true);
    Animated.spring(slideAnimation, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const handleCloseModal = () => {
    Animated.spring(slideAnimation, {
      toValue: 0,
      useNativeDriver: true,
    }).start(() => {
      setModalVisible(false);
    });
  };

  const modalTranslateY = slideAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [500, 0],
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.box} onPress={handleBoxPress} />
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <Animated.View style={[styles.modalContainer, { transform: [{ translateY: modalTranslateY }] }]}>
          {/* Modal content */}
          <TouchableOpacity style={styles.closeButton} onPress={handleCloseModal} />
        </Animated.View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  closeButton: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
  },
});

export default App;
