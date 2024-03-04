// import Login from "./components/Login"
// import Home from "./components/Home"
import Booking from "./components/Booking";
import Hero from "./components/Hero";
import Hiw from "./components/Hiw";
// import Home from "./components/Home";
import Navbar from "./components/NavBar";
import RoomType from "./components/RoomType";
import SingleRoomForm from "./components/SingleRoomForm";
import Typeofroom from "./components/Typeofroom";
// import BookPage from "./components/BookPage"


function App() {
  return (
    <div>
      <Navbar/>
      {/* <Home/> */}
      <Hero/>
      <Hiw/>
      <Booking/>
      <SingleRoomForm/>
      {/* <Typeofroom/> */}
      <RoomType/>

      
    </div>
  );
}
export default App;
