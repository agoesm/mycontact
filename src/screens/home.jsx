/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import {responsiveScreenHeight} from 'react-native-responsive-dimensions';
import {ActivityIndicator, FAB, Searchbar} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import MainContainer from '@components/elements/main-container';
import Separator from '@components/elements/separator';
import ItemContact from '@components/items/ItemContact';
import Colors from '@utils/colors';
// import {dataContact} from '@utils/dummy';
import {sortContacts} from '@utils/helper';
import {fetchContact} from '@store/reducers/contactSlice';
import ErrorText from '@components/elements/errorText';
import AppBar from '@components/elements/appBar';
import {setDarkTheme, setDefaultTheme} from '@store/reducers/themeSlice';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.darkmode);
  const {data, status, error} = useSelector(state => state.contacts);
  // console.log('data contact =>', data.data);
  // console.log('status contact =>', status);
  // console.log('error contact =>', error);

  const [searchQuery, setSearchQuery] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  const refreshContacts = useCallback(() => {
    setRefreshing(true);
    dispatch(fetchContact()).finally(() => setRefreshing(false));
  }, [dispatch]);

  const filteredContacts = useMemo(() => {
    if (searchQuery === '') {
      // return sortContacts(dataContact);
      return sortContacts(data.data);
    }
    return data.data.filter(
      item =>
        item.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.lastName.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [data.data, searchQuery]);

  const onChangeSearch = query => {
    setSearchQuery(query);
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <MainContainer>
        <AppBar
          title="Contact"
          iconActionName={
            theme === false ? 'weather-night' : 'white-balance-sunny'
          }
          onPressAction={() =>
            theme === false
              ? dispatch(setDarkTheme())
              : dispatch(setDefaultTheme())
          }
        />

        <View style={styles.container}>
          <Searchbar
            placeholder="Search..."
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={styles.searchbar}
            inputStyle={{minHeight: 0}}
          />
          {status === 'loading' && refreshing ? (
            <ActivityIndicator
              style={styles.loading}
              color={Colors.primary}
              size="large"
            />
          ) : status === 'failed' ? (
            <ErrorText errValue={error} />
          ) : (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={filteredContacts}
              keyExtractor={item => item.id}
              ItemSeparatorComponent={<Separator />}
              renderItem={({item}) => (
                <ItemContact
                  data={item}
                  onPress={() => navigation.navigate('Detail', {item})}
                />
              )}
              refreshing={refreshing}
              onRefresh={refreshContacts}
              contentContainerStyle={{paddingBottom: 150}}
            />
          )}
        </View>
        <FAB
          icon="plus"
          color="white"
          style={styles.fab}
          onPress={() => navigation.navigate('Add')}
        />
      </MainContainer>
    </KeyboardAvoidingView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: responsiveScreenHeight(1.5),
  },
  searchbar: {
    height: responsiveScreenHeight(5),
    marginBottom: 16,
    borderRadius: 50,
    backgroundColor: Colors.lightGrey,
  },
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 10,
    borderRadius: 50,
    backgroundColor: Colors.primary,
  },
});
