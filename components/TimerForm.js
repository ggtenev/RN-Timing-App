import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, Button } from 'react-native';

import TimerButton from './TimerButton'

export default function TimerForm({ key ,id, toggleForm, addTimer,deleteTimer,updateTimer }) {
  const [title, setTitle] = useState('')
  const [project, setProject] = useState('')
  const submitText = id ? 'Update' : 'Create';
  const addNewTimer = (id) => {
    addTimer(title,project)
    setTitle('')
    setProject('')
    toggleForm()
    // deleteTimer(key)
  }
  const update = (id,title,project) => {
    updateTimer(id,title,project)
    toggleForm()
  }
  const addButton = submitText == 'Create' ? (
   <Button title={submitText}  onPress={addNewTimer}  /> ):(
   <Button title={submitText}  onPress={() => update(id,title,project) } /> )
  return (
    <View style={styles.formContainer}>
      <View style={styles.attributeContainer}>
        <Text style={styles.textInputTitle}>Title</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            underlineColorAndroid="transparent"
            defaultValue={title}
            value={title}
            onChangeText={(t) => setTitle(t)} />
        </View>
      </View>
      <View style={styles.attributeContainer}>
        <Text style={styles.textInputTitle}>Project</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            underlineColorAndroid="transparent"
            defaultValue={project}
            value={project}
            onChangeText={(t) => setProject(t)} />
        </View>
      </View>
      <View style={styles.buttonGroup}>
       {addButton}
        <Button title='Cancel' color='red' onPress={toggleForm}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: 'white',
    borderColor: '#D6D7DA',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    margin: 15,
    marginBottom: 0,
  },
  attributeContainer: {
    marginVertical: 8,
  }, textInputContainer: {
    borderColor: '#D6D7DA',
    borderRadius: 2,
    borderWidth: 1,
    marginBottom: 5,
  }, textInput: {
    height: 30,
    padding: 5,
    fontSize: 12,
  }, textInputTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  }, buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
})
