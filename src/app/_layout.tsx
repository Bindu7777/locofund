import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import '../global.css';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: '#FFFFFF' },
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen name="index" options={{ title: 'LocoFund' }} />
        <Stack.Screen name="onboarding/business" options={{ title: 'Business Onboarding' }} />
        <Stack.Screen name="onboarding/investor" options={{ title: 'Investor Onboarding' }} />
        <Stack.Screen name="auth/login" options={{ title: 'Log In' }} />
      </Stack>
    </SafeAreaProvider>
  );
}
