import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import cookieImage from './assets/cookie.png';

export default function App() {
  const [clicks, setClicks] = useState(0);
  const [clicking, setClicking] = useState(false);

  const handlePress = () => {
    setClicks(clicks + 1);
  }

  const cookieSize = clicking ? 180 : 200;
  const cookieStyle = { width: cookieSize, height: cookieSize };

  return (
    <View style={styles.container}>
      <Text>Cookie Clicker 2</Text>
      <Text>Clicks: {clicks}</Text>
      <Pressable onPress={handlePress} onPressIn={() => setClicking(true)} onPressOut={() => setClicking(false)}>
        <Image source={cookieImage} style={cookieStyle} />
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
  }
});
