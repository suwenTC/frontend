//dropDownList.jsx
import { ADD_ROW, EDIT_MODE, VIEW_MODE } from "../constants";
import { Edit, AddBox, Visibility } from "@material-ui/icons";

export function generateButtonList(options) {
  const items = [];

  options.forEach(option => {
    switch (option) {
      case ADD_ROW:
        items.push({ label: ADD_ROW, icon: AddBox });
        break;
      case EDIT_MODE:
        items.push({ label: EDIT_MODE, icon: Edit });
        break;
      case VIEW_MODE:
        items.push({ label: VIEW_MODE, icon: Visibility });
        break;
      default:
        break;
    }
  });

  return items;
}
