import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cau2a from './screens/Cau2a';
import Cau2c from './screens/Cau2c';
import TikTokOK from './screens/TikTokOK';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cau2a">
        <Stack.Screen name="Cau2a" component={Cau2a} options={{ title: 'Login' }} />
        <Stack.Screen name="TikTokOK" component={TikTokOK} options={{ title: 'TikTok OK' }} />
        <Stack.Screen name="Cau2c" component={Cau2c} options={{ title: 'Forgot Password' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
