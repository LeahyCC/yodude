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

export const NavItem = (itemProgressValue: number) => {
  /**
   * initial value is a number between 0 and 200
   * value of 100 is when the content is in the center
   * formatting so the value is always between 0 and 100
   */
  const itemValueFormatted =
    itemProgressValue < 100 ? itemProgressValue : (itemProgressValue - 200) * -1

  return css`
    cursor: pointer;
    position: relative;
    color: #fff;
    width: 100%;
    margin-bottom: 10px;
    padding-bottom: 10px;

    &::after,
    &::before {
      content: '';
      position: absolute;
      display: block;
      width: ${itemValueFormatted}%;
      height: 2px;
      bottom: 0px;
      background-color: white;
    }

    &::before {
      background-color: rgba(255, 255, 255, 0.3);
      transition: width 500ms ease-out;
    }

    &:hover::before {
      background-color: rgba(255, 255, 255, 0.3) !important;
      width: 100%;
    }
  `
}

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
