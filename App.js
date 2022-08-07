import React from 'react';
import { Routes } from './src/routes';

import AppLoading from 'expo-app-loading';
import { useFonts, Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto';



export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_700Bold, Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Routes />
  );
}
