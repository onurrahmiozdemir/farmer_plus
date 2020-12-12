import React from 'react';

import {SafeAreaView, FlatList, Text} from 'react-native';
import Header from '../../component/Header';

const Settings = () => {
  return (
    <SafeAreaView>
      <Header goBack={false} goBackIconColor={'#fff'} title={'Settings'} />

      <Text>Settings</Text>
    </SafeAreaView>
  );
};
export default Settings;
