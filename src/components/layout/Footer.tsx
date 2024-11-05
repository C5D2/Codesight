import styled from "@emotion/styled"

const StyledFooter = styled.div`
padding: ${props => props.theme.spacing.xxl};
color: ${props => props.theme.colors.gray[300]}
`


const Footer = () => {
  return (
    <StyledFooter>이 페이지는 코딩테스트를 효과적으로 기억하기 위해 만들어진 페이지로, 계~~속 수정해나갈 예정입니다.</StyledFooter>
  )
}

export default Footer