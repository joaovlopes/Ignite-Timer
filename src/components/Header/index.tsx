import { HeaderContainer } from './styles'

import { Timer, Scroll } from 'phosphor-react'

import { NavLink } from 'react-router-dom'

import logoIgnite from '../../assets/logoIgnite.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} />

      <nav>
        <NavLink to="/" title="timer">
          <Timer size={24} />
        </NavLink>

        <NavLink to="/history" title="histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
