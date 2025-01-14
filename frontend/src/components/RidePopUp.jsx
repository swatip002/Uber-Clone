import React from 'react'

const RidePopUp = (props) => {
  return (
    <div>
        <h5
        className="p-1 w-full text-center absolute top-0"
        onClick={() => {
          props.setRidePopupPanel(false)
        }}
      >
        <i className="text-3xl text-gray-300 ri-arrow-down-wide-line pt-14"></i>
      </h5>
      <h3 className="text-lg font-semibold mb-5">New Ride Available!</h3>
      <div className='flex items-center justify-between p-3 bg-yellow-300 rounded-lg mt-4'>
        <div className='flex items-center gap-3 '>
            <img className='h-12 w-12 rounded-full object-cover' src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
            <h5 className='text-lg font-medium'>Swati Das</h5>
        </div>
        <h5>2.2 Km</h5>
      </div>

      <div className="flex gap-2 justify-between flex-col w-full items-center">
        <img
          className="h-20"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_956/v1555367349/assets/d7/3d4b80-1a5f-4a8b-ac2b-bf6c0810f050/original/Final_XL.png"
          alt=""
        />
        <div className="w-full mt-5">
          <div className="flex item-center gap-5 p-2 border-b-2">
          <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab, Bhopal
              </p>
            </div>
          </div>
          <div className="flex item-center gap-5 p-2 border-b-2">
          <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab, Bhopal
              </p>
            </div>
          </div>
          <div className="flex item-center gap-5 p-2 ">
          <i className="ri-money-rupee-circle-fill"></i>
            <div>
              <h3 className="text-lg font-medium">Rs193.20</h3>
              <p className="text-sm -mt-1 text-gray-600">
                cash cash
              </p>
            </div>
          </div>
        </div>
        <div className='flex w-full items-center justify-between'>
        <button onClick={() => {
            props.setConfirmRidePopupPanel(true)
            props.confirmRide()
        }} className=" bg-green-600 text-white font-semibold p-3 px-8 rounded-lg mt-5">
          Accept
        </button>
        <button onClick={() => {
            props.setRidePopupPanel(false)
        }} className=" bg-gray-300 text-gray-700 font-semibold p-3 px-8 rounded-lg mt-1">
          Ignore
        </button>
        </div>
      </div>
    </div>
  )
}

export default RidePopUp