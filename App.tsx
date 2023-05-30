
//690667431796-j7k7p2v793q947ph7p9bins50dqjprg1.apps.googleusercontent.com
import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Login1 from "./screens/Login1";
import HomeScroll3 from "./screens/HomeScroll3";
import CaloriesDetails from "./screens/CaloriesDetails";
import RewardReward from "./screens/RewardReward";
import Login from "./screens/Login";
import Coupons from "./screens/Coupons";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from 'react-native-vector-icons/Ionicons';
// import { Icon } from "@rneui/base";
const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();
const tintColor='#2d3436'
const Hometabs =()=>{

  



  return(
  <Tab.Navigator
    initialRouteName="Login1"
    // screenOptions={{ headerShown: false }}
  >
    <Tab.Screen
      name="Home"
      
      component={HomeScroll3}
      options={{tabBarIcon:()=>(  
        <Icon name="ios-home" color={tintColor} size={25}/>
        
    )}}
    />
    <Tab.Screen
      name="Rewards"
      component={RewardReward}
      // options={{ headerShown: false }}
      options={{tabBarIcon:()=>(<Icon name="ios-medal" color={tintColor} size={25}/>)}}/>
    <Tab.Screen
      name="Coupons"
      component={Coupons}
      options={{tabBarIcon:()=>(<Icon name="ios-card" color={tintColor} size={25}/>)}}/>
  </Tab.Navigator>)
}
const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "Circular Std_regular": require("./assets/fonts/Circular_Std_regular.ttf"),
    "Circular Std_bold": require("./assets/fonts/Circular_Std_bold.ttf"),
    Roboto_regular: require("./assets/fonts/Roboto_regular.ttf"),
    Roboto_bold: require("./assets/fonts/Roboto_bold.ttf"),
    "DM Sans_bold": require("./assets/fonts/DM_Sans_bold.ttf"),
    Poppins_regular: require("./assets/fonts/Poppins_regular.ttf"),
    Poppins_semibold: require("./assets/fonts/Poppins_semibold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (<Stack.Navigator
            initialRouteName="Login1"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="Login1"
              component={Login1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeScroll3"
              component={Hometabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CaloriesDetails"
              component={CaloriesDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RewardReward"
              component={Hometabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Coupons"
              component={Coupons}
              options={{ headerShown: false }}/>
          </Stack.Navigator>
          
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
