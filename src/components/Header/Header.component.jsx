import React, { useState } from 'react'
import { Container, Menu, RightMenu, CustomMenu, BurgerNav, CustomClose } from './Header.styles'

const Header = () => {

  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <Container>

      <a>
        <img src="/tesla-images/logo.svg" alt="" />
      </a>

      <Menu>
        <a href="">Model S</a>
        <a href="">Model 3</a>
        <a href="">Model X</a>
        <a href="">Model Y</a>
      </Menu>

      <RightMenu>
        <a href="">Shop</a>
        <a href="">Tesla Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      
      <BurgerNav show={burgerStatus}>
        <CustomClose onClick={() => setBurgerStatus(false)} />
        <li><a href="">Model S</a></li>
        <li><a href="">Model 3</a></li>
        <li><a href="">Model X</a></li>
        <li><a href="">Model Y</a></li>
        <li><a href="">Solar Panel</a></li>
        <li><a href="">Solar Roof</a></li>
        <li><a href="">Existing Inventory</a></li>
        <li><a href="">Used Inventory</a></li>
        <li><a href="">Trade-in</a></li>
        <li><a href="">Cybertruck</a></li>
        <li><a href="">Roadster</a></li>
        <li><a href="">Semi</a></li>
        <li><a href="">Charging</a></li>
        <li><a href="">Powerwall</a></li>
        <li><a href="">Commercial Energy</a></li>
        <li><a href="">Utilities</a></li>
        <li><a href="">Test Drive</a></li>
      </BurgerNav>
    </Container>
  )
}

export default Header
 