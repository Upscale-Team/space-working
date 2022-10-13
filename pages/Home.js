import { Text } from "@ui-kitten/components";
import { Image, TouchableOpacity, View } from "react-native";
import work1 from "../assets/imagens-coworking/work1.jpeg";
const Home = () => {
  return (
    <View
      style={{
        height: "100%",
        padding: 24,
        backgroundColor: "#fff",
      }}
    >
      {/* Input */}
      {/* <Text style={{}}>Coworking próximo à você</Text> */}

      <View>
        <TouchableOpacity>
          <View style={{ height: 100, display: 'flex', flexDirection: "row" }}>
            <View>
              <Image
                style={{
                  width: 80,
                  height: 80,
                  marginRight: 16
                }}
                source={work1}
              />
            </View>
            <View>
              <Text>Club Coworking | Paulista</Text>
              <Text>Bela Vista, São Paulo</Text>
              <Text>**********</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
