import { Button, Text } from "@ui-kitten/components";
import { Image, View } from "react-native";
import work1 from "../assets/imagens-coworking/work1.jpeg";
import work2 from "../assets/imagens-coworking/work2.jpeg";

const List = () => {
  return (
    <View
      style={{
        height: "100%",
        padding: 24,
        backgroundColor: "#fff",
      }}
    >
      <Text
        style={{
          fontSize: 18,
          fontWeight: "600",
          marginBottom: 32,
          marginTop: 32,
        }}
      >
        Coworkings que você reservou
      </Text>

      <View>
        <View
          style={{
            height: 130,
            display: "flex",
            flexDirection: "row",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <View>
            <Image
              style={{
                width: 80,
                height: 80,
                marginRight: 16,
              }}
              source={work1}
            />
          </View>

          <View>
            <Text style={{ fontWeight: "600", fontSize: 16 }}>
              Club Coworking | Paulista
            </Text>
            <Text
              style={{
                marginTop: 4,
                fontSize: 12,
              }}
            >
              Av. Paulista, 1842 - Cerqueira César, SP
            </Text>
            <Text
              style={{
                marginTop: 4,
                fontSize: 12,
              }}
            >
              Data: 06/09/2022 Valor: R$00,00
            </Text>
            <Text
              style={{
                marginTop: 4,
                fontSize: 12,
              }}
            >
              Telefone: (11) 4118-4662
            </Text>
            <Button style={{ backgroundColor: "#AB2D2D", marginTop: 8, height: 27 }}>
              Cancelar reserva
            </Button>
          </View>
        </View>
      </View>

      <View>
        <View
          style={{
            height: 130,
            display: "flex",
            flexDirection: "row",
            position: "relative",
            overflow: "hidden",
            marginTop: 16
          }}
        >
          <View>
            <Image
              style={{
                width: 80,
                height: 80,
                marginRight: 16,
              }}
              source={work2}
            />
          </View>

          <View>
            <Text style={{ fontWeight: "600", fontSize: 16 }}>
              Club Coworking | Paulista
            </Text>
            <Text
              style={{
                marginTop: 4,
                fontSize: 12,
              }}
            >
              Av. Paulista, 1842 - Cerqueira César, SP
            </Text>
            <Text
              style={{
                marginTop: 4,
                fontSize: 12,
              }}
            >
              Data: 06/09/2022 Valor: R$00,00
            </Text>
            <Text
              style={{
                marginTop: 4,
                fontSize: 12,
              }}
            >
              Telefone: (11) 4118-4662
            </Text>
            <Text
              style={{
                marginTop: 4,
                fontSize: 10,
                color: '#43A68D'
              }}
            >
              Status: Já frequentou
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default List;
