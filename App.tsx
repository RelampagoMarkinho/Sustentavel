import React from "react-native";

import AppLoading from "expo-app-loading";

import { Home } from "./src/screens/Home";

import { SeteRs } from "./src/screens/SeteRs";

import { Plastico } from "./src/screens/Plastico/index";

import { Papel } from "./src/screens/Papel";

import { Organico } from "./src/screens/Organico";

import { Metal } from "./src/screens/Metal";

import { Vidro } from "./src/screens/Vidro";

import { Ideias } from "./src/screens/Ideias";

import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import THEME from "./src/theme";

import { ThemeProvider } from "styled-components/native";

import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from "@expo-google-fonts/roboto";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  });

  const Stack = createNativeStackNavigator();

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={THEME}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="SeteRS" component={SeteRs} options={{ title: '7Rs', }} />
          <Stack.Screen name="Plastico" component={Plastico} options={{ title: 'Resíduo Plástico', }} />
          <Stack.Screen name="Papel" component={Papel} options={{ title: 'Resíduo Papel' }} />
          <Stack.Screen name="Ideias" component={Ideias} options={{ title: 'Ideias' }} />
          <Stack.Screen name="Organico" component={Organico} options={{ title: 'Resíduo Orgânico', }} />
          <Stack.Screen name="Metal" component={Metal} options={{ title: 'Resíduo Metal' }} />
          <Stack.Screen name="Vidro" component={Vidro} options={{ title: 'Resíduos Vidro' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
