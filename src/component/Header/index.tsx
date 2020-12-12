import React, {FC} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Styles from './styles';
const Header: FC<any> = (options: any) => {
  return (
    <View style={Styles.container}>
      {options.goBack ? (
        <TouchableOpacity style={Styles.goBackButton}>
          <Ionicons
            onPress={() => options.goBackGo}
            name="chevron-back"
            size={20}
            color={options.goBackIconColor}
          />
        </TouchableOpacity>
      ) : null}
      {options.title ? (
        <View style={Styles.titleContainer}>
          <Text style={Styles.logoText}>{options.title}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default Header;
