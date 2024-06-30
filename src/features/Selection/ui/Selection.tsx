import {SelectionModel} from "../model/SelectionModel";
import {FloatingPanel} from "@/shared";
import {observer} from "mobx-react-lite";

interface Props {
  model: SelectionModel;
}

const Selection = observer((props: Props) => {
  const { model } = props;

  if (!model.selectedCell) return null;

  return (
    <FloatingPanel bottom={16} left={16}>
      {String(model.selectedCell)}
    </FloatingPanel>
  );
});

export { Selection };
