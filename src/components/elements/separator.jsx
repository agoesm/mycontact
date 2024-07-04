/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useTheme} from 'react-native-paper';

const Separator = ({style}) => {
  const themes = useTheme();
  return (
    <View
      style={[
        styles.separator,
        {backgroundColor: themes.colors.disabled, opacity: 0.7},
        style,
      ]}
    />
  );
};

export default Separator;

const styles = StyleSheet.create({
  separator: {
    height: 1,
    width: '100%',
  },
});
