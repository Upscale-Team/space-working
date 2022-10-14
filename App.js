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
  Icon,
} from "@ui-kitten/components";
import { NavigationContainer } from "@react-navigation/native";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import logo from "./assets/imagens-coworking/logo.png";
import Reservations from "./pages/Reservations";
import Home from "./pages/Home";
import NewReservation from "./pages/NewReservation";

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab title="" icon={<Icon name="home" />} />
    <BottomNavigationTab title="Coworking" icon={<Icon name="map" />} />
    <BottomNavigationTab title="Lista" icon={<Icon name="file-text" />} />
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator
    screenOptions={{ headerShown: false }}
    tabBar={(props) => <BottomTabBar {...props} />}
  >
    <Screen name="Home" component={Home} />
    <Screen name="Reservar" component={NewReservation} />
    <Screen name="Reservas" component={Reservations} />
  </Navigator>
);

const Header = () => {
  const headerStyles = {
    height: 80,
    backgroundColor: "blue",
  };

  const Logo = {
    width: "100px",
    height: "100px",
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
        <>
          <View
            style={{
              paddingTop: 40, 
              height: 100,
              borderBottomColor: 'grey',
              borderBottomWidth: 1
            }}
          >
            <Image 
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: 'contain'
            }}
            source={logo} />
          </View>
        </>
        {/* <TopNavigation /> */}
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
}
