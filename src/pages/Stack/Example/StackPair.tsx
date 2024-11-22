import { Button } from '@components/common/Button';
import styled from '@emotion/styled';
import { addOpacity } from '@utils/color';
import { useState } from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.lg};
  margin-bottom: ${props => props.theme.spacing.lg}
`;

const ProblemLink = styled.a`
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSizes.xl};
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.colors.primary};
    text-decoration: underline;
  }
`;

const CodeBlock = styled.pre`
  padding: ${props => props.theme.spacing.md};
  border-radius: 4px;
  background-color: ${props => props.theme.colors.gray[100]};
  overflow-x: auto;
`;

const StackWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: ${props => props.theme.spacing.xl};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
  }
`;

const StackContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 300px;
  min-height: 400px;
  border: 2px solid ${props => props.theme.colors.gray[100]};
  border-radius: 8px;
  padding: ${props => props.theme.spacing.md};
  gap: ${props => props.theme.spacing.sm};

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: 100%;
    min-height: 300px;
  }
`;

const StackItem = styled.div<{ isRemoving?: boolean; isPair?: boolean; }>`
  padding: ${props => props.theme.spacing.md};
  background-color: ${props =>
    props.isPair ? props.theme.colors.pink : props.theme.colors.primary
  };
  color: white;
  border-radius: 4px;
  font-size: ${props => props.theme.fontSizes.xxl};
  text-align: center;
  transition: all 0.5s ease;
  animation: ${ props => {
    if (props.isRemoving) return 'fadeOut 0.7s ease-in-out';
    if (props.isPair) return 'highlight 0.5s ease-in-out';
    return 'slideIn 1s ease-inout';
  }};

  @keyframes slideIn {
    from {
      transform: translateX(-100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }

  @keyframes highlight {
    0% {
      transform: scale(1);
      background-color: ${props => props.theme.colors.primary};
    }
    50% {
      transform: scale(1.2);
      background-color: ${props => props.theme.colors.pink};
    }
    100% {
      transform: scale(1);
      background-color: ${props => props.theme.colors.pink};
    }
  }
`;

const InputString = styled.div`
  display: flex;
  justify-content: center;
  padding: ${props => props.theme.spacing.sm};
  gap: ${props => props.theme.spacing.sm};
  font-size: ${props => props.theme.fontSizes['xxl']};
  margin-bottom: ${props => props.theme.spacing.lg};
  flex-wrap: wrap;
`;

const Char = styled.span<{ isActive: boolean }>`
  padding: ${props => `${props.theme.spacing.xs} ${props.theme.spacing.md}`};
  color: ${props => props.isActive ? props.theme.colors.pink : props.theme.colors.text};
  background-color: ${props => props.isActive ? addOpacity(props.theme.colors.pink, 0.3) : props.theme.colors.gray[100]};
  border-radius: 5px;
  font-weight: ${props => props.isActive ? 'bold' : 'normal'};
  transition: all 0.3s ease;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    text-align: center;
    padding: ${props => props.theme.spacing.sm};
  }
`;

const InfoText = styled.div`
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.text};
  text-align: center;
`;

const CautionText = styled.p`
  font-size: ${props => props.theme.fontSizes.md};
  color: ${props => props.theme.colors.gray[500]};
  text-align: center;
`;

const Controls = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  justify-content: center;
`;

export const StackPair = () => {
  const input = "baabaa";
  const [stack, setStack] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [isRemoving, setIsRemoving] = useState<boolean>(false);
  const [matchingPair, setMatchingPair] = useState<number | null>(null);
  const [explanation, setExplanation] = useState<string>('Start를 눌러주세요.');
  const reset = () => {
    setStack([]);
    setCurrentIndex(-1);
    setMatchingPair(null);
    setExplanation('Start를 눌러주세요.');
  };

  const nextStep = async () => {
    if (currentIndex >= input.length - 1) {
      setExplanation(`최종 결과: ${stack.length === 0 ? 1 : 0}`);
      return;
    }

    const nextIndex = currentIndex + 1;
    const char = input[nextIndex];

    setCurrentIndex(nextIndex);

    if (stack.length > 0 && stack[stack.length - 1] === char) {
      setMatchingPair(stack.length -1);
      setExplanation(`${char}가 스택의 top과 같으므로 pop 합니다.`);
      await new Promise(resolve => setTimeout(resolve, 700));

      setIsRemoving(true);
      await new Promise(resolve => setTimeout(resolve, 500));

      setStack(prev => prev.slice(0, -1));
    } else {
      setExplanation(`${char}를 스택에 push 합니다.`);
      setStack(prev => [...prev, char]);
    }

    setIsRemoving(false);
    setMatchingPair(null);
  };

  return (
    <Container>
    <ProblemLink
    href="https://school.programmers.co.kr/learn/courses/30/lessons/12973"
    target="_blank"
    rel="noopener noreferrer"
    >
    <h3>프로그래머스 짝지어 제거하기</h3>
    </ProblemLink>
      <CodeBlock>
        {`동일한 문자열이 붙어 있는 경우, 문자열을 제거합니다. 모든 문자열 제거 시 1을, 아닐 경우 0을 반환합니다.
입력값: "baabaa"
현재 검사 중인 문자: ${currentIndex >= 0 ? input[currentIndex] : 'N/A'}
현재 스택: [${stack.join(', ')}]
`}
      </CodeBlock>

      <StackWrapper>
      <StackContainer>
        {stack.map((item, index) => (
          <StackItem 
            key={index + item}
            isPair = {index === matchingPair ||
            (isRemoving && index === stack.length - 1)}
            isRemoving={isRemoving && index === stack.length - 1}
          >
            {item}
          </StackItem>
        ))}
      </StackContainer>

    <InputString>
      {input.split('').map((char, index) => (
        <Char 
          key={index} 
          isActive={index === currentIndex}
        >
          {char}
        </Char>
      ))}
    </InputString>
    </StackWrapper>

      
      <div>
        <InfoText>{explanation}</InfoText>
          {currentIndex >= 0 && (
          <CautionText>애니메이션이 끝난 후에 버튼을 눌러주세요.</CautionText>)}
      </div>

      <Controls>
        <Button onClick={nextStep} disabled={currentIndex === input.length -1}>
          {currentIndex === -1 ? "Start" : "Next"}
        </Button>
        <Button variant="pink" onClick={reset} disabled={currentIndex === -1}>
          Reset
        </Button>
      </Controls>
    </Container>
  );
};