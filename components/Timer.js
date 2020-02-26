import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { millisecondsToHuman } from '../utils/TimerUtils';
import TimerButton from './TimerButton'

export default function Timer({isRunning, id, title, project, elapsed,deleteTimer,onPress, onStart, onStop }) {
  const elapsedString = millisecondsToHuman(elapsed);
  const button = isRunning ? (
      <TimerButton color="red" title="Stop" onPress={() => onStop(id)}/>
  ) : <TimerButton color="#21BA45" title="Start" onPress={() => onStart(id)}/>

  return (
    <View style={styles.timerContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text>{project}</Text>
      <Text style={styles.elapsedTime}>{elapsedString}</Text>
      <View style={styles.buttonGroup}>
        <TimerButton color="blue" small title="Edit" onPress={() => onPress(id)} />
        <TimerButton color="blue" small title="Remove" onPress = {() =>deleteTimer(id)} />
      </View>
      {button}
    </View>
    );
}

const styles = StyleSheet.create({
  timerContainer: {
    backgroundColor: 'white',
    borderColor: '#d6d7da',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    margin: 15,
    marginBottom: 0,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  elapsedTime: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 15,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})