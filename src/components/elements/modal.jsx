/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Portal, Modal as ModalPaper, useTheme} from 'react-native-paper';
import Label from './label';
import {StyleSheet, View} from 'react-native';
import GeneralButton from './button';

const Modal = props => {
  const theme = useTheme();
  const {
    children,
    title,
    desc,
    lableCancle,
    lableSubmit,
    onPressCancle,
    onPressSubmit,
    ...rest
  } = props;

  return (
    <Portal>
      <ModalPaper
        contentContainerStyle={{
          backgroundColor: theme.colors.background,
          width: '90%',
          alignItems: 'center',
          justifyContent: 'center',
          marginHorizontal: 20,
          padding: 20,
          borderRadius: 15,
        }}
        {...rest}>
        {title && <Label label={title} style={styles.modalTitle} />}
        {desc && <Label label={desc} style={styles.modalDesc} />}

        <View style={styles.btnModalContainer}>
          {lableCancle && (
            <GeneralButton
              mode="outlined"
              labelBtn={lableCancle}
              style={styles.btnPopUp}
              onPress={onPressCancle}
            />
          )}
          {lableSubmit && (
            <GeneralButton
              mode="contained"
              labelBtn={lableSubmit}
              style={styles.btnPopUp}
              onPress={onPressSubmit}
            />
          )}
        </View>

        {children}
      </ModalPaper>
    </Portal>
  );
};

export default Modal;

const styles = StyleSheet.create({
  modalTitle: {fontWeight: 600, fontSize: 18},
  btnModalContainer: {marginTop: 40, flexDirection: 'row', gap: 10},
  btnPopUp: {flex: 1},
});
