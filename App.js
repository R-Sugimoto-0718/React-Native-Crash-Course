import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <View style={{
        padding: 50,
        flexDirection: 'row',
        width: '80%',
        height: 300,
        justifyContent: "space-around",
        alignItems: 'stretch'
      }}>
        <View
          style={{
            backgroundColor: 'red',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Text>1</Text>
        </View>
        <View
          style={{
            backgroundColor: 'blue',
            flexDirection: 'row',
            flex: 1 ,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Text>2</Text>
        </View>
        <View
          style={{
            backgroundColor: 'green',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Text>3</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});
