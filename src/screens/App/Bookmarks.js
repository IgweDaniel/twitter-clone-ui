import React from "react";
import { Header, Block, Heading } from "../../components/shared";

const index = ({ navigation }) => {
  return (
    <>
      <Header navigation={navigation} />
      <Block flex={1} vc hc>
        <Heading variant="h3">Bookmarks</Heading>
      </Block>
    </>
  );
};

export default index;
