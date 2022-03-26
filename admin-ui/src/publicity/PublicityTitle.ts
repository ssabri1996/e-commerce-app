import { Publicity as TPublicity } from "../api/publicity/Publicity";

export const PUBLICITY_TITLE_FIELD = "avtive";

export const PublicityTitle = (record: TPublicity): string => {
  return record.avtive || record.id;
};
