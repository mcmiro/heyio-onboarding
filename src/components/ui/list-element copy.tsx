import { type UnorderedListType } from "types/list-types";
import ListElement from "./list-element";

export default function UnorderedList({ elements }: UnorderedListType) {
  return (
    <ul>
      {elements.map((item) => (
        <ListElement key={item.element} element={item.element} />
      ))}
    </ul>
  );
}
