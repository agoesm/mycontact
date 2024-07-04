import {StyleSheet, View} from 'react-native';
import React from 'react';
import {useTheme} from 'react-native-paper';

const MainContainer = ({children, style}) => {
  const theme = useTheme();

  return (
    <View
      testID="main-container"
      style={[
        {backgroundColor: theme.colors.background},
        styles.container,
        style,
      ]}>
      {children}
    </View>
  );
};

export default MainContainer;

const styles = StyleSheet.create({
  container: {flex: 1},
});
