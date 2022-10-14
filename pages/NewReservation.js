import {
  Button,
  IndexPath,
  Select,
  SelectItem,
  Text,
} from "@ui-kitten/components";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Image, View } from "react-native";
import work1 from "../assets/imagens-coworking/work1.jpeg";

const NewReservation = ({ route }) => {
  const [coworking, setCoworking] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(new IndexPath(0));

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:3000/coworkings/${route.params.id}`)
      .then(response => {
        setCoworking(response.data);
        setLoading(false);
      });
  }, [route.params.id]);

  console.log({ isLoading, coworking });

  return isLoading ? <Text>Carregando...</Text> : (
    <View
      style={{
        height: "100%",
        padding: 24,
        backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
        overflow: "scroll"
      }}
    >
      <View>
        <Image style={{ width: 150, height: 150 }} source={{ uri: coworking.image }} />
      </View>
      <View
        style={{
          borderBottomColor: "#000",
          borderBottomWidth: 1,
          paddingBottom: 23,
        }}
      >
        <Text
          style={{
            fontWeight: "600",
            textAlign: "center",
            fontSize: 16,
            marginTop: 16,
            marginBottom: 16,
          }}
        >
          {coworking.name}
        </Text>
        <Text style={{ fontWeight: "400", fontSize: 12, textAlign: "center" }}>
          {coworking.address}
        </Text>
        <Text
          style={{
            fontWeight: "400",
            fontSize: 12,
            textAlign: "center",
            marginTop: 12
          }}
        >
          <Text style={{ fontWeight: "600" }}>Horário:</Text> Segunda à quinta -
          8h00 às 18h00 Sexta-feira - 8h00 às 17h00
        </Text>
        <Text style={{ fontWeight: "400", fontSize: 12,marginTop: 12 }}>
          <Text style={{ fontWeight: "600" }}>Valor:</Text> R$00,00
        </Text>
        <Text style={{ fontWeight: "400", fontSize: 12, marginTop: 12 }}>
          <Text style={{ fontWeight: "600" }}>Telefone:</Text> {coworking.phoneNumber}
        </Text>
      </View>

      <View style={{ display: "flex", alignSelf: "flex-start", width: "100%" }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "600",
            marginBottom: 16,
            marginTop: 16,
          }}
        >
          Reservar Coworking
        </Text>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 16,
          }}
        >
          <Text
            style={{
              fontWeight: "600",
              fontSize: 14,
            }}
          >
            Data:
          </Text>
          <Select
            style={{
              width: 150,
            }}
            selectedIndex={selectedIndex}
          >
            <SelectItem title="Option 1" />
            <SelectItem title="Option 2" />
            <SelectItem title="Option 3" />
          </Select>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 16,
          }}
        >
          <Text
            style={{
              fontWeight: "600",
              fontSize: 14,
            }}
          >
            Horário:
          </Text>
          <Select
            style={{
              width: 150,
            }}
            selectedIndex={selectedIndex}
          >
            <SelectItem title="Option 1" />
            <SelectItem title="Option 2" />
            <SelectItem title="Option 3" />
          </Select>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 16,
          }}
        >
          <Text
            style={{
              fontWeight: "600",
              fontSize: 14,
            }}
          >
            Permanência no local:
          </Text>
          <Select
            style={{
              width: 150,
            }}
            selectedIndex={selectedIndex}
          >
            <SelectItem title="Option 1" />
            <SelectItem title="Option 2" />
            <SelectItem title="Option 3" />
          </Select>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 16,
          }}
        >
          <Text
            style={{
              fontWeight: "600",
              fontSize: 14,
            }}
          >
            Forma de pagamento:
          </Text>
          <Select
            style={{
              width: 150,
            }}
            selectedIndex={selectedIndex}
          >
            <SelectItem title="Option 1" />
            <SelectItem title="Option 2" />
            <SelectItem title="Option 3" />
          </Select>
        </View>

        <Button
          style={{
            backgroundColor: "#0C0F61",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 8,
            height: 27,
          }}
        >
          Reservar
        </Button>
      </View>
    </View>
  );
};

export default NewReservation;
