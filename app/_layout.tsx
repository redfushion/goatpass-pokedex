import React from 'react'
import { Tabs } from 'expo-router'
import TabBar from '@/components/tabBar'
import { Colors } from '@/constants/Colors'

const _layout = () => {
  return (
    <Tabs
      tabBar={props=> <TabBar {...props} />}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Pokédex",
          headerStyle: { backgroundColor: Colors.primaryColor },
          headerTitleStyle: { color: 'white', fontSize: 22, fontWeight: 'bold' },
          headerTitleAlign: 'left',
        }}
      />
      <Tabs.Screen
        name="pokemonDetail"
        options={{
            title: "Pokemon Details",
            headerShown: false,
        }}
      />
    </Tabs>
  )
}

export default _layout