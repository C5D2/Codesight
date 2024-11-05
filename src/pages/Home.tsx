import { Button } from "@components/common/Button"
import styled from "@emotion/styled"
import { useNavigate } from "react-router-dom"

const Container = styled.div`
display: flex;
flex-direction: column;
`

const Title = styled.h1 `
font-size: ${props => props.theme.fontSizes['xl']};
margin-bottom: ${props => props.theme.spacing.lg};`

const Grid = styled.div`
display: grid;
grid-template-columns: 1fr;
width: 100%;
gap: ${props => props.theme.spacing.lg};
`

const Home = () => {
 const navigate = useNavigate();

  return (
    <Container>
      <Title>
        코딩테스트 해설
      </Title>
      <Grid>
        <Button size="lg" variant="primary" onClick={() => navigate('/stack')}>스택/큐</Button>
        <Button size="lg" variant="secondary" disabled>정렬</Button>
        <Button size="lg" variant="green" disabled>트리</Button>
      </Grid>
    </Container>
  )
}

export default Home