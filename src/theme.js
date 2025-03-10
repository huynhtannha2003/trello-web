import { cyan, deepOrange, orange, teal } from '@mui/material/colors'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
const theme = extendTheme({
  cssVariables: true,
  trelloCustom:{
    appBarHeight: '48px',
    boardHeight: '58px'
  },
  colorSchemes:{
    light:{
      palette:{
        primary:teal,
        secondary: deepOrange
      }
    },
    dark:{
      palette:{
        primary:cyan,
        secondary: orange
      }
    }
  }
})

export default theme