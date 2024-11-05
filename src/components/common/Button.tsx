import styled from "@emotion/styled";

interface IButtonProps {
  variant?: 'primary' | 'secondary' | 'green' | 'pink' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}


export const Button = styled.button<IButtonProps>`
padding: ${({size = 'md', theme}) => {
  switch (size) {
    case 'sm': return `${theme.spacing.xs} ${theme.spacing.sm}`;
    case 'lg': return `${theme.spacing.md} ${theme.spacing.lg}`;
    default: return `${theme.spacing.sm} ${theme.spacing.md}`;
  }
}};

font-size: ${({size = 'md', theme}) => {
  switch (size) {
    case 'sm': return theme.fontSizes.sm;
    case 'lg': return theme.fontSizes.lg;
    default: return theme.fontSizes.md;
  }
}};

background-color: ${({variant = 'primary', theme}) => {
  switch (variant) {
    case 'secondary' : return theme.colors.secondary;
    case 'green': return theme.colors.green;
    case 'pink': return theme.colors.pink;
    case 'outline': return 'transparent';
    default: return theme.colors.primary;
  }
}};

color: ${({ variant = 'primary'}) => 
  variant === 'outline' ? 'inherit' : 'white'};


border: ${({variant = 'primary', theme }) => 
    variant === 'outline' ? `1px solid ${theme.colors.primary}`: 'none'};

border-radius: 4px;
cursor: pointer;
transition: all 0.2s ease;

  &:hover {
    transform: scale(1.03);
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}
`

