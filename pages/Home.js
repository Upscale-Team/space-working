import React from "react";
import { Card, Icon, Input, Modal, Text } from "@ui-kitten/components";
import { Button, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import work1 from "../assets/imagens-coworking/work1.jpeg";
import work2 from "../assets/imagens-coworking/work2.jpeg";
import work3 from "../assets/imagens-coworking/work3.jpeg";
import Star4 from "../assets/imagens-coworking/Star4.png";
import Star19 from "../assets/imagens-coworking/Star19.png";

const Home = () => {
  const [value, setValue] = React.useState("");
  const [visible, setVisible] = React.useState(true);
  const renderIcon = (props) => <Icon {...props} name="search" />;

  return (
    <View
      style={{
        height: "100%",
        padding: 24,
        backgroundColor: "#fff",
      }}
    >
      {/* Input */}

      <Input
        value={value}
        placeholder="Buscar coworkings"
        accessoryRight={renderIcon}
      />
      {/* onChangeText={(nextValue) => setValue(nextValue)} */}

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
        <TouchableOpacity>
          <View
            style={{
              height: 100,
              display: "flex",
              flexDirection: "row",
              position: "relative",
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
              <Text>Club Coworking | Paulista</Text>
              <Text
                style={{
                  marginTop: 8,
                }}
              >
                Bela Vista, São Paulo
              </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: 8,
                }}
              >
                <Image
                  style={{
                    width: 22,
                    height: 22,
                  }}
                  source={Star4}
                />
                <Image
                  style={{
                    width: 22,
                    height: 22,
                  }}
                  source={Star4}
                />
                <Image
                  style={{
                    width: 22,
                    height: 22,
                  }}
                  source={Star4}
                />
                <Image
                  style={{
                    width: 22,
                    height: 22,
                  }}
                  source={Star4}
                />
                <Image
                  style={{
                    width: 22,
                    height: 22,
                  }}
                  source={Star19}
                />
              </View> 
            </View>

          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={{ height: 100, display: "flex", flexDirection: "row" }}>
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
              <Text>Club Coworking | Paulista</Text>
              <Text
                style={{
                  marginTop: 8,
                }}
              >
                Bela Vista, São Paulo
              </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: 8,
                }}
              >
                <Image
                  style={{
                    width: 22,
                    height: 22,
                  }}
                  source={Star4}
                />
                <Image
                  style={{
                    width: 22,
                    height: 22,
                  }}
                  source={Star4}
                />
                <Image
                  style={{
                    width: 22,
                    height: 22,
                  }}
                  source={Star4}
                />
                <Image
                  style={{
                    width: 22,
                    height: 22,
                  }}
                  source={Star19}
                />
                <Image
                  style={{
                    width: 22,
                    height: 22,
                  }}
                  source={Star19}
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={{ height: 100, display: "flex", flexDirection: "row" }}>
            <View>
              <Image
                style={{
                  width: 80,
                  height: 80,
                  marginRight: 16,
                }}
                source={work3}
              />
            </View>

            <View>
              <Text>Club Coworking | Paulista</Text>
              <Text
                style={{
                  marginTop: 8,
                }}
              >
                Bela Vista, São Paulo
              </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: 8,
                }}
              >
                <Image
                  style={{
                    width: 22,
                    height: 22,
                  }}
                  source={Star4}
                />
                <Image
                  style={{
                    width: 22,
                    height: 22,
                  }}
                  source={Star4}
                />
                <Image
                  style={{
                    width: 22,
                    height: 22,
                  }}
                  source={Star4}
                />
                <Image
                  style={{
                    width: 22,
                    height: 22,
                  }}
                  source={Star4}
                />
                <Image
                  style={{
                    width: 22,
                    height: 22,
                  }}
                  source={Star4}
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <Modal
        visible={true}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}>
        <Card disabled={true}>
          <Text>Welcome to UI Kitten 😻</Text>
          <Button onPress={() => setVisible(false)}>
            DISMISS
          </Button>
        </Card>
      </Modal>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    minHeight: 192,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});