import styled from "@emotion/styled"
import { NavLink } from "react-router-dom";

const StyledHeader = styled.header`
padding: ${props => props.theme.spacing.xl};
border-bottom: 1px solid ${props => props.theme.colors.gray[300]};
`

const StyledNavLink = styled(NavLink)`
padding: ${props => props.theme.spacing.sm};
color: ${props => props.theme.colors.text};
border-radius: 5px;
font-size: ${props => props.theme.fontSizes.xxl};
font-weight: 800;
transition: all 0.2s ease;
text-decoration: none;
`

const Header = () => {
  
  return (
    <StyledHeader>
      <StyledNavLink to="/">코드사이트(CodeSight)</StyledNavLink>
    </StyledHeader>)
}

export default Header