import React, {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {deleteContact, fetchContact} from '@store/reducers/contactSlice';
import MainContainer from '@components/elements/main-container';
import ItemActionContact from '@components/items/ItemActionContact';
import Separator from '@components/elements/separator';
import AppBar from '@components/elements/appBar';
import Label from '@components/elements/label';
import Modal from '@components/elements/modal';
import Colors from '@utils/colors';
import {actionBtnContact} from '@utils/dummy';

const DetailScreen = ({route, navigation}) => {
  const data = route.params.item || {};
  const dispatch = useDispatch();
  const {status, error} = useSelector(state => state.contacts);

  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const [popUpData, setPopUpData] = useState({
    title: null,
    desc: null,
    lableCancle: null,
    lableSubmit: null,
    onPressCancle: () => {},
    onPressSubmit: () => {},
    onDismiss: null,
  });

  const handleDeleteContact = async id => {
    // console.log(id)
    hideModal();
    dispatch(deleteContact(id));

    if (status === 'succeeded') {
      setPopUpData({
        title: 'Deleted',
        desc: 'Contact deleted successfully!',
        lableSubmit: 'Ok',
        onPressSubmit: () => {
          hideModal();
          navigation.goBack();
          dispatch(fetchContact());
        },
        onDismiss: showModal,
      });
      showModal();
    } else if (status === 'failed') {
      setPopUpData({
        title: 'Somthig Wrong',
        desc: error,
        lableSubmit: 'Ok',
        onPressSubmit: () => {
          hideModal();
          navigation.goBack();
          dispatch(fetchContact());
        },
        onDismiss: showModal,
      });
      showModal();
    }
  };

  return (
    <MainContainer>
      <AppBar
        mode="primary"
        title="Contact"
        iconActionName="circle-edit-outline"
        titleIconColors={Colors.white}
        onPressBack={() => {
          navigation.pop();
        }}
        onPressAction={() => navigation.navigate('Edit', {data})}
      />
      <View style={styles.container}>
        <View style={styles.photoContainer}>
          {data.photo === null || data.photo === 'N/A' ? (
            <View style={styles.avatar2}>
              <MaterialIcons name="person" size={45} color={Colors.darkGrey} />
            </View>
          ) : (
            <Image style={styles.avatar} source={{uri: data.photo}} />
          )}
          <Label
            label={`${data.firstName} ${data.lastName}`}
            style={styles.nameLable}
          />
        </View>

        <MainContainer style={styles.sheets}>
          {/* actionBtnContainer */}
          <View style={styles.actionBtnContainer}>
            {actionBtnContact.map((item, index) => (
              <ItemActionContact
                key={index}
                icon={item.icon}
                name={item.name}
              />
            ))}
          </View>

          <View style={styles.listDataContainer}>
            <Label label="Age :" style={styles.colLable} />
            <Label label={data.age} style={styles.valueLable} />
            <Separator style={styles.separator} />

            <Label label="Mobile :" style={styles.colLable} />
            <Label label="+62 0923128931" style={styles.valueLable} />
            <Separator style={styles.separator} />

            <Label label="Email :" style={styles.colLable} />
            <Label
              style={styles.valueLable}
              label={`${data.firstName.toLowerCase()}${data.lastName.toLowerCase()}@gmail.com`}
            />
            <Separator style={styles.separator} />

            <TouchableOpacity
              style={styles.deleteContainer}
              onPress={() => {
                showModal();
                setPopUpData({
                  title: 'Delete this contact ?',
                  lableCancle: 'Cancel',
                  lableSubmit: 'Delete',
                  onPressCancle: hideModal,
                  onPressSubmit: () => handleDeleteContact(data.id),
                  onDismiss: hideModal,
                });
              }}>
              <Label label="Delete Contact" style={styles.deleteLable} />
            </TouchableOpacity>
          </View>
        </MainContainer>
      </View>

      {/* pop up */}
      <Modal
        title={popUpData.title}
        desc={popUpData.desc}
        visible={visible}
        onDismiss={popUpData.onDismiss}
        lableCancle={popUpData.lableCancle}
        lableSubmit={popUpData.lableSubmit}
        onPressCancle={popUpData.onPressCancle}
        onPressSubmit={popUpData.onPressSubmit}
      />
    </MainContainer>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.primary},
  photoContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: responsiveWidth(25),
    height: responsiveWidth(25),
    borderRadius: responsiveWidth(30),
    marginBottom: 10,
  },
  avatar2: {
    width: responsiveWidth(25),
    height: responsiveWidth(25),
    borderRadius: responsiveWidth(30),
    backgroundColor: Colors.lightGrey,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  sheets: {
    marginTop: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  nameLable: {
    color: Colors.white,
    fontWeight: '700',
    fontSize: responsiveFontSize(3),
  },
  actionBtnContainer: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 35,
  },
  listDataContainer: {marginTop: 30, paddingHorizontal: 20},
  separator: {marginVertical: 20},
  colLable: {color: Colors.darkGrey, marginBottom: 5},
  valueLable: {fontWeight: 600},
  deleteContainer: {width: '100%', height: responsiveHeight(5)},
  deleteLable: {color: Colors.red, opacity: 0.7, fontWeight: 700, fontSize: 16},
});
