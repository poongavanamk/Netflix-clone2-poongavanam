import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HeaderFile from './Home page/HeaderFile';
import Login from './Login Page/Login';
import Signup from './Signin Page/Signup';
import DetailsPage from './Mainfolder/DetailsPage';
import Password from './Signin Page/Password';
import Plandetailss from './Signin Page/Plandetailss';
import Pricedetails from './Signin Page/Pricedetails';
import Payment from './Signin Page/Payment'
import PaymentProcess from './Signin Page/PaymentProcess';
import Autopay from './Signin Page/Autopay';


function App() {
  return (
   
    <Router>
      <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/header" element={<HeaderFile />} />
      <Route path="/details" element={<DetailsPage />} />
      <Route path="/loginpage" element={<Login />} />
      <Route path='signup'element={<Signup />}/>
      <Route path="/password" element={<Password />} />
      <Route path="/Plandetailss" element={<Plandetailss />} />
      <Route path="/Pricedetails" element={<Pricedetails />} />
      <Route path="/Payment" element={<Payment />} />
      <Route path="/process" element={<PaymentProcess />} />
      <Route path="/upiprocess" element={<Autopay />} />
     </Routes>
     </Router>
    
   
  );
}

export default App;
