import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import cookieImage from './assets/cookie.png';

export default function App() {
  const [clicks, setClicks] = useState(0);

  const handlePress = () => {
    setClicks(clicks + 1);
  }

  return (
    <View style={styles.container}>
      <Text>Cookie Clicker 2</Text>
      <Text>Clicks: {clicks}</Text>
      <Pressable onPress={handlePress}>
        <Image source={cookieImage} style={styles.cookie} />
      </Pressable>
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
  cookie: {
    width: 200,
    height: 200,
  }
});
