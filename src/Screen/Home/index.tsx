import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Fields from '../../assets/icons/fields.png';
import Stables from '../../assets/icons/Stables.png';
import Coop from '../../assets/icons/coop.png';
import Dashboard from '../../assets/icons/dashboard.png';
import Settings from '../../assets/icons/settings.png';

import {SafeAreaView, FlatList, Image} from 'react-native';
import DashboardScreen from '../Dashboard';

import FieldsScreen from '../Fields';

import StablesScreen from '../Stables';
import SettingsScreen from '../Settings';
import CoopsScreen from '../Coops';

const Tab = createBottomTabNavigator();
const Home = () => {
  return (
    <>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#48A44C',
          inactiveTintColor: 'gray',
          showLabel: false,
        }}>
        <Tab.Screen
          options={{
            tabBarLabel: 'Tarlalar',
            tabBarIcon: (tind) => (
              <>
                <Image source={Dashboard} style={{width: 25, height: 25}} />
                {tind.focused == true ? (
                  <Octicons name="primitive-dot" size={10} color={tind.color} />
                ) : null}
              </>
            ),
          }}
          name="Dashboard"
          component={DashboardScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: 'Tarlalar',
            tabBarIcon: (tind) => (
              <>
                <Image source={Fields} style={{width: 25, height: 25}} />
                {tind.focused == true ? (
                  <Octicons name="primitive-dot" size={10} color={tind.color} />
                ) : null}
              </>
            ),
          }}
          name="Fields"
          component={FieldsScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: 'Tarlalar',
            tabBarIcon: (tind) => (
              <>
                <Image source={Stables} style={{width: 25, height: 25}} />
                {tind.focused == true ? (
                  <Octicons name="primitive-dot" size={10} color={tind.color} />
                ) : null}
              </>
            ),
          }}
          name="Stables"
          component={StablesScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: 'Tarlalar',
            tabBarIcon: (tind) => (
              <>
                <Image source={Coop} style={{width: 25, height: 25}} />
                {tind.focused == true ? (
                  <Octicons name="primitive-dot" size={10} color={tind.color} />
                ) : null}
              </>
            ),
          }}
          name="coop"
          component={CoopsScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: 'Tarlalar',
            tabBarIcon: (tind) => (
              <>
                <Image source={Settings} style={{width: 25, height: 25}} />
                {tind.focused == true ? (
                  <Octicons name="primitive-dot" size={10} color={tind.color} />
                ) : null}
              </>
            ),
          }}
          name="settings"
          component={SettingsScreen}
        />
      </Tab.Navigator>
    </>
  );
};
export default Home;
