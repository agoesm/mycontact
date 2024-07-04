import React from 'react';
// import {Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
// import {defaultTheme, darkTheme} from '@utils/theme';
import Routers from '@routes/index';
import {persistor, store} from '@store/index';

const App = () => {
  // const theme = useSelector(state => state.theme.darkmode);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <PaperProvider theme={theme === true ? darkTheme : defaultTheme}> */}
        <Routers />
        {/* </PaperProvider> */}
      </PersistGate>
    </Provider>
  );
};

export default App;
