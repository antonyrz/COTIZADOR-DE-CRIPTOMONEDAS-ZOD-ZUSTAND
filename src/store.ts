import { create } from "zustand";
import axios from "axios";
import { CryptoCurrenciesResponseSchema } from "./schema/crypto-schema";

type CryptoState = {
    fetchCryptos: () => void,
}

    async function getCryptos(){
    
    try {     
        
        const  url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'

        const { data: { Data } } = await axios(url); 

        const result = CryptoCurrenciesResponseSchema.safeParse(Data);

        if(result.success){
            console.log(result);
        }
                    
    } catch (error) {
        console.log(error);
    }
}

export const useCryptoStore = create<CryptoState>()((set) => ({

    fetchCryptos: () => {
        getCryptos();
    },
        
}))