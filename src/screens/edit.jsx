/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Alert,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import MainContainer from '@components/elements/main-container';
import AppBar from '@components/elements/appBar';
import FormAddEdit from '@components/forms/formAdd';
import {useDispatch} from 'react-redux';
import {editContact, fetchContact} from '@store/reducers/contactSlice';

const dataPhotoUrl =
  'https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg';

const EditScreen = ({route, navigation}) => {
  const datas = route.params.data || {};
  // console.log(datas);

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleEditContact = async payload => {
    setLoading(true);
    try {
      const newPayload = {
        ...payload,
        age: Number(payload.age),
        photo: payload.photo || dataPhotoUrl,
        id: datas.id,
      };
      // console.log('newPayload =>', newPayload);
      dispatch(editContact(newPayload));

      setLoading(false);
      Alert.alert('Success', 'Contact added successfully!', [
        {
          text: 'OK',
          onPress: () => {
            navigation.popToTop();
            dispatch(fetchContact());
          },
        },
      ]);
    } catch (errors) {
      setLoading(false);
      Alert.alert('Error', errors.message, [{text: 'OK'}]);
    }
  };

  return (
    <MainContainer>
      <AppBar
        title="Edit Contact"
        styleTitle={{alignItems: 'center'}}
        onPressBack={() => {
          navigation.pop();
        }}
      />

      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <FormAddEdit
            getData={datas || {}}
            onSubmit={value => handleEditContact(value)}
            isLoading={loading}
          />
        </View>
      </TouchableWithoutFeedback>
    </MainContainer>
  );
};

export default EditScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
});
