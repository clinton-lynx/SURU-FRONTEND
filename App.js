import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionicon from 'react-native-vector-icons/Ionicons';  



// SCREENS IMPORT
import Welcome from './screens/Welcome';
import SignUp from './screens/Signup';
import Explore from './screens/Explore';
import Cart from './screens/Cart';
import CheckOut from './screens/CheckOut';
import Account from './screens/Account';
import Sell from './screens/sell';
import Home from './screens/Home';
import SignPass from './screens/SignPass';
import { StyleSheet, Text, View, Image } from 'react-native';
import SignCode from './screens/SignCode';
import Login from './screens/Login';




const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#F5F5F5',
  }
}



// SCREEN NAMES
const HOME = 'home'
const EXPLORE = 'explore'
const SELL = 'sell'
const CART = 'cart'
const ACCOUNT = 'account'

const App = () => {
  return (
    <NavigationContainer theme={theme} >
      <Tab.Navigator
        // screenOptions={{ headerShown: false }}
        initialRouteName={HOME}
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: { 
              borderColor: '#E9E9E9',
            // elevation: 0,
            // borderColor: 'none',
            paddingVertical: 10,
            paddingBottom: 20,
            height: 70,
            // backgroundColor: 'red',
            // marginVertical: 10,
            borderTopRightRadius: 40,
            borderTopLeftRadius: 40,

          },
          // tabBarActiveTintColor: 'white',
          tabBarLabelStyle: {
              color: 'red',
              fontSize : 14,
              textTransform: 'capitalize'
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === HOME) {
              iconName = focused ? <Image
                width={10}
                resizeMode='contain'
                source={require('./assets/images/shop-focused.png')}
              /> : <Image
                width={10}
                resizeMode='contain'
                source={require('./assets/images/shop-outline.png')}
              />
            } else if (rn === EXPLORE) {
              iconName = focused ? <Image
                width={10}
                resizeMode='contain'
                source={require('./assets/images/explore-focused.png')}
              /> : <Image
                width={10}
                resizeMode='contain'
                source={require('./assets/images/explore-outline.png')}
              />

            }
            else if (rn === SELL) {
              iconName = focused ? <Image
                width={10}
                resizeMode='contain'
                source={require('./assets/images/shop-focused.png')}
              /> : <Image
                width={10}
                resizeMode='contain'
                source={require('./assets/images/shop-outline.png')}
              />
            } else if (rn === CART) {
              iconName = focused ? <Image
                width={10}
                resizeMode='contain'
                source={require('./assets/images/cart-focused.png')}
              /> : <Image

                width={10}
                resizeMode='contain'
                source={require('./assets/images/cart-outline.png')}
              />
            }
            else if (rn === ACCOUNT) {
              iconName = focused ? <Image
                width={10}
                resizeMode='contain'
                source={require('./assets/images/user-focused.png')}
              /> : <Image
                width={10}
                resizeMode='contain'
                source={require('./assets/images/user.png')}
              />
            }

            // }
            return iconName;
          }
        })}
      >
        <Tab.Screen name={HOME} component={Home} />
        <Tab.Screen name={EXPLORE} component={Explore} options={{ title: 'explore' }} />
        <Tab.Screen name={SELL} component={Sell} options={{ title: 'cart' }} />
        <Tab.Screen name={CART} component={Cart} options={{ title: 'sell' }} />
        <Tab.Screen name={ACCOUNT} component={Account} options={{ title: 'account' }} />

      </Tab.Navigator>
      {/* <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
                  <Stack.Screen name="SignUp"component={SignUp} options={{ title: 'signup' }} />
        <Stack.Screen name="SignCode" component={SignCode} options={{ title: 'signcode' }}  />
        <Stack.Screen name="Welcome" component={Welcome} options={{ title: 'welcome' }} />
        <Stack.Screen name='SignPass' component={SignPass} options={{ title: 'signpass' }} />
        <Stack.Screen name='Login' component={Login} options={{ title: 'login' }} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}




export default App;
