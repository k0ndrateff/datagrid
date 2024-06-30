import { CellModel } from "../model/CellModel";
import { observer } from 'mobx-react-lite';
import styled from "styled-components";

const Root = styled.div`
  width: 160px;
  height: 40px;

  display: flex;
  align-items: center;

  padding: 8px;
  box-sizing: border-box;
  border: 0.5px solid var(--cell-border-inactive);
  transition: var(--main-transition);
  
  &:hover {
    cursor: cell;
    
    border: 0.5px solid var(--cell-border-hover);
    transition: none;
  }
`;

const Value = styled.span`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  color: var(--cell-value);
  font-family: var(--main-font);
`;

interface Props {
  model: CellModel;
}

const Cell = observer((props: Props) => {
  const { model } = props;

  return (
    <Root>
      <Value>
        {model.computedValue}
      </Value>
    </Root>
  );
});

export { Cell };
