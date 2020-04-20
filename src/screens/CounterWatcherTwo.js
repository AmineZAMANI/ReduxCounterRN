/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Button, View, Text} from 'react-native';

import {connect} from 'react-redux';

class CounterWatcherTwo extends React.Component {
  state = {
    value: 0,
  };

  componentDidMount() {
    this.props.init(this.props.initialvalue);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.counterWatcherTwo}> {this.props.value} Likes </Text>
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    init: initialvalue => dispatch({type: 'INIT', value: initialvalue}),
  };
}

function mapStateToProps(state) {
  return {
    value: state.value,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CounterWatcherTwo);

const styles = StyleSheet.create({
  counterWatcherTwo: {
    fontSize: 20,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
  },
});
