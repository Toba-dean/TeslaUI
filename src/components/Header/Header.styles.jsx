import styled from "styled-components";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close'

 export const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* width: 100%; */
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 20px;
 `;
 export const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
 `;
 export const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    flex-wrap: nowrap;
  }
`;
export const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;
export const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  opacity: 0.95;
  width: 300px;
  list-style: none;
  padding: 20px;
  text-align: start;
  display: flex;
  flex-direction: column;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform .5s ease-in-out;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);

    a {
      font-weight: 600;
    }
  }
`;
export const CustomClose = styled(CloseIcon)`
  align-self: flex-end;
  cursor: pointer;
`;