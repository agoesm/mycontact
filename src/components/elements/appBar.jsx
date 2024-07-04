/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Appbar, useTheme} from 'react-native-paper';
import {responsiveScreenHeight} from 'react-native-responsive-dimensions';
// import {useSelector} from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const AppBar = ({
  onPressBack,
  onPressAction,
  styleTitle,
  title,
  mode,
  titleIconColors,
  iconActionName,
}) => {
  // const isDarkMode = useSelector(state => state.theme.darkmode);
  const theme = useTheme();

  return (
    <Appbar.Header
      style={
        mode === 'primary'
          ? [styles.mode1, {backgroundColor: theme.colors.primary}]
          : [styles.mode2, {backgroundColor: theme.colors.background}]
      }>
      {onPressBack && (
        <Appbar.BackAction
          onPress={onPressBack}
          color={titleIconColors || theme.colors.text}
          // color={isDarkMode === true ? theme.colors.accent : theme.colors.text}
        />
      )}
      <Appbar.Content
        title={title}
        titleStyle={[
          styles.titleHead,
          {color: titleIconColors || theme.colors.text},
        ]}
        style={styleTitle}
      />
      {styleTitle && <View style={styles.blankView} />}
      {onPressAction && (
        <Appbar.Action
          icon={() => (
            <MaterialCommunityIcons
              name={iconActionName}
              size={26}
              color={titleIconColors || theme.colors.text}
            />
          )}
          animated={false}
          onPress={onPressAction}
        />
      )}
    </Appbar.Header>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  mode1: {height: responsiveScreenHeight(7)},
  mode2: {height: responsiveScreenHeight(7)},
  titleHead: {
    fontWeight: '700',
    letterSpacing: 1.5,
  },
  blankView: {
    width: 24,
    height: 24,
    marginRight: 20,
  },
});
