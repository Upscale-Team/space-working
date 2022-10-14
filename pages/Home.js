import React, { useState, useEffect } from "react";
import { Icon, Input, Text } from "@ui-kitten/components";
import { View } from "react-native";
import axios from "axios";
import Coworking from "../components/Coworking";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const [coworkings, setCoworkings] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const renderIcon = (props) => <Icon {...props} name="search" />;

  useEffect(() => {
    axios.get("http://localhost:3000/coworkings")
      .then((response) => {
        setTimeout(() => {
          setCoworkings(response.data);
          setSearchResults(response.data);
        }, 700);
      })
      .finally(() => setLoading(false));
  }, [])

  useEffect(() => {
    const results = coworkings.filter(data => data.name.includes(searchValue));
    setSearchResults(results);
  }, [searchValue]);

  return (
    <View style={{height: "100%", padding: 24, backgroundColor: "#fff" }}>
      <Input
        value={searchValue}
        placeholder="Buscar coworkings"
        accessoryRight={renderIcon}
        onChangeText={setSearchValue}
      />

      <Text
        style={{
          fontSize: 18,
          fontWeight: "600",
          marginBottom: 32,
          marginTop: 32,
        }}
      >
        Coworking próximo à você
      </Text>

      <View>
        {isLoading ? <Text>Carregando...</Text> : searchResults.map(data => <Coworking {...data} />)}
      </View>
    </View>
  );
};

export default Home;
