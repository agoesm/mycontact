import React from 'react';
import {ActivityIndicator, StyleSheet, Text} from 'react-native';
import {Button as BtnPaper} from 'react-native-paper';
import {
  responsiveScreenFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Colors from '@utils/colors';

const GeneralButton = ({style, labelBtn, loading, ...rest}) => {
  return (
    <BtnPaper
      testID="button"
      style={[styles.btn, style]}
      contentStyle={styles.contentBtn}
      {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color={Colors.primary} />
      ) : (
        <Text style={styles.txt}>{labelBtn}</Text>
      )}
    </BtnPaper>
  );
};

export default GeneralButton;

const styles = StyleSheet.create({
  btn: {borderRadius: 10},
  contentBtn: {padding: responsiveWidth(1.4)},
  txt: {
    fontWeight: '700',
    fontSize: responsiveScreenFontSize(2.3),
    letterSpacing: 1,
  },
});
