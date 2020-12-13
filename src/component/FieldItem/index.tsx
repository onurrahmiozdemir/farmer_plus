import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import Styles from './styles';
const FieldItem = (options: any) => {
  return (
    <View style={Styles.container}>
      <TouchableOpacity style={Styles.item}>
        <View style={Styles.textContainer}>
          <Text style={Styles.title}>{options.title}</Text>
          <Text style={Styles.subTitle}>({options.crop})</Text>
          <View style={Styles.row}>
            <Text style={Styles.subTitle}>{options.measure}</Text>
            <View style={Styles.left10}>
              <Text style={Styles.twoText}>2</Text>
              <Text style={Styles.mText}>m</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FieldItem;
