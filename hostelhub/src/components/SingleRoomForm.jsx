import React ,{useRef,useEffect} from 'react'
import Chart from 'chart.js/auto'
import { Link } from 'react-router-dom';

const SingleRoomForm = () => {

  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(()=>{
    if(chartInstance.current){
      chartInstance.current.destroy();
    }
    const myChartRef = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(myChartRef,{
      type: 'doughnut',
      data: {
        labels: [
          'Booked Rooms',
          'Available Rooms'
        ],
        datasets:[
          {
            data:[30,45],
            backgroundColor: [
              '#091553','#97A7EF'
            ],
          }
        ]

      }
    });
    return ()=>
    {
      if(chartInstance.current){
        chartInstance.current.destroy();
      }
    }
  },[])

  return (
    <div name="contact" className="w-full h-full flex flex-wrap  p-4 text-[#091553]">
        
        <div className="flex flex-col p-4 ml-28  max-w-screen-lg h-full mt-5 w-1/2">
            <div className="pb-8 ">
              <div>
              <p className="text-4xl font-bold inline">Enter booking details</p>
                <Link to = "/back2">
                <button className=' ml-8 text-white bg-[#304AC1] hover:font-semibold  border w-20 h-10 items-center rounded '>Go Back</button></Link>
              </div>
                <p className="py-2 text-[#304AC1]">Submit the form below to book your desired room</p>
            </div>
            <div className="flex ">
                <form className='w-full max-w-lg' action="">
                    <div className='flex flex-wrap -mx-3 mb-4'>
                        <div className='w-full md:w-1/2 px-3 mb-4 md:mb-0'>
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                         Full Name
                         </label>
                         <input className="appearance-none block w-full bg-[#EFF5FF] text-gray-700 border border-[#091553] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Ayushman Soni"></input>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-enrollment-id">
                        Enrollment Number
                        </label>
                        <input className="appearance-none block w-full bg-[#EFF5FF] text-gray-700 border border-[#091553] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-enrollment-id" type="text" placeholder="IFE2022005"/>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                     <div className="w-full px-3">
                       <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
                         Enter your College Email
                       </label>
                       <input className="appearance-none block w-full bg-[#EFF5FF] text-gray-700 border border-[#091553] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="text" placeholder="ife2022005@iiita.ac.in"/>
                     </div>
                   </div>
                   
                   <div className="flex flex-wrap -mx-3 mb-2">

                       <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                         <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-hostel">
                           Hostel
                         </label>
                         <div className="relative">
                           <select className="block appearance-none w-full bg-[#EFF5FF] border border-[#091553] text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-hostel">
                             <option>BH 1</option>
                             <option>BH 2</option>
                             <option>BH 3</option>
                             <option>BH 4</option>
                           </select>
                           <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                             <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                           </div>
                         </div>
                       </div>
                       <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                         <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-room">
                           Room number
                         </label>
                         <input className="appearance-none block w-full bg-[#EFF5FF] text-gray-700 border border-[#091553] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-room" type="number" placeholder="811"/>
                       </div>/
                     </div>
                     
                   <button className="text-white bg-[#091553]  px-6 
                     py-3 my-8 flex items-center rounded-md ">Book my room</button>
                </form>
            </div>
        </div>
        <div className=''>
            <h1 className='md:text-3xl sm:text-1xl text-xl font-bold text-[#091553] '>Details about booked and remaining rooms</h1>
            <div>
            <canvas ref={chartRef} style={{height:"30px",width:"120px"}}/>
            </div>
        </div>
    </div>
  )
}

export default SingleRoomForm