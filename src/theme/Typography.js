import { human, systemWeights } from 'react-native-typography'

export const TEXT_NORMAL = {
  ...systemWeights.regular,
  // fontFamily: 'Rubik-Regular'
}

export const TEXT_SEMIBOLD = {
  ...systemWeights.semibold,
  // fontFamily: 'Rubik-Medium'
}

export const TEXT_BOLD = {
  ...systemWeights.bold,
  // fontFamily: 'Rubik-Bold'
}

export const TEXT_INPUT = {
  ...human.body,
  ...systemWeights.regular,
  // fontFamily: 'Rubik-Regular'
}

export const fonts = {
  default: {
    regular: {
      fontFamily: TEXT_NORMAL.fontFamily,
      fontWeight: 'normal'
    },
    medium: {
      fontFamily: TEXT_SEMIBOLD.fontFamily,
      fontWeight: 'normal'
    },
    light: {
      fontFamily: TEXT_NORMAL.fontFamily,
      fontWeight: 'normal'
    },
    thin: {
      fontFamily: TEXT_NORMAL.fontFamily,
      fontWeight: 'normal'
    }
  }
}
