import logo from './logo.svg';
import './App.css';
import Header_ from './components/Header_.js';
import LabelNombre from './components/LabelNombre.js';
import InputNombre from './components/InputNombre.js';
import LabelApellidos from './components/LabelApellidos.js';
import LabelCorreo from './components/LabelCorreo.js';
import SelectSexo from './components/SelectSexo.js';
import SelectSexoHombre from './components/SelectSexoHombre.js';
import SelectSexoMujer from './components/SelectSexoMujer.js';
import Sexo from './components/Sexo.js';
import LabelPoblacion from './components/LabelPoblacion.js';
import SelectPoblacion from './components/SelectPoblacion.js';
import LabelDescripcion from './components/LabelDescripcion.js';
import TextArea from './components/TextArea.js';
import Checkbox from './components/Checkbox.js';
import LabelInfo from './components/LabelInfo.js';
import LabelInfoCondiciones from './components/LabelInfoCondiciones.js';
import BotonEnviar from './components/BotonEnviar.js';
import Footer from './components/Footer.js';




function App() {
  return (
    <div className="App">
      <Header_ />
      <LabelNombre /> <InputNombre />
      <br />
      <LabelApellidos /> <InputNombre />
      <br />
      <Sexo /><SelectSexo /><SelectSexoHombre /><SelectSexo /><SelectSexoMujer />
      <br />
      <LabelCorreo /><InputNombre /> <br />
      <LabelPoblacion /> <SelectPoblacion /><br />
      <LabelDescripcion /> <TextArea /><br />
      <Checkbox /> <LabelInfo /><br />
      <Checkbox /> <LabelInfoCondiciones /> <br />
      <BotonEnviar /><br />
      <Footer />


    </div>
  );
}

export default App;
