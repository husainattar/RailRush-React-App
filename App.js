import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Page1 from './screens/page1';
import Page2 from './screens/page2';
import Page3 from './screens/page3';

import Navigator from './routes/homeStack';

export default function App() {
  return (
    <Navigator />    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
