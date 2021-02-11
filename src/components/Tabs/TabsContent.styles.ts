import styled from 'styled-components';

interface ButtonProps {
  active: boolean;
}

export const TabsWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 200%;
  transform: translateX(
    ${(props: ButtonProps) => (props.active ? '-50%' : '0')}
  );
  transition: 0.4s;
`;
