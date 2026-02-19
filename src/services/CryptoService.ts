import axios from "axios";
import { CryptoCurrenciesResponseSchema, CryptoPriceSchema } from "../schema/crypto-schema";
import type { PairCurrency } from "../types";

export async function getCryptos(){
    
    try {     
        
        const  url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
        const { data: { Data } } = await axios(url); 
        const result = CryptoCurrenciesResponseSchema.safeParse(Data);

        if(result.success){
            return result.data;
        }
                    
    } catch (error) {
        console.log(error);
    }
}

export async function getCryptoPair({currency, criptocurrency} : PairCurrency){

    try {
        
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptocurrency}&tsyms=${currency}`;

        const {data: { DISPLAY }} = await axios(url);

        const result = CryptoPriceSchema.safeParse(DISPLAY[criptocurrency][currency]);

        if(result.success){
            return result.data;
        }

    } catch (error) {   
        console.log(error)
    }
}