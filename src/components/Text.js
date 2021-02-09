import React from 'react'
import { Text as RNText } from 'react-native'
import { human, iOSColors } from 'react-native-typography'

import { TEXT_BOLD, TEXT_NORMAL, TEXT_SEMIBOLD, useTheme } from '../theme'

const Text = ({ title1, title2, title3, headline, body, callout, subhead, footnote, caption1, caption2, normal, bold, semibold, white, children, style, ...rest }) => {
  const { colors } = useTheme()

  let type = human.bodyObject
  let thickness = TEXT_NORMAL
  let color = colors.text

  if (title1) {
    type = human.title1Object
  }

  if (title2) {
    type = human.title2Object
  }

  if (title3) {
    type = human.title3Object
  }

  if (headline) {
    type = human.headlineObject
  }

  if (body) {
    type = human.bodyObject
  }

  if (callout) {
    type = human.calloutObject
  }

  if (subhead) {
    type = human.subheadObject
  }

  if (footnote) {
    type = human.footnoteObject
  }

  if (caption1) {
    type = human.caption1Object
  }

  if (caption2) {
    type = human.caption2Object
  }

  if (semibold) {
    thickness = TEXT_SEMIBOLD
  }

  if (bold) {
    thickness = TEXT_BOLD
  }

  if (white) {
    color = iOSColors.white
  }

  const styles = [
    { ...type, ...thickness },
    { color },
    { textAlign: 'left' }
  ]

  return (
    <RNText
      {...rest}
      style={[styles, style]}
    >
      {children}
    </RNText>
  )
}

export default Text