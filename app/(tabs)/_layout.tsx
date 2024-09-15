import { Tabs } from 'expo-router';
import { useTabBarVisibility, TabBarVisibilityProvider } from '@/hooks/useTabBarVisibility';
export default function TabLayout() {
  return (
    <TabBarVisibilityProvider>
      <Tabs
        screenOptions={() => {
          const { isVisible } = useTabBarVisibility();
          console.log(isVisible);
          return {
            headerShown: false,
            tabBarStyle: isVisible? {} : { display: 'none' },
          };
        }}
      >
        <Tabs.Screen name="page1" options={{ title: 'Page 1' }} />
        <Tabs.Screen name="page2" options={{ title: 'Page 2' }} />
        <Tabs.Screen name="page3" options={{ title: 'Page 3' }} />
        <Tabs.Screen name="page4" options={{ title: 'Page 4' }} />
      </Tabs>
    </TabBarVisibilityProvider>
  );
}
