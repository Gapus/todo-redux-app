import styled from "styled-components";

const Profile = () => {
  const none =
    "https://image.ohou.se/i/bucketplace-v2-development/uploads/default_images/avatar.png?gif=1&w=640&h=640&c=c";
  const hak =
    "http://k.kakaocdn.net/dn/boEp6l/btq6MTNzPgH/mVE7m02pyxfoMLZIb0iJQK/img_640x640.jpg";
  return (
    <Container>
      <ProfileImg src={hak} />
    </Container>
  );
};

export default Profile;

export const Container = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 22px;
`;

export const ProfileImg = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 25px;
`;
