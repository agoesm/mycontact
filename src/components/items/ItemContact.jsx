/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {List, useTheme} from 'react-native-paper';
import Label from '@components/elements/label';
import Colors from '@utils/colors';

const ItemContact = ({data, onPress}) => {
  const theme = useTheme();

  return (
    <TouchableOpacity
      testID="item-contact"
      onPress={onPress}
      activeOpacity={0.6}
      underlayColor={Colors.lightGrey}>
      <List.Item
        title={`${data.firstName} ${data.lastName}`}
        titleStyle={{color: theme.colors.text}}
        left={() =>
          data.photo === null || data.photo === 'N/A' ? (
            <View
              style={[
                styles.avatar2,
                {backgroundColor: theme.colors.disabled},
              ]}>
              <Label
                style={{fontSize: 20}}
                label={data.firstName.charAt(0).toUpperCase()}
              />
            </View>
          ) : (
            <Image style={styles.avatar} source={{uri: data.photo}} />
          )
        }
      />
    </TouchableOpacity>
  );
};

export default ItemContact;

const styles = StyleSheet.create({
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  avatar2: {
    width: 40,
    height: 40,
    borderRadius: 50,
    // backgroundColor: Colors.lightGrey,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
