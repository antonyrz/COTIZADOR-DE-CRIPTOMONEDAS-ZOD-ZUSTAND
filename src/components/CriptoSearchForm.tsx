import { currencies } from "../data/data";
import { useCryptoStore } from "../store";
import type { CryptoCurrency, PairCurrency } from "../types";
import { useState } from "react";
import Alert from "./Alert";

export default function CriptoSearchForm() {

    const cryptoCurrencies = useCryptoStore((state) => state.cryptoCurrencies);


    const initialPair : PairCurrency = {
        currency: '',
        criptocurrency: '',
    }

    const [pair, setPair] = useState<PairCurrency>(initialPair);

    const [alert, setAlert] = useState('');

    const handleChange = (e : React.ChangeEvent<HTMLSelectElement>) => {

        setPair({
            ...pair,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e : React.SubmitEvent<HTMLFormElement>)  => {
        e.preventDefault();

        if(Object.values(pair).includes("")){
            setAlert("Todos los campos son obligatorios");
            return;
        };

        setAlert('');
    };

  return (
        <form  
            className="form"
            onSubmit={handleSubmit}
            >

            {alert && <Alert>{alert}</Alert>}

            <div className="field">
                <label htmlFor="currency">Moneda:</label>
                <select 
                    name="currency" 
                    id="currency"
                    value={pair.currency}
                    onChange={handleChange}>
                    <option value="" selected disabled>-- Seleccione --</option>
                        {currencies.map(currency => (
                            <option key={currency.code} value={currency.code}>{currency.name}</option>
                        ))}
                </select>
            </div>

            <div className="field">
                <label htmlFor="criptocurrency">CriptoMoneda:</label>
                <select 
                    name="criptocurrency" 
                    id="criptocurrency"
                    value={pair.criptocurrency}
                    onChange={handleChange}>
                    <option value="" selected disabled>-- Seleccione --</option>
                        {cryptoCurrencies.map((crypto : CryptoCurrency) => (
                            <option 
                                key={crypto.CoinInfo.Name} 
                                value={crypto.CoinInfo.Name}
                                >{crypto.CoinInfo.FullName}</option>
                        ))}
                </select>
            </div>

            <input type="submit" value="Cotizar"/>
        </form>
    )
}
