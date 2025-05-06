
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLocation, useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';

const OTPVerification = () => {
  const [otp, setOtp] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Get email from location state, or use a default
  const email = location.state?.email || 'your email';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (otp.length < 6) {
      toast({
        title: "Error",
        description: "Please enter the complete 6-digit code",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "OTP Verified",
      description: "OTP verification successful. In a real app, you would be logged in now.",
    });
    
    // Navigate to dashboard or home after successful verification
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-6">
      <div className="w-full max-w-md bg-white p-8 rounded-lg border border-gray-100 shadow-sm">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 11H5C3.89543 11 3 11.8954 3 13V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V13C21 11.8954 20.1046 11 19 11Z" stroke="#7E69AB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="#7E69AB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        
        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Enter OTP</h2>
          <p className="text-gray-500 text-sm">
            We've sent an email to <span className="font-medium">{email}</span>,<br />
            please enter the code below.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-center">
            <InputOTP maxLength={6} value={otp} onChange={setOtp}>
              <InputOTPGroup>
                {Array.from({ length: 6 }).map((_, index) => (
                  <InputOTPSlot key={index} index={index} className="w-10 h-12" />
                ))}
              </InputOTPGroup>
            </InputOTP>
          </div>
          
          <Button 
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full"
          >
            Submit
          </Button>
        </form>
        
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            Didn't receive the code?{" "}
            <button className="text-blue-600 font-medium hover:underline">
              Resend
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;
