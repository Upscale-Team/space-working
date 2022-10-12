import * as eva from "@eva-design/eva";
import { Image, StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  ApplicationProvider,
  BottomNavigation,
  BottomNavigationTab,
  IconRegistry,
  Layout,
  Text,
  TopNavigation,
  Icon
} from "@ui-kitten/components";
import { NavigationContainer } from "@react-navigation/native";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import logo from "./assets/imagens-coworking/logo.png";
import List from "./pages/List"
import Home from "./pages/Home"

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab title="" icon={<Icon name="pin-outline" />} />
    <BottomNavigationTab title="Lista" icon={<Icon name="gift-outline" />} />
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator
    screenOptions={{ headerShown: false }}
    tabBar={(props) => <BottomTabBar {...props} />}
  >
    <Screen name="Home" component={Home} />
    <Screen name="Seus Coworking" component={List} />
  </Navigator>
);

const Header = () => {
  const headerStyles = {
    height: 80,
    backgroundColor: "blue",
  };

  const Logo = {
    width: '100px',
    height: '100px'
  };
  
  return (
    <View style={headerStyles}>
      <Image style={Logo} source={logo} />
    </View>
  );
};

export default function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <Header />
        <TopNavigation />
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
