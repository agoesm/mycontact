import React from 'react';
import {Keyboard, StyleSheet, View} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import TextInput from '@components/elements/text-input';
import ErrorText from '@components/elements/errorText';
import GeneralButton from '@components/elements/button';
import {responsiveHeight} from 'react-native-responsive-dimensions';

const NewContactSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is Required'),
  lastName: Yup.string().required('Last name is Required'),
  age: Yup.string().required('Age is Required'),
  //   photo: Yup.string().required('Photo is Required'),
});

const FormAddEdit = ({getData, onSubmit, isLoading}) => {
  // console.log('getData =>', getData);

  return (
    <Formik
      initialValues={{
        firstName: getData?.firstName || '',
        lastName: getData?.lastName || '',
        age: getData?.age?.toString() || '',
        photo: getData?.photo || '',
      }}
      onSubmit={value => {
        Keyboard.dismiss(); // close keyboard when submit pressed
        onSubmit(value);
        // console.log('value =>', value);
      }}
      validationSchema={NewContactSchema}>
      {({
        values,
        errors,
        touched,
        handleChange,
        setFieldTouched,
        isValid,
        handleSubmit,
      }) => (
        <View style={styles.formContainer}>
          <TextInput
            mode="outlined"
            placeholder="Input first name..."
            label="First Name :"
            style={styles.txtInpt}
            theme={{roundness: 15}}
            value={values.firstName}
            onChangeText={handleChange('firstName')}
            onBlur={() => setFieldTouched('firstName')}
          />
          {touched.firstName && errors.firstName && (
            <ErrorText errValue={errors.firstName} />
          )}
          <TextInput
            mode="outlined"
            placeholder="Input last name..."
            label="Last Name :"
            style={styles.txtInpt}
            theme={{roundness: 15}}
            value={values.lastName}
            onChangeText={handleChange('lastName')}
            onBlur={() => setFieldTouched('lastName')}
          />
          {touched.lastName && errors.lastName && (
            <ErrorText errValue={errors.lastName} />
          )}
          <TextInput
            mode="outlined"
            placeholder="Input age..."
            label="Age :"
            style={styles.txtInpt}
            theme={{roundness: 15}}
            keyboardType="numeric"
            value={values.age}
            onChangeText={handleChange('age')}
            onBlur={() => setFieldTouched('age')}
          />
          {touched.age && errors.age && <ErrorText errValue={errors.age} />}
          <GeneralButton
            mode="contained"
            labelBtn="Save Contact"
            style={styles.btn}
            onPress={handleSubmit}
            // onPress={() => {
            //   onSubmit();
            // }}
            loading={isLoading}
            disabled={!isValid || isLoading}
          />
        </View>
      )}
    </Formik>
  );
};

export default FormAddEdit;

const styles = StyleSheet.create({
  formContainer: {paddingHorizontal: 20},
  txtInpt: {marginTop: responsiveHeight(2)},
  btn: {borderRadius: 15, marginTop: responsiveHeight(8)},
});
