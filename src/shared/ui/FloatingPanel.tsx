import {ReactNode} from "react";
import styled from "styled-components";

interface RootProps {
  $top?: number;
  $right?: number;
  $bottom?: number;
  $left?: number;
}

const Root = styled.div<RootProps>`
  position: fixed;
  top: ${p => p.$top ? `${p.$top}px` : `unset`};
  right: ${p => p.$right ? `${p.$right}px` : `unset`};
  bottom: ${p => p.$bottom ? `${p.$bottom}px` : `unset`};
  left: ${p => p.$left ? `${p.$left}px` : `unset`};
  
  width: fit-content;
  height: fit-content;
  
  display: flex;
  align-items: center;
  gap: 16px;
  
  padding: 16px;
  border-radius: 12px;
  background: var(--background-main);
  box-shadow: var(--floating-panel-shadow);
`;

interface Props {
  children: ReactNode;
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

const FloatingPanel = (props: Props) => {
  const { children, top, right, bottom, left } = props;

  return (
    <Root $top={top} $right={right} $bottom={bottom} $left={left}>
      {children}
    </Root>
  );
};

export { FloatingPanel };
