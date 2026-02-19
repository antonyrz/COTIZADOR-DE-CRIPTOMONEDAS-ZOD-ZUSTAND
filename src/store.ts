import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { CryptoCurrency, CryptoPrice, PairCurrency } from "./types";
import { getCryptos, getCryptoPair } from "./services/CryptoService";

type CryptoStore = {
    cryptoCurrencies: CryptoCurrency[];
    result: CryptoPrice,
    loading: boolean,
    fetchCryptos: () => Promise<void>,
    fetchPair: (data : PairCurrency) => Promise<void>
}
   
export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({


    cryptoCurrencies: [],
    result: {} as CryptoPrice,
    loading: false,

    fetchCryptos: async () => {
        const cryptoCurrencies = await getCryptos();
        set(() => ({
            cryptoCurrencies,
        }))
    },

    fetchPair: async (pair: PairCurrency) => {

        set(() => ({
            loading: true
        }))

        const result = await getCryptoPair(pair);

        
        set(() => ({
            result,
            loading: false
        }))
    },
        
})))