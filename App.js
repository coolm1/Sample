
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { RkButton, RkCard, rkCardContent, rkCardFooter, rkCardHeader } from 'react-native-ui-kitten';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Text style={styles.navBarButton}>Back</Text>
          <Text style={styles.navBarHeader}>Awesome App</Text>
          <Text style={styles.navBarButton}>More</Text>
        </View>
        <View style={styles.cardwhole}>
          <RkCard rkType='shadowed' style={styles.card}>
            <View rkCardHeader>
              <Text>Header</Text>
            </View>
            <View rkCardContent>
              <Text> quick brown fox jumps over the lazy dog</Text>
            </View>
            <View rkCardFooter>
              <Text>Footer</Text>
            </View>
          </RkCard>
        </View>
        <View style={styles.tabBar}>
          <View style={[styles.tabBarButton, styles.button1]} />
          <View style={[styles.tabBarButton, styles.button2]} />
          <View style={[styles.tabBarButton, styles.button3]} />
          <View style={[styles.tabBarButton, styles.button4]} />
          <View style={[styles.tabBarButton, styles.button5]} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#374046'
  },
  cardwhole: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  card: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#EEEEEE'
  },
  navBar: {
    flexDirection: 'row',
    paddingTop: 20,
    height: 64,
    backgroundColor: '#1EAAF1'
  },
  navBarButton: {
    color: '#FFFFFF',
    textAlign: 'center',
    width: 64
  },
  navBarHeader: {
    flex: 1,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50
  },
  tabBarButton: {
    width: 30,
    height: 30
  },
  button1: { backgroundColor: '#8BC051' },
  button2: { backgroundColor: '#CCD948' },
  button3: { backgroundColor: '#FDE84D' },
  button4: { backgroundColor: '#FCBF2E' },
  button5: { backgroundColor: '#FC9626' }
});
