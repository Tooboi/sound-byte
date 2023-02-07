import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { BoxStyles as Box } from './components/BoxStyles';

const theme = {
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true,
  },
  colors: {
    grey: {
      50: '#f9f9f9',
      100: '#f3f3f3',
      200: '#eaeaea',
      300: '#dadada',
      400: '#b7b7b7',
      500: '#979797',
      600: '#6f6f6f',
      700: '#5b5b5b',
      800: '#3c3c3c',
      900: '#1c1c1c',
    },
    primary: {
      50: '#e7f1ff',
      100: '#c7ddfe',
      200: '#a6c8fd',
      300: '#89b3fa',
      400: '#7aa2f7',
      500: '#7392f3',
      600: '#6e83e3',
      700: '#6771cf',
      800: '#605fbb',
      900: '#55409a',
    },
    secondary: {
      50: '#fdf4df',
      100: '#fae2af',
      200: '#f7cf7a',
      300: '#f4bc42',
      400: '#f3ad0a',
      500: '#f39f00',
      600: '#ef9300',
      700: '#eb8300',
      800: '#e57400',
      900: '#de5a00',
    },
    purple: {
      50: '#f7e9fd',
      100: '#eac7fb',
      200: '#dea1fa',
      300: '#cf7af7',
      400: '#c35af3',
      500: '#b741ec',
      600: '#a53ee5',
      700: '#8e39dc',
      800: '#7936d4',
      900: '#5030c5',
    },
    pink: {
      50: '#fee0e8',
      100: '#fbb0c7',
      200: '#f77aa2',
      300: '#ef3d7c',
      400: '#e70061',
      500: '#df0047',
      600: '#cf0045',
      700: '#ba0042',
      800: '#a60040',
      900: '#82003c',
    },
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode('grey.50', 'grey.900')(props),
        color: mode('grey.900', 'grey.200')(props),
      },
    }),
  },
  components: {
    Box,
  },
};

export default extendTheme(theme);
