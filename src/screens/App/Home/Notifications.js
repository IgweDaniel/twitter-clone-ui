// import React from "react";
// import { StyleSheet, View, FlatList } from "react-native";
// import { Block, Text, Avatar } from "../../../components/shared";
// import UserIcon from "../../../assets/icons/profile-full.svg";
// import HeartFull from "../../../assets/icons/heart-full.svg";
// import { Header } from "../../../components/Header";
// import { notifications } from "../../../../fakedata";

// const ICON_SIZE = 20;
// const AVATAR_SIZE = 35;
// const TEXT_SIZE = 14;
// const FollowNotification = ({ notification }) => (
//   <Block flex={0} style={styles.notification}>
//     <View style={styles.icon}>
//       <UserIcon height={ICON_SIZE} width={ICON_SIZE} fill="#1DA1F2" />
//     </View>
//     <View>
//       <Avatar uri={notification.user.avatar} size={AVATAR_SIZE} />
//       <Text size={TEXT_SIZE}>Sonia follows you</Text>
//     </View>
//   </Block>
// );

// const TweetActionNotification = ({ notification }) => (
//   <Block flex={0} style={styles.notification}>
//     <View style={styles.icon}>
//       <HeartFull height={ICON_SIZE} width={ICON_SIZE} fill="#e0245e" />
//     </View>
//     <View>
//       <Avatar uri={notification.user.avatar} size={AVATAR_SIZE} />
//       <Text size={TEXT_SIZE}>David liked your tweet</Text>
//       <Text>{notification.status.text}</Text>
//     </View>
//   </Block>
// );

// const Notifications = ({ navigation }) => {
//   return (
//     <>
//       <Header isHome route="Notifications" navigation={navigation} />
//       <Block>
//         <FlatList
//           style={{ backgroundColor: "#fff" }}
//           data={notifications}
//           renderItem={({ item }) =>
//             item.type == "like" ? (
//               <TweetActionNotification notification={item} />
//             ) : (
//               <FollowNotification notification={item} />
//             )
//           }
//           keyExtractor={(item) => `${item.id}`}
//         />
//       </Block>
//     </>
//   );
// };

// export default Notifications;

// const styles = StyleSheet.create({
//   notifications: {},
//   notification: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingHorizontal: 40,
//     paddingVertical: 20,
//     borderBottomColor: "#AAB8C2",
//     borderBottomWidth: StyleSheet.hairlineWidth,
//   },
//   icon: {
//     width: "15%",
//   },
// });

import * as React from "react";
import { Header, Block, Heading } from "../../../components/shared";
const index = ({ navigation }) => {
  return (
    <>
      <Header isHome navigation={navigation} title="Home" />
      <Block flex={1} vc hc>
        <Heading variant="h3">Notifications Screen</Heading>
      </Block>
    </>
  );
};

export default index;
