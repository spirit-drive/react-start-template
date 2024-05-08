import React, { FC, useState, createContext, useEffect, useContext } from 'react';
import '../layout/layout.css';
import { Route } from 'react-router';
import OperationScreen from '../../screens/operationScreen/operationScreen';
import { ProfileScreen } from '../../screens/profileScreen/profileScreen';
import { RouterProvider } from './provider/RouterProvider';
import { CommonScreen } from '../../screens/commonScreen/commonScreen';
import { CreateOperationForm } from '../../screens/operationScreen/ui/create/createOperationForm';
import { Modal } from '../modal/modal';
import { AuthProvider } from '../../components/layout/provider/AuthProvider';
import { Provider } from 'react-redux';
import { store } from '../../store/configureStore';
import { AuthScreen } from '../../screens/authScreen/authScreen';
import { Client } from 'src/client/Client';
import { RegScreen } from 'src/screens/authScreen/regScreen';
import { OperationProvider } from '../operationForms/provider/OperationProvider';

export interface layoutProps {
  prop?: string;
}

const ThemeContext = createContext(null);

export const Layout: FC = () => {
  const theme = useContext(ThemeContext);
  return (
    <Provider store={store}>
      <Client>
        <ThemeContext.Provider value={theme}>
          <AuthProvider>
            <OperationProvider>
              <RouterProvider>
                <Route path="" element={<AuthScreen />} />
                <Route path="/regustration" element={<RegScreen />} />
                <Route path="/" element={<CommonScreen />}>
                  <Route path="profile" element={<ProfileScreen />} />
                  <Route path="operations" element={<OperationScreen />} />
                  <Route path="operations/add" element={<Modal>{<CreateOperationForm />}</Modal>} />
                </Route>
              </RouterProvider>
            </OperationProvider>
          </AuthProvider>
        </ThemeContext.Provider>
      </Client>
    </Provider>
  );
};

export default ThemeContext;
