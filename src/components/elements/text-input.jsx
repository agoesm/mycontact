import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput as TxtInptPaper, useTheme} from 'react-native-paper';
import {
  responsiveFontSize,
  // responsiveScreenHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Label from './label';
import colors from '@utils/colors';

const TextInput = props => {
  const {label, left, right, icoPress, style, styleCore, ...rest} = props;
  const theme = useTheme();

  return (
    <View style={style}>
      {label && <Label label={label} style={styles.lbl} />}
      <TxtInptPaper
        testID="text-input"
        placeholderTextColor={theme.colors.placeholder}
        textColor={theme.colors.text}
        autoCapitalize={false}
        theme={{roundness: 10}}
        outlineColor={theme.colors.disabled}
        left={left && <TxtInptPaper.Icon icon={left} disabled />}
        right={
          right && (
            <TxtInptPaper.Icon
              icon={right}
              onPress={icoPress}
              iconColor={colors.primary}
            />
          )
        }
        style={[
          {backgroundColor: theme.colors.background},
          styles.txtInpt,
          styleCore,
        ]}
        {...rest}
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  lbl: {fontSize: responsiveFontSize(2), marginBottom: 5},
  txtInpt: {
    // height: responsiveScreenHeight(6),
    paddingHorizontal: responsiveWidth(0.5),
  },
});
