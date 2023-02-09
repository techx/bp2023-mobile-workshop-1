import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const handlePress = () => {
    Alert.alert("Beep boop", "I was pressed!");
  }

  return (
    <View style={styles.container}>
      <Text>My first app!</Text>
      <Button title="Press me!" onPress={handlePress} />
      <StatusBar style="auto" />
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
});
