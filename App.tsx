import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { Home } from './src/screens/Home';
import { Fragment } from 'react';

export default function App() {
  return (
    <Fragment>
      <StatusBar/>
      <Home/>
    </Fragment>
  );
}
