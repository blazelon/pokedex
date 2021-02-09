import React, { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { Card } from 'react-native-paper'

import { Button, Image, Text, TouchableRipple } from '../components'
import { useTheme } from '../theme';

const PokemonListItem = ({ data, onPress = () => { } }) => {
  const { colors } = useTheme()

  const _onPress = () => {
    onPress(data)
  }

  const { name, image } = data

  return (
    // <TouchableRipple onPress={_onPress} style={styles.root}>
    <Card onPress={_onPress} elevation={12} style={styles.root}>
      <Card.Content>
        <Text body bold numberOfLines={1}>
          {name}
        </Text>
      </Card.Content>
      <Card.Cover
        source={{ uri: image }}
        style={[styles.content, { backgroundColor: colors.surface }]}
      />
    </Card>
    // </TouchableRipple>
  )
}

const styles = StyleSheet.create({
  root: {
    borderRadius: 20,
    flex: 1,
    marginHorizontal: 8,
    marginVertical: 8,
    overflow: 'hidden'
  },
  image: {
  }
});

export default PokemonListItem
