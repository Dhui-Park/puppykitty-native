import React from "react";
import styled from "styled-components/native";
import { colors } from "../../colors";
import useMe from "../../hooks/useMe";

const RoomContainer = styled.TouchableOpacity`
  width: 100%;
  padding: 15px 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Column = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 20px;
`;
const Data = styled.View``;
const UnreadDot = styled.View`
  width: 7px;
  height: 7px;
  border-radius: 3.5px;
  background-color: ${colors.main};
`;
const Username = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 16px;
`;
const UnreadText = styled.Text`
  color: white;
  margin-top: 2px;
  font-weight: 500;
`;

export default function RoomItem({ users, unreadTotal, id }) {
  const { data: meData } = useMe();
  const notMe = users.find((user) => user.username !== meData?.me?.username);
  return (
    <RoomContainer>
      <Column>
        <Avatar source={{ uri: notMe.avatar }} />
        <Data>
          <Username>{notMe.username}</Username>
          <UnreadText>
            {unreadTotal} unread {unreadTotal === 1 ? "message" : "messages"}
          </UnreadText>
        </Data>
      </Column>
      <Column>{unreadTotal !== 0 ? <UnreadDot /> : null}</Column>
    </RoomContainer>
  );
}
