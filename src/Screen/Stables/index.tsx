import React from 'react';

import {SafeAreaView, FlatList, Text} from 'react-native';
import Header from '../../component/Header';

const Stables = () => {
  return (
    <SafeAreaView>
      <Header goBack={false} goBackIconColor={'#fff'} title={'Stables'} />

      <Text>Stables</Text>
    </SafeAreaView>
  );
};
export default Stables;
