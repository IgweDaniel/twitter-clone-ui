import * as React from "react";
import {
  Image,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";

import { Block, Button, Avatar } from "../../components/shared/";

import PictureIcon from "../../../assets/icons/image.svg";
import EmojiIcon from "../../../assets/icons/emoji.svg";
import TimesIcon from "../../../assets/icons/times.svg";
import { axios } from "../../utils/axios";
import { connect } from "react-redux";

const ICON_HEIGHT = 25;

const TweetForm = ({ route, navigation, token }) => {
  const [img, setImg] = React.useState([]);

  const [text, setText] = React.useState("");

  const getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };
  React.useEffect(() => {
    getPermissionAsync();
  }, []);

  const _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        setImg((state) => [...state, result.uri]);
      }
    } catch (E) {
      console.log(E);
    }
  };

  async function createTweet() {
    const res = await axios.post(
      "/statuses/",
      { text },
      {
        headers: {
          "x-access-token": token,
        },
      }
    );
    navigation.goBack();

    console.log(res.data);
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
      }}
    >
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={{ marginHorizontal: 10 }}
          onPress={() => navigation.goBack()}
        >
          <TimesIcon fill="#1DA1F2" height={18} width={18} />
        </TouchableOpacity>
        <Button title="Tweet" size={70} onPress={() => createTweet()} />
      </View>
      <ScrollView keyboardShouldPersistTaps="handled" style={styles.container}>
        <View style={styles.form}>
          <Avatar
            uri={
              "https://images.pexels.com/photos/905375/pexels-photo-905375.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            }
            style={styles.avatar}
            size={40}
          />
          <TextInput
            style={styles.input}
            autoFocus
            multiline
            value={text}
            onChangeText={(text) => setText(text)}
            placeholder="What's happening?"
          />
        </View>
        <View style={styles.images}>
          {img.length > 0 && (
            <>
              {img.map((url, i) => (
                <Image key={i} source={{ uri: url }} style={styles.image} />
              ))}
            </>
          )}
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity activeOpacity={0.6} onPress={_pickImage}>
          <PictureIcon
            fill="#1DA1F2"
            height={ICON_HEIGHT}
            width={ICON_HEIGHT}
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6}>
          <EmojiIcon
            style={{ marginHorizontal: 10 }}
            fill="#1DA1F2"
            height={ICON_HEIGHT}
            width={ICON_HEIGHT}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.user.token,
  };
};

export default connect(mapStateToProps)(TweetForm);

const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    width: "85%",
    fontSize: 18,
  },
  avatar: {
    width: "10%",
  },
  container: {
    flex: 1,
    width: "100%",
    padding: 20,
  },
  header: {
    height: 70,
    alignItems: "center",
    width: "100%",
    padding: 15,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    padding: 10,
    height: 50,
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    borderTopColor: "#E1E8ED",
    borderTopWidth: 1,
    backgroundColor: "#fff",
  },
  images: {
    marginVertical: 40,
    flexDirection: "row",
    flexWrap: "wrap",
    flexBasis: "50%",
    justifyContent: "space-between",
  },
  image: {
    width: "48%",
    height: 150,
  },
});
