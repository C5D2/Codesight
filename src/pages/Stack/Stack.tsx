import { Button } from '@components/common/Button';
import styled from '@emotion/styled';
import { StackPair } from '@pages/Stack/Example/StackPair';
import { useState } from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes['xl']};
`;

const Controls = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

const StackContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 300px;
  min-height: 400px;
  border: 2px solid ${({ theme }) => theme.colors.gray[100]};
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing.md};
  gap: ${({ theme }) => theme.spacing.sm};
`;

const StackItem = styled.div<{ isNew?: boolean }>`
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 4px;
  text-align: center;
  animation: ${({ isNew }) => isNew ? 'slideIn 0.3s ease-out' : 'none'};
  transition: transform 0.3s ease-out;

  @keyframes slideIn {
    from {
      transform: translateY(-20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  &:hover {
    transform: scale(1.02);
  }
`;

const BorderLine = styled.div`
border-bottom: 1px solid ${props => props.theme.colors.gray[300]};
`

const InfoPanel = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.gray[100]};
`;

const Stack = () => {
  const [stack, setStack] = useState<number[]>([]);
  const [newItemIndex, setNewItemIndex] = useState<number | null>(null);
  const [show, setShow] = useState(false);

  const push = () => {
    if (stack.length >= 7) return;
    const newValue = Math.floor(Math.random() * 100);
    setStack([...stack, newValue]);
    setNewItemIndex(stack.length);
    setTimeout(() => setNewItemIndex(null), 300);
  };

  const pop = () => {
    if (stack.length === 0) return;
    setStack(stack.slice(0, -1));
  };

  const reset = () => {
    setStack([]);
  }

  const handleEx1Toggle = () => {
    setShow((prev) => !prev)
  }

  return (
    <Container>
      <Title>Stack/Queue</Title>
      
      <InfoPanel>
        <h3>스택(Stack)</h3>
        <p>LIFO(Last In First Out)</p>
        <p>예시: 상자 안에 책을 쌓아두고 책을 차례로 빼기</p>
        <ul>
          <li>Push: 스택의 맨 위에 요소를 추가합니다.</li>
          <li>Pop: 스택의 맨 위 요소를 제거하고 반환합니다.</li>
        </ul>
      </InfoPanel>

      <Controls>
        <Button size="md" onClick={push} disabled={stack.length >= 7}>
          Push
        </Button>
        <Button size="md" onClick={pop} disabled={stack.length === 0}>
          Pop
        </Button>
        <Button variant="pink" size="md" onClick={reset} disabled={stack.length === 0}>
          Reset
        </Button>
      </Controls>

      <StackContainer>
        {stack.map((item, index) => (
          <StackItem 
            key={`${item}-${index}`}
            isNew={index === newItemIndex}
          >
            {item}
          </StackItem>
        ))}
      </StackContainer>

      <div>Stack Size: {stack.length} / 7</div>
    <BorderLine />
    <Title>예시</Title>
    <Button size="lg" onClick={handleEx1Toggle}>짝지어 제거하기</Button>
    {show && <StackPair />}
    </Container>
  );
};

export default Stack;