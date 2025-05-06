
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { Link, useNavigate } from 'react-router-dom';
import WinterLandscape from '@/components/WinterLandscape';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
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
    
    // Instead of just showing a success message, we'll briefly show 
    // the success UI and then navigate to OTP verification
    toast({
      title: "OTP Sent",
      description: "A verification code has been sent to your email.",
    });
    
    setSubmitted(true);
    
    // Navigate to OTP verification after a short delay
    setTimeout(() => {
      navigate('/otp-verification', { state: { email } });
    }, 1500);
  };

  return (
    <div className="flex min-h-screen w-full">
      {/* Left side - Login form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          {!submitted ? (
            <>
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold tracking-tight">FORGOT PASSWORD</h1>
                <p className="text-gray-500 mt-2">Enter your email to receive a verification code</p>
              </div>
              
              <form onSubmit={handleSubmit}>
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
                    Send Verification Code
                  </Button>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-16 w-16 mx-auto text-green-500 mb-4" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                  clipRule="evenodd" 
                />
              </svg>
              <h2 className="text-2xl font-bold mb-2">Check Your Email</h2>
              <p className="text-gray-500 mb-6">
                We've sent a verification code to {email}
              </p>
              <p className="text-sm text-gray-500">
                Redirecting to verification screen...
              </p>
            </div>
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
