import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";

interface ColorListStyle {
  container: ViewStyle;
  content: ViewStyle;
  image: ImageStyle;
  name: TextStyle;
  types: TextStyle;
  numberContainer: ViewStyle;
}

export const styles = StyleSheet.create<ColorListStyle>({
  container: {
    flex: 1,
    margin: 8,
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4, // Sombra en Android
    shadowColor: '#000', // Sombra en iOS
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  content: {
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'capitalize',
  },
  types: {
    fontSize: 16,
    color: 'white',
  },
  numberContainer: {position: 'absolute', left: 5, top: 5}
});