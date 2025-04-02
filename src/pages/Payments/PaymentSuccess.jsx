import React, { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router'
import useAxioSecure from '../../hooks/useAxioSecure';
import { toast } from 'react-toastify';

function PaymentSuccess() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const axioSecure = useAxioSecure();

    useEffect(()=>{
        const processPayment = async () =>{
            const sessionId = searchParams.get('session_id');
            const classId = searchParams.get('classId');
            const userEmail = searchParams.get('userEmail');

            if(!sessionId || !classId || !userEmail) {
                navigate('/');
                return;
            }

            try {
                const result = await axioSecure.post('/verifypayment',{
                    sessionId,
                    classId,
                    userEmail
                });

                toast.success('Payment successfull! You are now enrolled in the course.');
                navigate(`/course/${classId}`);
            } catch (error) {
                toast.error('Payment Failed. Please contact support');
                console.log('Payment verification error:', error);
                navigate('/')
            }
            processPayment();
        }
    },[searchParams, navigate, axioSecure]);
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='text-center'>
            <h1 className='text-3xl font-bold mb-4'>
                Processing your payment...
            </h1>
            <p>
                Please wait while we verify your enrollment.
            </p>
        </div>
    </div>
  )
}

export default PaymentSuccess