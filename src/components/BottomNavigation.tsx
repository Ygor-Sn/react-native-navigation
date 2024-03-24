import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";

import Home from '../screens/Home';
import Next from '../screens/Next';
import Search from '../screens/Search';
import Notifications from '../screens/Notifications';
import Profile from '../screens/Profile';

import IconHome from '../icons/home.svg';
import IconHomeFilled from '../icons/home_filled.svg';
import IconNext from '../icons/fire.svg';
import IconNextFilled from '../icons/fire_filled.svg';
import IconSearch from '../icons/search.svg';
import IconSearchFilled from '../icons/search_filled.svg';
import IconNotifications from '../icons/notifications.svg';
import IconNotificationsFilled from '../icons/notifications_filled.svg';
import IconProfile from '../icons/profile.svg';
import IconProfileFilled from '../icons/profile_filled.svg';


const Tab = createMaterialBottomTabNavigator();

export const BottomNavigation = () => {
  return (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{    
          tabBarIcon: ({ color, focused }) => (
            focused 
              ? <IconHomeFilled fill={color} width={24} height={24} />
              : <IconHome fill={color} width={24} height={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Next"
        component={Next}
        options={{
          tabBarIcon: ({ color, focused }) => (
            focused 
              ? <IconNextFilled fill={color} width={24} height={24} />
              : <IconNext fill={color} width={24} height={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color, focused }) => (
            focused 
              ? <IconSearchFilled fill={color} width={24} height={24} />
              : <IconSearch fill={color} width={24} height={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({ color, focused }) => (
            focused 
              ? <IconNotificationsFilled fill={color} width={24} height={24} />
              : <IconNotifications fill={color} width={24} height={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, focused }) => (
            focused 
              ? <IconProfileFilled fill={color} width={24} height={24} />
              : <IconProfile fill={color} width={24} height={24} />
          ),
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
  );
}