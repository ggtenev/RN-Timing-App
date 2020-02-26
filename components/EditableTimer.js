import React, { useState } from 'react';
import { View, Text } from 'react-native';

import TimerForm from './TimerForm'
import Timer from './Timer'


export default function EditableTimer({onStop,onStart,updateTimer, id, title, project, elapsed, isRunning,deleteTimer, addTimer }) {
  const [formOpen, setFormOpen] = useState(false)

  const toggleForm = (id) => {
    setFormOpen(!formOpen)
  }

  if (formOpen) {
    return <TimerForm
      id={id}
      key = {id}
      title={title}
      project={project}
      addTimer={addTimer}
      toggleForm={toggleForm}
      deleteTimer={deleteTimer}
      updateTimer={updateTimer} />
  } else return (
    <View>
    <Timer
      id={id}
      title={title}
      project={project}
      elapsed={elapsed}
      isRunning={isRunning}
      deleteTimer={deleteTimer}
      onPress = {toggleForm}
      onStart={onStart}
      onStop={onStop} />
      </View>

  )
}
