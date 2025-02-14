import React from 'react';
import { AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";

export const icons = {
    index: ({color}: {color: string}) => <MaterialIcons name="catching-pokemon" size={26} color={color} />,
    pokemonDetail: ({color}: {color: string}) => <AntDesign name="book" size={26} color={color} />,
};