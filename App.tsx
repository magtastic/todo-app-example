import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hallo!</Text>
      <Text style={styles.title} onPress={() => {
        setCount(count + 1)
      }}>{count}</Text>
      <KeyboardAvoidingView behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input}
          placeholder="Fara út með ruslið..."
        />
      </View>
      </KeyboardAvoidingView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 80,
    fontWeight: 'bold',
  },
  inputContainer: {
    padding: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
    input: {
    borderWidth: 1,

}
});
