import StarIcon from "../../assets/imagens-coworking/Star4.png";
import EmptyStarIcon from "../../assets/imagens-coworking/Star19.png";

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

const Coworking = ({ name, address, rating, image }) => (
  <TouchableOpacity>
    <View style={componentStyle}>
      <View>
        <Image style={imageStyle} source={image} />
      </View>
      <View>
        <Text>{name}</Text>
        <Text style={{ marginTop: 8 }}>{address}</Text>
        <View style={ratingStyle}>
          <Image style={starRatingStyle} source={StarIcon} />
          <Image style={starRatingStyle} source={StarIcon} />
          <Image style={starRatingStyle} source={StarIcon} />
          <Image style={starRatingStyle} source={StarIcon} />
          <Image style={starRatingStyle} source={EmptyStarIcon} />
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

export default Coworking;
