import React from 'react'
import { Dimensions, StyleSheet, ScrollView, View, TextInput, Image } from 'react-native'
import { Chip, List } from 'react-native-paper'

import { Button, Card, Divider, IconButton, Text, TouchableRipple } from '../components'
import { POKEMON_LOGO_URL } from '../Constants'

const { width: screenWidth } = Dimensions.get('window')

const PokemonDetail = ({ data }) => {
  if (!data) {
    return <></>
  }

  const {
    name,
    height,
    weight,
    abilities,
    sprites,
    species,
    stats,
    types
  } = data

  const mainImageUri = sprites['other']['official-artwork']['front_default']
  // const statsTotalValue = stats.reduce((sum, stat) => sum + Number(stat['base_stat']), 0)
  // const statsTotalBarWidth = (statsTotalValue / stats.length).toFixed(0)

  const [expanded, setExpanded] = React.useState(true);

  const onPressAccordion = () => setExpanded(!expanded);

  return (
    <View>
      <Image
        source={{ uri: mainImageUri }}
        style={styles.artwork}
        resizeMode='contain'
      />
      <Divider />
      <View style={styles.types}>
        {types.map(type => <Chip key={type.slot} style={styles.type}>{type.type.name}</Chip>)}
      </View>
      <List.Section>
        <List.Accordion
          title="About"
          onPress={onPressAccordion}
        >
          <Item label='Species' value={species?.name} />
          <Item label='Height' value={height} />
          <Item label='Weight' value={weight} />
          <Item label='Abilities' value={abilities.map(ability => ability.ability.name).join(', ')} />
        </List.Accordion>

        <List.Accordion
          title="Base Stats"
          onPress={onPressAccordion}
        >
          {stats.map(stat => (
            <Stat key={stat.stat.name} label={stat.stat.name} value={stat['base_stat']} />
          ))}
        </List.Accordion>
      </List.Section>
    </View>
  );
}

const Item = ({ label, value }) => {
  return (
    <View style={styles.item}>
      <Text subhead style={styles.itemLabel} numberOfLines={1}>{label}</Text>
      <Text subhead style={styles.itemValue}>{value}</Text>
    </View>
  )
}

const Stat = ({ label, value }) => {
  return (
    <View style={styles.item}>
      <Text subhead style={styles.itemLabel} numberOfLines={1}>{label}</Text>
      <View style={styles.itemValue}>
        <Text subhead style={styles.statValue}>{value}</Text>
        <View style={styles.statBar}>
          <View style={[styles.statBarInner, { width: value }]} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  titleContainer: {
    paddingHorizontal: 16
  },
  artwork: {
    height: 320,
    width: screenWidth
  },
  types: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  type: {
    marginHorizontal: 4
  },
  item: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginVertical: 12
  },
  itemLabel: {
    flex: 1,
    opacity: 0.7
  },
  itemValue: {
    alignItems: 'center',
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  statValue: {
    textAlign: 'right',
    width: 30
  },
  statBar: {
    backgroundColor: '#d6d6d6',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 4,
    marginHorizontal: 16
  },
  statBarInner: {
    backgroundColor: '#000',
  }
});

export default PokemonDetail
