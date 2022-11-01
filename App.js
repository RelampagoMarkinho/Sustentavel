import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens/Home';
import { Metal } from './src/screens/Metal';
import { Organico } from './src/screens/Organico';
import { Papel } from './src/screens/Papel';
import { Plastico } from './src/screens/Plastico';
import { Vidro } from './src/screens/Vidro';
import { Ideias } from './src/screens/Ideias';
import { SeteRs } from './src/screens/SeteRs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Metal" component={Metal} options={{ title: 'Resíduo Metal' }} />
        <Stack.Screen name="Orgânico" component={Organico} options={{ title: 'Resíduo Orgânico' }} />
        <Stack.Screen name="Papel" component={Papel} options={{ title: 'Resíduo Papel' }} />
        <Stack.Screen name="Plastico" component={Plastico} options={{ title: 'Resíduo Plastico' }} />
        <Stack.Screen name="Vidro" component={Vidro} options={{ title: 'Resíduo Vidro' }} />
        <Stack.Screen name="Ideias" component={Ideias} options={{ title: 'Ideias' }} />
        <Stack.Screen name="SeteRs" component={SeteRs} options={{ title: '7Rs' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
