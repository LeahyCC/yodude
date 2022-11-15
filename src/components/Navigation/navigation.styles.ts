import { css, keyframes } from '@emotion/css'

const Nav = css`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 200px;
  background-color: rgba(6, 6, 6, 0.5);
  box-shadow: inset -40px 0px 0px 0px rgba(6, 6, 6, 0.2);

  display: flex;
  justify-content: center;
  align-items: center;
`

const fly = keyframes`
  0% {
    bottom: 10px;
    left: 15px;
  }
  100% {
    bottom: 2000px;
    left: 15px;
  }
`

const Rocket = (isFlying: boolean) => css`
  position: absolute;
  cursor: pointer;
  bottom: 10px;
  left: 15px;
  transform: rotate(-45deg);
  width: 50px;

  animation: ${isFlying ? `${fly} 0.8s ease-in 1` : 'none'};
`

const NavItem = css`
  color: #fff;
  margin-bottom: 20px;
`

const NavLink = css`
  color: #fff;
  font-size: 1.5rem;
`
export { Nav, Rocket, NavItem, NavLink }
