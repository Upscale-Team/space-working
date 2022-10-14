import StarIcon from "../assets/imagens-coworking/Star4.png";
import EmptyStarIcon from "../assets/imagens-coworking/Star19.png";
import { Image, Text, TouchableOpacity, View } from "react-native";

const imageStyle = {
  width: 80,
  height: 80,
  marginRight: 16,
}

const componentStyle = {
  height: 100,
  display: "flex",
  flexDirection: "row",
  position: "relative",
}

const ratingStyle = {
  display: "flex",
  flexDirection: "row",
  marginTop: 8,
}
const starRatingStyle = {
  width: 22,
  height: 22,
}

const renderStars = (rating) => {
  let stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <Image 
        style={starRatingStyle} 
        source={i < Math.floor(rating) ? StarIcon : EmptyStarIcon} 
      />
    )
  }

  return stars
}

const Coworking = ({ name, address, rating, image }) => (
  <TouchableOpacity>
    <View style={componentStyle}>
      <View>
        <Image style={imageStyle} source={{ uri: image }}  />
      </View>
      <View>
        <Text>{name}</Text>
        <Text style={{ marginTop: 8 }}>{address}</Text>
        <View style={ratingStyle}>
          {renderStars(rating)}
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

export default Coworking;
