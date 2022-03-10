import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import ConfirmEmailScreen from './screens/ConfirmEmailScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';


export default function App() {
  return (
    <View style={styles.container}>
      <SignInScreen/>
      {/* <SignUpScreen /> */}
      {/* <ConfirmEmailScreen/> */}
      {/* <ForgotPasswordScreen /> */}
      {/* <ResetPasswordScreen /> */}


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FBFC'
  }
});
