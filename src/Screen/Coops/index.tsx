import React from 'react';

import {SafeAreaView, FlatList, Text} from 'react-native';
import Header from '../../component/Header';

const Coops = () => {
  return (
    <SafeAreaView>
      <Header goBack={false} goBackIconColor={'#fff'} title={'Coops'} />

      <Text>Coop</Text>
    </SafeAreaView>
  );
};
export default Coops;
