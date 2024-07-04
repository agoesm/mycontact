import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {useTheme} from 'react-native-paper';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const ErrorText = ({errValue}) => {
  const theme = useTheme();

  return (
    <Text style={[styles.txt, {color: theme.colors.error}]}>{errValue}</Text>
  );
};

export default ErrorText;

const styles = StyleSheet.create({
  txt: {
    fontSize: responsiveFontSize(2),
    marginLeft: responsiveWidth(1),
    marginTop: responsiveWidth(1),
  },
});
