import 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {
  Ubuntu_400Regular,
  Ubuntu_500Medium,
  Ubuntu_700Bold,
} from '@expo-google-fonts/ubuntu';
import Header from './src/components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Galeria } from './src/components/Galeria';

export default function App() {
  const [fontsLoaded] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_500Medium,
    Ubuntu_700Bold,
  });
  if (!fontsLoaded) {
    return <Text style={{ backgroundColor: '#fff' }}>Loading...</Text>;
  }

  if (fontsLoaded)
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <SafeAreaView style={[styles.container]}>
          <Header />
          <Galeria />
        </SafeAreaView>
        <StatusBar style="dark" />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
