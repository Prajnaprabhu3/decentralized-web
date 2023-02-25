import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from 'react-avatar';


import '../styles/chat.scss';

function Chat() {
const navigate=useNavigate();
const [otherUsers,setOtherUsers]=useState([]);
const [user,setUser]=useState(undefined);

useEffect( ()=>{
  (async () => {
    if(!localStorage.getItem("user")){
      navigate('/login');
      }else{
        setUser(await JSON.parse(localStorage.getItem('user')));
      }
  })();
},[]);

  return (
  <div className='h-screen w-full bg-[#21222B] text-white'>
      <div className=" bg-green-[#21222B] h-20 ">
        Logo section
      </div>



    <div className='chatContainer h-screen'>
      {/* sidebar  */}
      <div className=" bg-green-[#21222B] ">
          sidebar
          {/* {user.username} */}
          <Avatar name={user.username} rounded={true} size="50" className="rounded-3xl" />
      </div>

      {/* chat section  */}
      <div className=" bg-[#21222B]"> 


      {/* person details  */}
      <div className='bg-[#000000] h-16'>Chat person details</div>

      {/* chat section  */}
      <div className='bg-[#1D1E23] chatArea flex flex-col justify-between items-center'>
          All chats goes here

            {/* message send section  */}
      <div className='bg-[#17181D] w-2/3 m-4 h-12 flex justify-center items-center'>
        send message
      </div>
      </div>

    

      </div>
    </div>
  </div>
  )
}

export default Chat