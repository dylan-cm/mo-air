import React from 'react'
// import logo from '../assets/logo.svg'
import styled from '@emotion/styled'
import styles from '../styles/styles'

const S = {}
S.Header = styled.div`
  background-color: ${styles.light};
  padding: 20px;
  padding-left: 15%;
  padding-right: 15%;
  width: 100%;
  box-sizing: border-box;

  color: #000;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;

  img.logo {
    height: 80px;
  }

  a {
    text-decoration: none;
  }
`

S.JoinBtn = styled.div`
  background: ${styles.dark};
  color: #fff;
  padding: 16px;
  padding-right: 24px;
  padding-left: 24px;
  border-radius: 100px;

  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  &:hover {
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.25);
  }
`

function Header() {
  return (
    <S.Header>
      {/* <img src={logo} className="logo" alt="logo" /> */}
      <h1>Vent Builders</h1>
      <a href="https://www.google.com">
        <S.JoinBtn>Join Us</S.JoinBtn>
      </a>
    </S.Header>
  )
}

export default Header
