import { Card, CardIcons, CardName, CardImg } from "./styles";

interface PropsTeamCard {
  name?: string;
  src?: string;
  subName?: string;
}

const TeamCard = ({ src, name, subName }: PropsTeamCard) => {
  return (
    <Card>
      <CardImg src={src} alt={name} />
      <CardName>{name}</CardName>
      <p>{subName}</p>
      <CardIcons>
        {/* <IconLinkedin />
        <IconTwitter/>
        <IconInstagram/> */}
      </CardIcons>
    </Card>
  );
};

export default TeamCard;
