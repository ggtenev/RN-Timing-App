import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import TimerButton from './TimerButton'
import TimerForm from './TimerForm'

export default function ToggleableTimerForm({addTimer, logging}) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleForm = () => {
    setIsOpen(!isOpen)
  }

  return (
    <View style={[styles.container, !isOpen && styles.buttonPadding]}>
      {isOpen ? (
      <TimerForm toggleForm={toggleForm} addTimer={addTimer} logging={logging}/>
       ) : (
       <TimerButton title="+" color="black" onPress={toggleForm} />
       )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  buttonPadding: {
    paddingHorizontal: 15,
  },
});
