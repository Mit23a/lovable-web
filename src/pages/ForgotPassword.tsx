
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { Link, useNavigate } from 'react-router-dom';
import WinterLandscape from '@/components/WinterLandscape';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [step, setStep] = useState<'email' | 'otp'>('email');
  const [otp, setOtp] = useState('');
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmitEmail = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }
    
    // Show success message and move to OTP verification
    toast({
      title: "Reset Link Sent",
      description: "A verification code has been sent to your email.",
    });
    
    // Proceed to OTP verification step
    setStep('otp');
  };

  const handleVerifyOTP = (e: React.FormEvent) => {
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
      description: "Your password has been reset successfully.",
    });
    
    // Navigate back to login after successful verification
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  return (
    <div className="flex min-h-screen w-full">
      {/* Left side - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          {step === 'email' ? (
            <>
              <div className="text-center mb-8">
                <div className="mb-6">
                  <div className="mx-auto w-32 h-32 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        className="h-20 w-20 text-blue-500"
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="1.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <rect width="16" height="13" x="4" y="5" rx="2" />
                        <path d="m4 8 8 5 8-5" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 rounded-full bg-blue-100 opacity-50"></div>
                  </div>
                </div>
                <h1 className="text-3xl font-bold tracking-tight">FORGOT PASSWORD</h1>
                <p className="text-gray-500 mt-2">Enter your email to receive a reset link</p>
              </div>
              
              <form onSubmit={handleSubmitEmail}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-md border border-gray-300"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    Send Reset Link
                  </Button>
                </div>
              </form>
            </>
          ) : (
            <>
              <div className="text-center mb-8">
                <div className="mb-6">
                  <div className="mx-auto w-32 h-32 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        className="h-20 w-20 text-blue-500"
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="1.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <path d="M19 11H5C3.89543 11 3 11.8954 3 13V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V13C21 11.8954 20.1046 11 19 11Z" />
                        <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 rounded-full bg-blue-100 opacity-50"></div>
                  </div>
                </div>
                <h1 className="text-3xl font-bold tracking-tight">ENTER OTP</h1>
                <p className="text-gray-500 mt-2">
                  Enter the verification code sent to <span className="font-medium">{email}</span>
                </p>
              </div>
              
              <form onSubmit={handleVerifyOTP} className="space-y-6">
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
                  className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white"
                >
                  Verify OTP
                </Button>
                
                <div className="text-center">
                  <p className="text-sm text-gray-500">
                    Didn't receive the code?{" "}
                    <button 
                      type="button" 
                      onClick={() => toast({
                        title: "Resent OTP",
                        description: "A new verification code has been sent to your email."
                      })}
                      className="text-purple-600 font-medium hover:underline"
                    >
                      Resend
                    </button>
                  </p>
                </div>
              </form>
            </>
          )}
          
          <p className="mt-6 text-center text-sm text-gray-500">
            <Link to="/" className="text-purple-600 hover:text-purple-500 font-medium">
              Return to login
            </Link>
          </p>
        </div>
      </div>
      
      {/* Right side - Winter landscape illustration */}
      <div className="hidden md:block md:w-1/2 relative overflow-hidden">
        <WinterLandscape />
      </div>
    </div>
  );
};

export default ForgotPassword;
