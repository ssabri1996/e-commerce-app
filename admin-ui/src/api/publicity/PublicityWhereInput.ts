import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type PublicityWhereInput = {
  avtive?: StringNullableFilter;
  content?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  isReady?: BooleanNullableFilter;
  playing?: StringNullableFilter;
};
