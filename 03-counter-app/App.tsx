import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import FAB from './components/FAB';

export default function App() {

  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text>Hola Mundo.asdfasdf..</Text>
      <Text style={styles.textHuge}>{count}</Text>

      {/* <Pressable 
      style={styles.floatingButton}
      onPress={() => setCount(count+1)}
      onLongPress={() => setCount(0)}
      >
        <Text style={{color: 'white', fontSize: 20}}>+1</Text>
      </Pressable> */}

      <FAB label='+1'
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
        position='right'
      />

      <FAB label='Reset'
        onPress={() => setCount(0)}
        onLongPress={() => setCount(0)}
        position='left'
      />

      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textHuge: {
    fontSize: 80,
    fontWeight: '300',
  },


});
