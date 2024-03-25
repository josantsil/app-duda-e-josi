import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [baseVariavel, setBaseVariavel] = React.useState('');
  const [alturaVariavel2, setAlturaVariavel] = React.useState('');
  const calculo = (parseFloat(baseVariavel) * parseFloat(alturaVariavel2)) / 2;

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Digite a base:  </Text>
      <TextInput onChangeText={setBaseVariavel} style={styles.txtField} />

      <Text style={styles.field}>Digite altura: </Text>
      <TextInput onChangeText={setAlturaVariavel} style={styles.txtField} />
      {!isNaN(calculo) && <Text style={styles.field}>Resposta: '{calculo}' </Text>}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(131,111,255)',

    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  field: {
    color: '#fff',
    fontSize: 22,
  },
  txtField: {
    backgroundColor: 'rgb(72,61,139)',
    borderRadius: 18,
    width: 'auto',
    padding: 9,
    marginTop: 11,
  },
});