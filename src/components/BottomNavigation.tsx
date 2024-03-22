import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../screens/Home';
import Next from '../screens/Next';
import Search from '../screens/Search';
import Notifications from '../screens/Notifications';
import Profile from '../screens/Profile';

import IconHome from '../icons/home.svg';
import IconNext from '../icons/fire.svg';
import IconSearch from '../icons/search.svg';
import IconNotifications from '../icons/notifications.svg';
import IconProfile from '../icons/profile.svg';

const Tab = createMaterialBottomTabNavigator();

export const BottomNavigation = () => {
  return (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <IconHome fill={color} width={24} height={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Next"
        component={Next}
        options={{
          tabBarIcon: ({ color }) => (
            <IconNext fill={color} width={24} height={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color }) => (
            <IconSearch fill={color} width={24} height={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({ color }) => (
            <IconNotifications fill={color} width={24} height={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <IconProfile fill={color} width={24} height={24} />
          ),
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
  );
}