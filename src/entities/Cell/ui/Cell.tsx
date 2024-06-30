import { CellModel } from "../model/CellModel";
import { observer } from 'mobx-react-lite';
import styled, {css} from "styled-components";
import {ChangeEventHandler, MouseEventHandler, useCallback} from "react";
import {CellAddress} from "@/shared";

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

const TextStyles = css`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  color: var(--cell-value);
  font-family: var(--main-font);
`;

const Value = styled.span`
  ${TextStyles};
`;

const Input = styled.input`
  ${TextStyles};
`;

interface Props {
  model: CellModel;
  editable?: boolean;
  onClick: (address: CellAddress) => void;
}

const Cell = observer((props: Props) => {
  const { model, editable, onClick } = props;

  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(e => {
    const value = e.target.value;

    model.setValue(value);
  }, [model]);

  const handleClick = useCallback<MouseEventHandler<HTMLDivElement>>(() => {
    onClick(model.address);
  }, [model, onClick]);

  return (
    <Root onClick={handleClick}>
      {editable ? (
        <Input type="text" onChange={handleChange} />
      ) : (
        <Value>
          {model.computedValue}
        </Value>
      )}
    </Root>
  );
});

export { Cell };
