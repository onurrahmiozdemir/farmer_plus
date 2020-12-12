import React from 'react';

import {SafeAreaView, FlatList, Text} from 'react-native';
import Header from '../../component/Header';

const Fields = () => {
  return (
    <SafeAreaView>
      <Header goBack={false} goBackIconColor={'#fff'} title={'Fields'} />
      <Text>Fields</Text>
    </SafeAreaView>
  );
};
export default Fields;
