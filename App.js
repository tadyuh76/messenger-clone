import React from 'react';
import { ThemeProvider } from './ThemeContext';
import RootNavigator from './navigations';


export default function App() {
  return (
    <ThemeProvider>
      <RootNavigator />
    </ThemeProvider>
  );
}
