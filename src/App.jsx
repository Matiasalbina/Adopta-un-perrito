import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import {Dogs} from './data'
import { MyGrid } from './components/MyGrid'
import Footer from './components/Footer'

function App() {

  return (
    <>
     <Header title = "Adopta un Perrito"/>
     <MyGrid posts={Dogs} />
     <Footer text = "Explora nuestra galeria de adopcion de perros para encontrar a tu compañero perfecto.Tenemos una variedad de perros diferentes y tamaños, todos en busca de un hogar amoroso.Cada imagen captura su esencia unica. Adopta un perro y brindale una segunda oportunidad.Encuentra a tu compañero peludo para siempre. "/>
    </>
  )
};

export default App
