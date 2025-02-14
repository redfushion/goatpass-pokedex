import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

export type TabBarProps = BottomTabBarProps;

export type Route = {
  key: string;
  name: string;
  params?: object;
}