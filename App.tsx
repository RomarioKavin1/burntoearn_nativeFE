//690667431796-j7k7p2v793q947ph7p9bins50dqjprg1.apps.googleusercontent.com
import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import Login1 from './screens/Login1';
import HomeScroll3 from './screens/HomeScroll3';
import CaloriesDetails from './screens/CaloriesDetails';
import RewardReward from './screens/RewardReward';
import Login from './screens/Login';
import Coupons from './screens/Coupons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import {Image} from 'react-native';
import {metamaskWallet, ThirdwebProvider} from '@thirdweb-dev/react-native';
// import { Icon } from "@rneui/base";
const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();
const tintColor = '#2d3436';
const Hometabs = () => {
  return (
   
      <Tab.Navigator
        initialRouteName="Login1"
        // screenOptions={{ headerShown: false }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScroll3}
          options={{
            tabBarIcon: () => (
              <Image
                style={{height: 30, width: 30}}
                source={require('./assets/home.png')}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Rewards"
          component={RewardReward}
          // options={{ headerShown: false }}
          options={{
            tabBarIcon: () => (
              <Image
                style={{height: 35, width: 35}}
                source={require('./assets/stars.png')}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Coupons"
          component={Coupons}
          options={{
            tabBarIcon: () => (
              <Image
                style={{height: 30, width: 30}}
                source={require('./assets/coupon.png')}
              />
            ),
          }}
        />
      </Tab.Navigator>
  );
};
const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
     <ThirdwebProvider
      activeChain="mumbai"
      supportedWallets={[metamaskWallet()]}>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="Login1"
            screenOptions={{headerShown: false}}>
            <Stack.Screen
              name="Login1"
              component={Login1}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="HomeScroll3"
              component={Hometabs}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="CaloriesDetails"
              component={CaloriesDetails}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="RewardReward"
              component={Hometabs}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Coupons"
              component={Coupons}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </ThirdwebProvider>

    </>
  );
};
export default App;
