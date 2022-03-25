import { FiUser } from 'react-icons/fi'

export const Profile = () => {
  return (
    <div className="bg-main-background">
      <div
        className="shadow-lg"
        style={{
          width: '100%',
          backgroundColor: '#7392FF',
          display: 'flex',
          justifyContent: 'space-between',
          padding: 20,
          marginBottom: 20,
        }}
      >
        <div
          style={{ width: 50, height: 50, borderRadius: 10, backgroundColor: 'white' }}
          className="flex items-center justify-center text-4xl font-semibold"
        >
          <p className="">i</p>
        </div>
        <div
          className="shadow-lg cursor-pointer"
          style={{ width: 50, height: 50, borderRadius: 10, backgroundColor: 'white' }}
        >
          {<FiUser className="h-full w-full p-2" />}
        </div>
      </div>
      <div className="w-3/4 h-screen m-auto flex">
        <div className="w-3/4 pr-24">
          <div className="flex items-center justify-between gap-10 bg-white rounded-lg  p-4 my-4 shadow-lg">
            <div>LOGO</div>
            <h1 className="font-semibold">Service Name</h1>
            <button className="p-2 px-4 rounded-lg bg-[#FF5A5F]">Disconnect</button>
          </div>
          <div className="flex items-center justify-between gap-10 bg-white rounded-lg p-4 my-4 shadow-lg">
            <div>LOGO</div>
            <h1 className="font-semibold">Service Name</h1>
            <button className="p-2 px-4 rounded-lg bg-[#FF5A5F]">Disconnect</button>
          </div>
          <div className="flex items-center justify-between gap-10 bg-white rounded-lg  p-4 my-4 shadow-lg">
            <div>LOGO</div>
            <h1 className="font-semibold">Service Name</h1>
            <button className="p-2 px-4 rounded-lg bg-[#FF5A5F]">Disconnect</button>
          </div>
        </div>
        <div className="w-1/4">
          <div>
            <h1 className="text-4xl font-medium pb-8">Hi, Username!</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
