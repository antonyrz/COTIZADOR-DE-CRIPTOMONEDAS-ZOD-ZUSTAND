import { z } from "zod";
import { CurrencySchema, CryptoCurrencyResponseSchema, PairSchema } from "../schema/crypto-schema";

export type Currency = z.infer<typeof CurrencySchema>;

export type CryptoCurrency = z.infer<typeof CryptoCurrencyResponseSchema>;

export type PairCurrency = z.infer<typeof PairSchema>;


