import * as React from "react";
import { Header, Block, Heading } from "../../../components/shared";

const index = ({ navigation }) => {
  return (
    <>
      <Header isHome navigation={navigation} title="Home" />
      <Block flex={1} vc hc>
        <Heading variant="h3">Search Screen</Heading>
      </Block>
    </>
  );
};

export default index;
