import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="bg-white h-[80vh]">
    <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
      <div className="flex flex-col w-[50%] max-md:ml-0 max-md:w-full bg-gradient-to-b
                                 from-white to-blue-300 via white">
        <div className="flex flex-col grow items-start px-14 py-11 w-full font-bold max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-1.5 ml-6 text-3xl leading-10 whitespace-nowrap text-blue-950 max-md:ml-2.5">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3d258257f5ea18e3fba8866c8a7627636d8c161c34bd47117e61f3a5513b1f80?apiKey=6034201f6be6425ebf9a408d7af48952&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d258257f5ea18e3fba8866c8a7627636d8c161c34bd47117e61f3a5513b1f80?apiKey=6034201f6be6425ebf9a408d7af48952&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d258257f5ea18e3fba8866c8a7627636d8c161c34bd47117e61f3a5513b1f80?apiKey=6034201f6be6425ebf9a408d7af48952&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d258257f5ea18e3fba8866c8a7627636d8c161c34bd47117e61f3a5513b1f80?apiKey=6034201f6be6425ebf9a408d7af48952&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d258257f5ea18e3fba8866c8a7627636d8c161c34bd47117e61f3a5513b1f80?apiKey=6034201f6be6425ebf9a408d7af48952&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d258257f5ea18e3fba8866c8a7627636d8c161c34bd47117e61f3a5513b1f80?apiKey=6034201f6be6425ebf9a408d7af48952&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d258257f5ea18e3fba8866c8a7627636d8c161c34bd47117e61f3a5513b1f80?apiKey=6034201f6be6425ebf9a408d7af48952&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d258257f5ea18e3fba8866c8a7627636d8c161c34bd47117e61f3a5513b1f80?apiKey=6034201f6be6425ebf9a408d7af48952&"
              className="w-8 rounded-full aspect-square bg-slate-400"
            />
            <div className="flex-auto my-auto">HostelHub</div>
          </div>
          <div className="mt-24 ml-5 text-4xl leading-[64px] text-slate-400 max-md:mt-10 max-md:max-w-full">
            <span className="text-blue-950">Unite Innovate</span>
            <br />
            <span className="text-blue-950">Succeed</span>{" "}
            <span className="text-slate-400">Together...</span>
          </div>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f7a34f441960b444fce3dec805e689671d73bfe85c9b22176414992ef0af37ed?apiKey=6034201f6be6425ebf9a408d7af48952&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7a34f441960b444fce3dec805e689671d73bfe85c9b22176414992ef0af37ed?apiKey=6034201f6be6425ebf9a408d7af48952&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7a34f441960b444fce3dec805e689671d73bfe85c9b22176414992ef0af37ed?apiKey=6034201f6be6425ebf9a408d7af48952&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7a34f441960b444fce3dec805e689671d73bfe85c9b22176414992ef0af37ed?apiKey=6034201f6be6425ebf9a408d7af48952&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7a34f441960b444fce3dec805e689671d73bfe85c9b22176414992ef0af37ed?apiKey=6034201f6be6425ebf9a408d7af48952&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7a34f441960b444fce3dec805e689671d73bfe85c9b22176414992ef0af37ed?apiKey=6034201f6be6425ebf9a408d7af48952&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7a34f441960b444fce3dec805e689671d73bfe85c9b22176414992ef0af37ed?apiKey=6034201f6be6425ebf9a408d7af48952&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7a34f441960b444fce3dec805e689671d73bfe85c9b22176414992ef0af37ed?apiKey=6034201f6be6425ebf9a408d7af48952&"
            className="self-stretch mt-28 w-full aspect-[1.82] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
      <div className="flex flex-col ml-5 w-[34%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col px-5 mt-56 text-xs leading-4 text-slate-400 max-md:mt-10">
          <div className="text-3xl font-bold text-blue-950">
            Sign In to HostelHub
          </div>
          
          <div className="mt-2.5 font-semibold">
            Unite Innovate Succeed Together
          </div>
          <div className="mt-10 font-medium">Enrollment No.</div>
          <form action="" method="" className="flex flex-col w-full md:w-1/2">
                    <input type="text" name="name" placeholder=""
                    className="justify-center items-start py-3 pr-16 pl-2.5 mt-3.5 font-medium whitespace-nowrap rounded-lg border-solid border-[0.8px] border-blue-950 text-blue-950 max-md:pr-5" />
                    <div className="mt-6 font-medium">Password</div>
                    <input type="text" name="email" placeholder=""
                    className="justify-center items-start py-3 pr-16 pl-2.5 mt-3.5 font-medium whitespace-nowrap rounded-lg border-solid border-[0.8px] border-blue-950 text-blue-950 max-md:pr-5" />
                     <button className="justify-center items-center px-16 py-3 mt-14 font-medium text-white bg-blue-800 rounded-lg border-solid border-[0.8px] border-blue-950 max-md:px-5 max-md:mt-10"><Link to = "/home">  Sign In </Link> </button> 
                </form>

          <div className="flex gap-2.5 self-end mt-60 mr-11 text-blue-800 whitespace-nowrap max-md:mt-10 max-md:mr-2.5">
            <div className="grow font-thin">Copyright</div>
            <div className="grow font-medium">SyncSoc</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Login