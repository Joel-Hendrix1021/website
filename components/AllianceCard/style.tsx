import styled from "@emotion/styled";

interface IAllianceCardStyleProps {
  background?: string;
}

export const Card = styled.div`
  text-align: center;
  width: 219px;
  height: 273px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  background: ${(props: IAllianceCardStyleProps) =>
    props.background ? props.background : "#fff"};
  margin: 1rem 0;
  font-size: 24px;
  font-weight: bold;
`;

export const ImgAlliance = styled.img`
  width: 140px;
  margin-top: 30px;
`;

export const P = styled.p`
  margin: 0;
  padding: 0;
`;
