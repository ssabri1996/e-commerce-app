import { PublicityWhereInput } from "./PublicityWhereInput";
import { PublicityOrderByInput } from "./PublicityOrderByInput";

export type PublicityFindManyArgs = {
  where?: PublicityWhereInput;
  orderBy?: Array<PublicityOrderByInput>;
  skip?: number;
  take?: number;
};
