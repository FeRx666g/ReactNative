import { Text, View } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'
import { useFonts } from 'expo-font'
import { SpaceMono_400Regular } from '@expo-google-fonts/space-mono';
import { Colors } from '@/constants/theme';
import { globalStyles } from '@/styles/global-styles';
import * as NavigationBar from 'expo-navigation-bar';
import { Platform } from 'react-native';

// if (Platform.OS === 'android') {
//   NavigationBar.setBackgroundColorAsync('black');
// }

export default function RootLayout() {

  const [loaded] = useFonts({
    SpaceMono_400Regular,
  })

  if (!loaded) {
    return null;
  }

  return (
    <View style={globalStyles.background}>

      <Slot />

    </View>
  )
}