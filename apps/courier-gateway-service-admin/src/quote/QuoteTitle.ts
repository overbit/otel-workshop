import { Quote as TQuote } from "../api/quote/Quote";

export const QUOTE_TITLE_FIELD = "description";

export const QuoteTitle = (record: TQuote): string => {
  return record.description || String(record.id);
};
