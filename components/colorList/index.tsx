import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './colorListStyle';
import { ColorListProps } from './colorListProps';

export const ColorList = ({ name, id, color, types, onPress }: ColorListProps) => {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: color }]} onPress={onPress}>
      <View style={styles.numberContainer}>
        <Text style={styles.name}>{`#${String(id).padStart(3, '0')}`}</Text>
      </View>
      <View style={styles.content}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.types}>{types.join(', ')}</Text>
      </View>
    </TouchableOpacity>
  );
};