import { currencies } from "../data/data"

export default function CriptoSearchForm() {



  return (
        <form action="" className="form">
            <div className="field">
                <label htmlFor="currency">Moneda:</label>
                <select name="currency" id="currency">
                    <option value="" selected disabled>-- Seleccione --</option>
                        {currencies.map(currency => (
                            <option key={currency.code} value={currency.code}>{currency.name}</option>
                        ))}
                </select>
            </div>

            <div className="field">
                <label htmlFor="criptocurrency">CriptoMoneda:</label>
                <select name="criptocurrency" id="criptocurrency">
                    <option value="" selected disabled>-- Seleccione --</option>
                        
                </select>
            </div>

            <input type="submit" value="Cotizar" />
        </form>
    )
}
