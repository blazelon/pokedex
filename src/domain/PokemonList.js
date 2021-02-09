import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import PokemonListItem from './PokemonListItem'

const PokemonList = ({ data = [], onPressItem = () => { }, ...rest }) => {
  if (data.length === 0) {
    return <></>
  }
  // return <></>

  return (
    <FlatList
      data={data}
      renderItem={({ item, index }) => (
        <PokemonListItem data={item} onPress={onPressItem} />
      )}
      keyExtractor={(item, index) => item.id}
      numColumns={2}
      contentContainerStyle={styles.container}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 8
  }
});

export default PokemonList
