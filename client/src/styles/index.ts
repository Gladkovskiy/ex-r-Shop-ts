import {extendTheme} from '@chakra-ui/react'
import {buttonStyle} from './button'
import {inputStyle} from './input'
import {textStyle} from './text'
import {modalStyle} from './modal'
import {tooltipStyle} from './tooltip'
import {headingStyle} from './heading'

export const theme = extendTheme({
  components: {
    Button: buttonStyle,
    Input: inputStyle,
    Text: textStyle,
    Modal: modalStyle,
    Tooltip: tooltipStyle,
    Heading: headingStyle,
  },
  styles: {
    global: {
      'html, body': {
        backgroundColor: '#E8EDE7',
        // backgroundImage: telegram_BG,
      },
    },
  },
})
