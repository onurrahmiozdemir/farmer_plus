import React from 'react';

import {SafeAreaView, FlatList, Text} from 'react-native';
import Header from '../../component/Header';

const Dashboard = () => {
  return (
    <SafeAreaView>
      <Header goBack={false} goBackIconColor={'#fff'} title={'Dashboard'} />

      <Text>Dashboard</Text>
    </SafeAreaView>
  );
};
export default Dashboard;
