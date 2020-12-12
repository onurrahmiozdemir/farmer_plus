import React from 'react';

import {SafeAreaView, FlatList, Text} from 'react-native';
import Header from '../../component/Header';
import Styles from './styles';
const Dashboard = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <Header goBack={false} goBackIconColor={'#fff'} title={'Dashboard'} />

      <Text>Dashboard</Text>
    </SafeAreaView>
  );
};
export default Dashboard;
