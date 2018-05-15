import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, padding: 10, alignSelf: 'center', justifyContent: 'center' }}>
          <MaterialIcons name="restaurant" size={30} color={"#fff"} />
        </View>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              color: '#fff',
              fontSize: 20,
              alignSelf: 'center',
              justifyContent: 'center'
            }}
          >Restaurant App
            </Text>
        </View>
        <View style={{ flex: 1 }}>
          <TouchableHighlight
            onPress={() => false}
            style={{ padding: 10 }}
            underlayColor="#ff0000"
          >
            <Text
              style={{
                color: '#fff',
                fontSize: 20,
                alignSelf: 'center',
                justifyContent: 'center'
              }}
            >Procure seu restaurante! Clique aqui!
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
