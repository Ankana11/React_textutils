import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
<Navbar title="TextUtils" about="About Us"/>
<div className="container my-3">

<Textform heading="Enter Your Text"/>
</div>
    </>
  );
}

export default App;
