import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import * as Colors from '@pxblue/colors'
import { Header, ListItem } from 'react-native-elements';
import StatusList from './components/StatusList';

export default function App() {
  return (
    <View style={styles.container}>
      <Header
        backgroundColor={Colors.blue[500]}
        centerComponent={{ text: 'Status List', style: { color: '#fff', fontSize: 16, } }}
      />
      <StatusList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
