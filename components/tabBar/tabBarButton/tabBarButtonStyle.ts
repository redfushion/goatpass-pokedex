import { StyleSheet, ViewStyle } from "react-native";

interface TabBarButtonStyle {
  container: ViewStyle;
}

export const styles = StyleSheet.create<TabBarButtonStyle>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4
  }
})