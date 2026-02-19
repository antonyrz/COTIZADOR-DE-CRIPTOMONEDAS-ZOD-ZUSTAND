import { useCryptoStore } from "../store"
import Spinner from "./Spinner";

export default function CriptoPriceDisplay() {

    const result = useCryptoStore((state) => state.result);

  const loading = useCryptoStore((state) => state.loading);

  return (

    <div className="result-wrapper">

        {loading ? <Spinner/> : (

        <>
            <h2>Cotización</h2>
            <div className="result">

                <img src={`https://cryptocompare.com/${result.IMAGEURL}`} alt="Imagen Cryptomoneda" />

                <div>
                    <p>El precio es de: <span>{result.PRICE}</span></p>
                    <p>Precio más alto del día: <span>{result.HIGHDAY}</span></p>
                    <p>Precio más bajo del día: <span>{result.LOWDAY}</span></p>
                    <p>Variación Últimas 24 Horas: <span>{result.CHANGEPCT24HOUR}</span></p>
                    <p>Última Actualización: <span>{result.LASTUPDATE}</span></p>
                </div>
            </div>
        </>)}

    </div>
  )
}
