import styled, { keyframes } from "styled-components";

export const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${({ image }) => `url('/tesla-images/${image}')`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const SectionText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;
export const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;

  @media screen and (max-width:768px) {
    flex-direction: column;
  }
`;
export const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px; 
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: .75;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
  
  &:hover {
    opacity: 1;
  }
`;
export const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;
const down = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(5px);
  }
  60% {
    transform: translateY(3px);
  }
`;
export const DownArrow = styled.img`
  width: 35px;
  animation: ${down} infinite 1.5s;
`;
export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
