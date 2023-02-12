import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Home from './screens/Welcome';
import SignUp from './screens/Signup';
import SignPass from './screens/SignPass';
// import {useFonts} from "/screen";
import { StyleSheet, Text, View, Image } from 'react-native';
import SignCode from './screens/SignCode';
import Login from './screens/Login';
const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#F5F5F5',
  }
}
const App = () => {
  return (
    <NavigationContainer theme={theme} >
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ title: 'welcome' }} />
        <Stack.Screen name="SignUp"component={SignUp} options={{ title: 'signup' }} />
        <Stack.Screen name="SignCode" component={SignCode} options={{ title: 'signcode' }}  />
        <Stack.Screen name='SignPass' component={SignPass} options={{ title: 'signpass' }} />
        <Stack.Screen name='Login' component={Login} options={{ title: 'login' }} />
        {/* <Stack.Screen name='Login' component={Login} /> */}
        {/* <Stack.Screen name='Login' component={Login} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
