
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { colors } from './global/styles';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RootNavigator from './navigation/RootNavigator';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.statusbar}
      />
      <RootNavigator />
    </View>
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="SignInWelcome">
    //     <Stack.Screen name="SignInWelcome" component={SignInWelcomeScreen} />
    //     <Stack.Screen name="SignIn" component={SignInScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
