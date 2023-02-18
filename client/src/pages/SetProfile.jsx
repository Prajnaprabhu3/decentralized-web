import { useState,useEffect } from 'react';
import  { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { setProfileRoute } from '../utils/apiRoutes';

//import loader from somewhere to be shown in this page

function SetProfile() {
const navigate=useNavigate();
const api="https://ui-avatars.com/api/?background=random/?rounded=true";

  return (
    <div>setProfile</div>
  )
}

export default SetProfile

