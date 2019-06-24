import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  typography: {
    fontFamily:
      '"Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    fontWeightRegular: 300
  },
  palette: {
    primary: { main: '#14B9F1', contrastText: '#FFF' },
    secondary: { main: '#1D2935', contrastText: '#FFF' },
    text: { primary: 'rgba(0, 0, 0, .9 )', secondary: 'rgba(0,0,0,.5)' }
  }
});
