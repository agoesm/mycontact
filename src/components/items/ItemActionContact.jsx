import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from '@utils/colors';
import Label from '@components/elements/label';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {useTheme} from 'react-native-paper';

const ItemActionContact = ({icon, name}) => {
  const theme = useTheme();

  return (
    <View style={styles.itemActionBtn}>
      <TouchableOpacity
        style={styles.actionBtn}
        activeOpacity={0.6}
        underlayColor={Colors.mediumGrey}>
        <MaterialIcons name={icon} size={24} color={Colors.white} />
      </TouchableOpacity>
      <Label label={name} style={{color: theme.colors.text}} />
    </View>
  );
};

export default ItemActionContact;

const styles = StyleSheet.create({
  itemActionBtn: {
    alignItems: 'center',
    flexDirection: 'column',
    gap: 5,
  },
  actionBtn: {
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    width: responsiveWidth(11),
    height: responsiveWidth(11),
    borderRadius: responsiveWidth(20),
  },
});
