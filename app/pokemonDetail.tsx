import { View, Text, StyleSheet, ActivityIndicator, Image, ViewStyle, ImageStyle, TextStyle } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router';
import { fetchPokemonDetails } from '@/services/api';
import { Colors } from '@/constants/Colors';
import { statColor, typeColors } from '@/constants/typeColors';

type PokemonType = keyof typeof typeColors;
type PokemonStats = keyof typeof statColor;
type StatName = 'hp' | 'attack' | 'defense' | 'speed' | 'specialattack' | 'specialdefense';

interface Pokemon {
  name: string;
  weight: number;
  height: number;
  sprites: {
    front_default: string;
  };
  types: Array<{
    type: {
      name: PokemonType;
    };
  }>;
  stats: Array<{
    base_stat: number;
    stat: {
      name: PokemonStats;
    };
  }>;
}

const Create = () => {
  const { id } = useLocalSearchParams();
  const [pokemonData, setPokemonData] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPokemonDetails(Number(id)).then(data => {
      setPokemonData(data);
      setLoading(false);
    });
  }, [id]);

  if (loading || !pokemonData) {
    return <ActivityIndicator size="large" color={Colors.primaryColor} style={styles.loader} />;
  }

  return (
    <View style={styles.container}>
      <View style={{position: 'absolute', left: '6%', top: '5%', zIndex: 999999999}}>
        <Text style={styles.name}>Pokémon</Text>
      </View>
      <View style={{position: 'absolute', right: '6%', top: '5%', zIndex: 999999999}}>
        <Text style={styles.name}>{`#${String(id).padStart(3, '0')}`}</Text>
      </View>
      <View style={[styles.header, { backgroundColor: typeColors[pokemonData.types[0].type.name] || '#ccc' }]}> 
        <Image source={{ uri: pokemonData.sprites.front_default }} style={styles.image} />
      </View>
      <Text style={styles.name}>{pokemonData.name}</Text>
      <View style={styles.typesContainer}>
        {pokemonData.types.map(t => (
          <View key={t.type.name} style={[{ backgroundColor: typeColors[t.type.name] || '#ccc' }, {paddingHorizontal: 10, paddingVertical: 5, borderRadius: 10, marginHorizontal: 5, width: 85, alignItems: 'center'}]}>
            <Text style={styles.type}>{t.type.name}</Text>
          </View>
        ))}
      </View>
      <View style={styles.statsContainer}>
        <Text style={styles.stat}>Weight: {pokemonData.weight / 10} kg</Text>
        <Text style={styles.stat}>Height: {pokemonData.height / 10} m</Text>
      </View>
      <Text style={styles.sectionTitle}>Base Stats</Text>
      {pokemonData.stats.map(stat => (
        <View key={stat.stat.name} style={styles.statBarContainer}>
          <Text style={styles.statLabel}>{stat.stat.name.toUpperCase()}</Text>
          <View style={styles.statBarBackground}>
            <View style={[styles.statBar, { width: `${(stat.base_stat / 255) * 100}%`, backgroundColor: statColor[stat.stat.name.replace('-', '') as StatName] || '#A8A878' }]} />
          </View>
        </View>
      ))}
    </View>
  )
}

interface PokemonDetailStyle {
  container: ViewStyle;
  header: ViewStyle;
  image: ImageStyle;
  name: TextStyle;
  typesContainer: ViewStyle;
  type: TextStyle;
  statsContainer: ViewStyle;
  stat: TextStyle;
  sectionTitle: TextStyle;
  statBarContainer: ViewStyle;
  statLabel: TextStyle;
  statBarBackground: ViewStyle
  statBar: ViewStyle;
  loader: ViewStyle;
}

const styles = StyleSheet.create<PokemonDetailStyle>({
  container: { flex: 1, alignItems: 'center', backgroundColor: '#222' },
  header: { width: '100%', alignItems: 'center', paddingVertical: 25, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 },
  image: { width: 150, height: 150, marginTop: '15%' },
  name: { fontSize: 24, fontWeight: 'bold', color: '#fff', marginTop: 10 },
  typesContainer: { flexDirection: 'row', marginTop: 5 },
  type: { color: '#fff', fontSize: 16 },
  statsContainer: { flexDirection: 'row', justifyContent: 'space-between', width: '60%', marginVertical: 10 },
  stat: { color: '#fff', fontSize: 16 },
  sectionTitle: { color: '#fff', fontSize: 18, fontWeight: 'bold', marginTop: 20 },
  statBarContainer: { flexDirection: 'row', alignItems: 'center', width: '80%', marginVertical: 5 },
  statLabel: { color: '#fff', fontSize: 14, width: 80 },
  statBarBackground: { flex: 1, height: 10, backgroundColor: '#333', borderRadius: 5 },
  statBar: { height: 10, borderRadius: 5 },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222',
  }
});

export default Create