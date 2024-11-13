import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { verifyUser } from '../../actions/userActions';
import { useLocation, useNavigate } from 'react-router-dom';


const Verify = () => {

    const [otp, setOtp] = useState();
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const location = useLocation();

    const {user, isAuthenticated , isVerified} = useSelector((state) => state.user);

    const verifyHandler = async () => {
        await dispatch(verifyUser(user._id,otp));
    }
    const redirect = location.search ? location.search.split("=")[1] : "account";

    useEffect(() => {
      if (isAuthenticated && isVerified) {
        navigate(`/${redirect}`);
      }
      else if (isAuthenticated) {
        navigate(`/verify`);
      }
    }, [redirect, isAuthenticated, navigate, isVerified]);

  return (
    <div className='verify-container'>
        <h1 className="form-heading">OTP VERIFICATION</h1>
        <input value={otp} placeholder='OTP'type='number' onChange={(e) => {setOtp(e.target.value)}}/>
        <button onClick={verifyHandler}> submit </button>


       
    </div>
  )
}

export default Verify
