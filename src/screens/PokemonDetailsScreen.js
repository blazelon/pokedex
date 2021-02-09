import React, { useEffect, useState } from 'react';
import { StyleSheet, View, StatusBar, Dimensions, ScrollView, InteractionManager } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { IconButton, Text } from '../components'
import { PokemonDetail } from '../domain'
import { usePokedex } from '../providers'

const { width: screenWidth } = Dimensions.get('window')

const PokemonDetailsScreen = ({ route }) => {
  const navigation = useNavigation()
  const { fetchPokemon } = usePokedex()

  const onPressHeaderBackButton = () => {
    navigation.goBack()
  }

  const [data, setData] = useState()

  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      fetchPokemon(route.params.id)
        .then(setData)
    })
  }, [route.params])

  return (
    <>
      <StatusBar
        backgroundColor='transparent'
        barStyle="dark-content"
      />
      <ScrollView
        // stickyHeaderIndices={[0]}
        style={styles.container}
      >
        <View style={styles.header}>
          <IconButton
            icon="arrow-left"
            size={24}
            onPress={onPressHeaderBackButton}
          />
          <Text title1 bold>{data?.name}</Text>
          <View style={styles.id}>
            {data && <Text body>{`#${data?.id}`}</Text>}
          </View>
        </View>
        <PokemonDetail data={data} />
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f6f6f6',
    flex: 1,
    flexGrow: 1
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: screenWidth
  },
  id: {
    alignItems: 'flex-end',
    paddingRight: 16,
    width: 60
  }
})

export default PokemonDetailsScreen;