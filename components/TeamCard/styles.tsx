import styled from "@emotion/styled";

interface CardProps {
  background?: string;
  color?: string;
}

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 219px;
  color: ${(props: CardProps) => props.color};
  height: 337px;
  background: ${(props: CardProps) => props.background || "#fffff"};
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
`;

export const CardName = styled.p`
  font-weight: bold;
  font-size: 24px;
  margin: 8px 0;
`;

export const CardImg = styled.img`
  width: 135px;
  border-radius: 100px;
`;

export const CardIcons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100px;
  align-items: center;
  margin: 8px 0;
`;
