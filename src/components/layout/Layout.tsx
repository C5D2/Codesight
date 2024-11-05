import Footer from "@components/layout/Footer"
import Header from "@components/layout/Header"
import styled from "@emotion/styled"
import { Outlet } from "react-router-dom"

const Container = styled.div`
display: flex;
flex-direction: column;
min-height: 100vh;
color: ${props => props.theme.colors.text};
background-color: ${props => props.theme.colors.background};
`
const Main = styled.main `
flex: 1;
margin: 0 auto;
padding: ${props => props.theme.spacing.xxl};
box-sizing: border-box;
width: 100%;
max-width: ${props => props.theme.breakpoints.lg};
`

export const Layout = () => {
  return (<>
  <Container>
    <Header />
    <Main>
      <Outlet />
    </Main>
    <Footer />
  </Container>
</>
  )
}

