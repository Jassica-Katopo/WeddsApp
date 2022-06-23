import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { 
  SignIn, 
  SplashScreen, 
  SignUp, 
  //main pages
  Home, 
  Profile, 
  OnProgress,
  //edit profile
  EditProfile,
  //vendor detail,
  VendorDetail,
  //checklist
  Checklist,
  //reserve
  Reserve,
  //chat
  Chat
 } from '../pages';



import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationBottom } from '../components';

//import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
//const Drawer = createDrawerNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <NavigationBottom {...props} />}>
        <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Tab.Screen name="Status" component={OnProgress} options={{headerShown: false}} />
        <Tab.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
      </Tab.Navigator>
  )
}


const Router = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen 
        name="SplashScreen" 
        component={SplashScreen}
        options={{headerShown: false}}/>
        <Stack.Screen 
        name="SignIn" 
        component={SignIn}
        options={{headerShown: false}}/>
        <Stack.Screen 
        name="SignUp" 
        component={SignUp}
        options={{headerShown: true, title: 'Sign Up'}}/>

        <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}/>
        

        <Stack.Screen 
        name="EditProfile" 
        component={EditProfile}
        options={{headerShown: true, title: 'Edit Profile'}}
        />

        <Stack.Screen 
        name="VendorDetail" 
        component={VendorDetail}
        options={{headerShown: true, title: 'Vendor Detail'}}
        />

        <Stack.Screen 
        name="Checklist" 
        component={Checklist}
        options={{headerShown: false, title: 'Checklist'}}
        />

        <Stack.Screen 
        name="Reserve" 
        component={Reserve}
        options={{headerShown: true, title: 'Reserve'}}
        />

        <Stack.Screen 
        name="Chat" 
        component={Chat}
        options={{headerShown: true, title: 'Chat'}}
        />
    </Stack.Navigator>
  )
}

export default Router