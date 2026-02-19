import { useEffect } from "react";
import CriptoSearchForm from "./components/CriptoSearchForm";
import { useCryptoStore } from "./store";
import CriptoPriceDisplay from "./components/CriptoPriceDisplay";

function App() {

  const fetchCryptos =  useCryptoStore((state) => state.fetchCryptos);

  const result = useCryptoStore((state) => state.result);


  useEffect(() => {
    fetchCryptos();
  }, [])

  return (
    <>
      <div className="container">
          <h1 className="app-title">Cotizador de <span>Criptomonedas</span></h1>
      
      
          <div className="content">
              <CriptoSearchForm />

              {result.PRICE && <CriptoPriceDisplay />}
          </div>
      </div>
    </>
  )
}

export default App
