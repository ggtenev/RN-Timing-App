import React from 'react';
import uuidv4 from 'uuidv4';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';

import EditableTimer from './components/EditableTimer'
import ToggleableTimerForm from './components/ToggleableTimerForm'

export default class App extends React.Component {
  state = {
    timers: []
  }
  
  // INCREMENTING TIME
  componentDidMount() {
    let INTERVAL = 1000;

    this.intervalId = setInterval(() => {
      const { timers } = this.state
      this.setState({
        timers: timers.map(timer => {
          const { elapsed, isRunning } = timer;
          return {
            ...timer,
            elapsed: isRunning ? elapsed + INTERVAL : elapsed
          }
        })
      })
    }, INTERVAL);
  }
  
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  //CONTROL "START" / "STOP" buttons
  toggleTimer = timerID => {
    this.setState(prevState => {
      const { timers } = prevState

      return {
        timers: timers.map(timer => {
          const { id, isRunning } = timer
          if (id === timerID) {
            return {
              ...timer,
              isRunning: !isRunning
            }
          }
          return timer
        })

      }
    })
  }

  deleteTimer = (id) => {
    let timers = this.state.timers.filter(t => t.id !== id)
    this.setState({ timers })
  }
  updateTimer = (id, title, project) => {
    let index = this.state.timers.findIndex(t => t.id === id)
    let timers = [...this.state.timers]
    timers[index].title = title
    timers[index].project = project
    this.setState({ timers })
  }

  addTimer = (title, project) => {
    let newTimer = {
      title,
      project,
      id: Math.random(),
      elapsed: 0,
      isRunning: false,
    }
    let timers = [newTimer, ...this.state.timers]
    this.setState({
      timers: timers
    })
  }
  render() {
    const timers = this.state.timers.map(t => {
      return <EditableTimer
        key={t.id}
        id={t.id}
        title={t.title}
        project={t.project}
        elapsed={t.elapsed}
        isRunning={t.isRunning}
        deleteTimer={this.deleteTimer}
        addTimer={this.addTimer}
        updateTimer={this.updateTimer}
        onStop={this.toggleTimer}
        onStart={this.toggleTimer}
      />
    })
    return (
      <View style={styles.appContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Timers</Text>
        </View>
        <ScrollView style={styles.timerList}>
          <ToggleableTimerForm addTimer={this.addTimer} logging={this.logging} />
          {timers}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleContainer: {
    paddingTop: 35,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#D6D7DA',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  timerList: {
    paddingBottom: 15
  }
});
