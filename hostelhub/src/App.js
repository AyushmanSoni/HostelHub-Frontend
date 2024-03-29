// import Login from "./components/Login"
// import Home from "./components/Home"
import AboutDouble from "./components/AboutDouble";
import Booking from "./components/Booking";
import ChooseType from "./components/ChooseType";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Hiw from "./components/Hiw";
// import Home from "./components/Home";
import Navbar from "./components/NavBar";
import NewLogin from "./components/NewLogin";
import RoomType from "./components/RoomType";
import SingleRoomForm from "./components/SingleRoomForm";
import { Routes, Route } from 'react-router-dom';
import Types from "./components/Types";

// import Typeofroom from "./components/Typeofroom";
// import BookPage from "./components/BookPage"


function App() {
  return (
    <>
    <Routes>
          <Route path='/' element={<NewLogin/>} />
         <Route path='/home' element={<Hero/>} />
         <Route path='/booking' element={<Types/>}/>
         <Route path='/double' element={<Booking/>}/>
    </Routes>
    </>
    // <div>
    //   <NewLogin/>
    //   <Navbar/>
    //   <ChooseType/>
    //   {/* <Home/> */}
    //   <Hero/>
    //   <Hiw/>
    //   <Booking/>
    //   <SingleRoomForm/>
    //   {/* <Typeofroom/> */}
    //   <RoomType/>
    //   <AboutDouble/>
    //   <Footer/>

      
    // </div>
  );
}
export default App;
