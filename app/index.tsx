import { FlatList, View } from "react-native";
import React, { useEffect, useState } from "react";
import { ColorList } from "@/components/colorList";
import { fetchPokemonListWithDetails } from "@/services/api";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { typeColors } from "@/constants/typeColors";
import { useRouter } from "expo-router";

type RootStackParamList = {
  PokemonDetail: { name: string; id: number, types: string[] };
};

type PokemonType = keyof typeof typeColors;

type Props = NativeStackScreenProps<RootStackParamList>;

const Home = ({ navigation }: Props) => {
  const router = useRouter();
  const [limit, setLimit] = useState<number>(20);
  const [offset, setOffset] = useState<number>(0);
  const [pokemonList, setPokemonList] = useState<Array<{ name: string; id: number, types: string[] }>>([]);

  useEffect(() => {
    fetchPokemonListWithDetails().then(setPokemonList);
  }, []);

  const getData = () => {
    fetchPokemonListWithDetails(limit, offset + 20).then((results: Array<{ name: string; id: number, types: string[] }>) => {
      setPokemonList((pokemonList) => [...pokemonList, ...results]);
      setOffset((offset) => offset + 20);
    });
  };

  return (
    <View>
      <View style={{padding: 5, backgroundColor: '#0d0d0d'}}>
      <FlatList
        data={pokemonList}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            <ColorList
              id={index+1}
              name={item.name}
              types={item.types as PokemonType[]}
              color={typeColors[item.types[0] as PokemonType] || '#ccc'}
              onPress={() => router.push({
                pathname: '/pokemonDetail',
                params: { id: item.id }
              })}
            />
          );
        }}
        onEndReachedThreshold={0.5}
        onEndReached={getData}
      />
    </View>
    </View>
  )
}

export default Home;