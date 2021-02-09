import React, { useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, Dimensions, Image, InteractionManager } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Button } from '../components'
import { PokemonList } from '../domain'
import { usePokedex } from '../providers'
import { POKEMON_LOGO_URL } from '../Constants';

const screenWidth = Dimensions.get('window').width;

const HomeScreen = ({ navigation }) => {
  const { fetchPokemonList, data } = usePokedex()

  const onPressItem = (item) => {
    navigation.navigate('PokemonDetails', { id: item.id })
  }

  const renderListHeader = () => {
    return (
      <View style={styles.header}>
        <Image source={{ uri: POKEMON_LOGO_URL }} style={styles.logo} resizeMode='contain' />
      </View>
    )
  }

  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      fetchPokemonList()
    })
  }, [])

  return (
    <View
      style={styles.container}>
      {/* <StatusBar
        backgroundColor='translucent'
        barStyle="dark-content"
      /> */}
      <PokemonList
        data={data}
        onPressItem={onPressItem}
        ListHeaderComponent={renderListHeader}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f6f6f6',
    flex: 1,
    flexGrow: 1
  },
  header: {
    paddingVertical: 20
  },
  logo: {
    height: 80
  }
})

export default HomeScreen;