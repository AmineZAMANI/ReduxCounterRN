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

class Counter extends React.Component {
  state = {
    value: 0,
  };

  increment = () => {
    this.props.increment(10);
  };

  componentDidMount() {
    console.log('init');
    this.props.init(this.props.initialvalue);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.button}>
          <Button title="Like" onPress={this.increment} />
        </View>
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    init: initialvalue => dispatch({type: 'INIT', value: initialvalue}),
    increment: value => dispatch({type: 'INCREMENT', value: 1}),
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
)(Counter);

const styles = StyleSheet.create({
  counter: {
    fontSize: 40,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems : 'center'
  },
  button: {
    width: 100,
    height: 100,
  },
});
