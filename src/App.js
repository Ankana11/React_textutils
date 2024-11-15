import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
<Navbar title="TextUtils" about="About Us"/>
<div className="container my-3">
{<Form heading="Utilize Your Text"/>}
</div>


    </>
  );
}

export default App;
