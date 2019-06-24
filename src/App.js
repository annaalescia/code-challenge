import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import MainTabs from './components/TabsComponent/MainTabs';
import MainToolbar from './components/Toolbar';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <MainToolbar />
        <MainTabs />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
