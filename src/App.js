import './App.css';
import Testimonials from './components/Testimonials';
import reviews from "./data"


function App() {
  return (
    <div className='flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200 '>
      <h1 className="text-[#000000] text-4xl text-center font-bold flex flex-wrap mx-auto justify-center   " >Our Testimonials</h1>
      <div className=" bg-violet-400 h-[4px] w-1/2 mt-1 mx-auto "></div>
      <Testimonials reviews={reviews} />
    </div>
  );
}

export default App;
