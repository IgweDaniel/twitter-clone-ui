import * as React from "react";
import { Header, Block, Heading } from "../../../components/shared";
import UsersList from "../../../components/usersList";

import { connect } from "react-redux";
import { axios } from "../../../utils/axios";
// import { users } from "../../../../fakedata";

const index = ({ navigation, token }) => {
  const [users, setUsers] = React.useState(null);

  async function getAllUsers() {
    try {
      const res = await axios.get("user/", {
        headers: {
          "x-access-token": token,
        },
      });
      console.log(res.data.data);

      setUsers(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }
  React.useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <>
      <Header isHome navigation={navigation} title="Home" />
      <Block flex={1} vc hc>
        {users && <UsersList users={users} />}
      </Block>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.user.token,
  };
};

export default connect(mapStateToProps)(index);
