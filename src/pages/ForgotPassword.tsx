
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
    
    // Show success message and navigate to login page
    toast({
      title: "Reset Link Sent",
      description: "A password reset link has been sent to your email.",
    });
    
    setSubmitted(true);
    
    // Navigate back to login after a short delay
    setTimeout(() => {
      navigate('/');
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
                    Send Reset Link
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
                We've sent a password reset link to {email}
              </p>
              <p className="text-sm text-gray-500">
                Redirecting to login page...
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
