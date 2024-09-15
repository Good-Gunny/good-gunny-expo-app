import { Stack } from 'expo-router';

export default function Page1Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Page 1'}} />
      <Stack.Screen name="something" options={{ title: 'something' }} />
      <Stack.Screen name="hide" options={{ title: 'HideButtomTab' }} />
    </Stack>
  );
}