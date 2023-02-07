// import { defineStyleConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
export const BoxStyles = {
  // Styles for the base style
  baseStyle: {},
  // Styles for the size variations
  sizes: {},
  // Styles for the visual style variations
  variants: {
    primary: (props) => ({
      bg: mode('grey.900', 'primary.200')(props),
      color: "white"
    }
  ),
},
  // The default `size` or `variant` values
  defaultProps: {},
}
