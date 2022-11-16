import { css } from '@emotion/css'

export const Nav = css`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 40px;
  background-color: rgba(6, 6, 6, 0.5);
  box-shadow: inset -40px 0px 0px 0px rgba(6, 6, 6, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: width 300ms ease-in-out;
`

export const NavOpen = css`
  width: 200px !important;
`

export const NavContainer = css`
  overflow: hidden;
`

export const NavItem = css`
  cursor: pointer;
  position: relative;
  color: #fff;
  width: 100%;
  margin-bottom: 10px;
  padding-bottom: 10px;

  &::after {
    content: '';
    position: absolute;
    display: block;
    width: 0;
    height: 2px;
    bottom: 0px;
    background-color: rgba(255, 255, 255, 0);
    transition: width 500ms ease-in-out, background-color 500ms ease-in-out;
  }

  &:hover::after {
    width: 100%;
    background-color: rgba(255, 255, 255, 0.3);
  }
`

export const NavItemActive = css`
  &::after {
    width: 100% !important;
    background-color: rgba(255, 255, 255, 0.6) !important;
  }
`

export const NavLink = css`
  color: #fff;
  font-size: 1.5rem;
`

export const CloseButton = css`
  position: absolute;
  cursor: pointer;
  top: 10px;
  right: -24px;
  border-radius: 4px;
  transform: rotateY(0deg);
  transition: transform 500ms ease-in-out;
  background-color: transparent;
`

export const CloseButtonActive = css`
  transform: rotateY(180deg) !important;
`

export const Rocket = (isNavOpen: boolean) => css`
  position: absolute;
  bottom: -25px;
  left: -70px;
  width: ${isNavOpen ? '300px' : '200px'};
  transition: width 400ms ease-in-out;
`
