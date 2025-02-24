import { type ListType } from "types/list-types";
import Typography from "./typography";

export default function ListElement({ element }: ListType) {
  return <Typography type="li">{element}</Typography>;
}
