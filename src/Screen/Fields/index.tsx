import React from 'react';

import {SafeAreaView, FlatList, Text} from 'react-native';
import Header from '../../component/Header';
import FieldItem from '../../component/FieldItem';
import Styles from './styles';
const data = [
  {id: 1, title: 'FIELD 1', crop: 'rice', measure: '1400'},
  {id: 2, title: 'FIELD 2', crop: 'barley', measure: '2000'},
  {id: 3, title: 'FIELD 3', crop: 'wheat', measure: '3000'},
  {id: 4, title: 'FIELD 4', crop: 'cabbage', measure: '3500'},
  {id: 5, title: 'FIELD 5', crop: 'cabbage', measure: '3500'},
  {id: 6, title: 'FIELD 6', crop: 'cabbage', measure: '3500'},
  {id: 7, title: 'FIELD 7', crop: 'cabbage', measure: '3500'},
  {id: 8, title: 'FIELD 8', crop: 'cabbage', measure: '3500'},
  {id: 9, title: 'FIELD 9', crop: 'cabbage', measure: '3500'},
  {id: 10, title: 'FIELD 10', crop: 'cabbage', measure: '3500'},
  {id: 11, title: 'FIELD 11', crop: 'cabbage', measure: '3500'},
  {id: 12, title: 'FIELD 12', crop: 'cabbage', measure: '3500'},
];
const Fields = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <Header goBack={false} goBackIconColor={'#fff'} title={'Fields'} />

      <FlatList
        style={Styles.flatList}
        data={data}
        numColumns={2}
        renderItem={(item: any, index: any) => {
          return (
            <FieldItem
              title={item.item.title}
              crop={item.item.crop}
              measure={item.item.measure}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};
export default Fields;
