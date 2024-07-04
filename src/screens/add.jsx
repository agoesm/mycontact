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
import {addContact, fetchContact} from '@store/reducers/contactSlice';

const dataPhotoUrl =
  'https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg';

const AddScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  // console.log('status contact =>', status);
  // console.log('error contact =>', error);

  const handleAddContact = async payload => {
    setLoading(true);
    try {
      const newContact = {
        ...payload,
        age: Number(payload.age),
        photo: dataPhotoUrl,
      };
      // console.log('newContact =>', newContact);
      dispatch(addContact(newContact));

      setLoading(false);
      Alert.alert('Success', 'Contact added successfully!', [
        {
          text: 'OK',
          onPress: () => {
            navigation.goBack();
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
        title="New Contact"
        styleTitle={{alignItems: 'center'}}
        onPressBack={() => {
          navigation.pop();
        }}
      />

      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <FormAddEdit
            onSubmit={value => handleAddContact(value)}
            isLoading={loading}
          />
        </View>
      </TouchableWithoutFeedback>
    </MainContainer>
  );
};

export default AddScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
});
