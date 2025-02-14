import { View } from 'react-native'
import React from 'react'
import type { TabBarProps } from './tabBarProps';
import type { RouteProp } from '@react-navigation/native';
import { Colors } from '@/constants/Colors';
import { styles } from './tabBarStyle';
import TabBarButton from './tabBarButton';
import { icons } from '@/assets/icons';

const TabBar = (props: TabBarProps) => {
  return (
    <View style={styles.tabbar}>
      {props.state.routes.map((route: RouteProp<any>, index: number) => {
        const { options } = props.descriptors[route.key];
        const label = (
          options.tabBarLabel !== undefined
            ? (typeof options.tabBarLabel === 'string' ? options.tabBarLabel : route.name)
            : options.title !== undefined
            ? options.title
            : route.name
        );

        if(['_sitemap', '+not-found'].includes(route.name)) return null;

        const isFocused = props.state.index === index;

        const onPress = () => {
          const event = props.navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            props.navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          props.navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabBarButton 
            key={route.name}
            onPress={onPress}
            onLongPress={onLongPress}
            isFocused={isFocused}
            routeName={route.name as keyof typeof icons}
            color={isFocused? Colors.primaryColor : Colors.grayColor}
            label={label}
          />
        )
      })}
    </View>
  )
}

export default TabBar