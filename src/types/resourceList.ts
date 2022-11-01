import { ListType } from "../constants/resourceList";

export interface List {
  id: number;
  type: ListType;
  description?: string;
  timestamp: number;
}
