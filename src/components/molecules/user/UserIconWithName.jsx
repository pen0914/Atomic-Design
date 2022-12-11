import styled from "styled-components";
import { memo, useContext } from "react";
import { UserContext } from "../../../providers/UserProvider";

export const UserIconWithName = memo((props) => {
  console.log("userIcon");
  const { image, name } = props;
  //useContextが取り出してくるのは,
  //creatContextで作られたどのタグか引数で判断
  const { userInfo } = useContext(UserContext);
  //isAdminに真値が渡されているか.ムダなバグを無くす対策
  const isAdmin = userInfo ? userInfo.isAdmin : false;

  return (
    <SContainer>
      <SItem height={160} width={160} src={image} alt={name} />
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  );
});

const SContainer = styled.div`
  text-align: center;
`;

const SItem = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #40514e;
`;

const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
