import Navbar from "./components/Navbar";
import Contador from './components/itemListContainer';
import Productos from './conteiners/productos';

function App() {
  return (
    <>
    <Navbar/>
    <div className='container-card'>
<Productos/>
</div>
    </>
  );
}

export default App;
