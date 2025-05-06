
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import WinterLandscape from '@/components/WinterLandscape';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !password || !confirmPassword) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    
    if (password !== confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }
    
    // Here you would typically handle registration
    toast({
      title: "Sign Up Attempt",
      description: "This is a demo. In a real app, registration would happen here.",
    });
    
    // For demo purposes, navigate to OTP verification
    navigate("/otp-verification", { state: { email } });
  };

  const handleGoogleSignup = () => {
    toast({
      title: "Google Sign Up",
      description: "Connecting to Google authentication...",
    });
    // In a real implementation, this would redirect to Google OAuth
    navigate("/google-auth");
  };

  return (
    <div className="flex min-h-screen w-full">
      {/* Left side - Login form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tight">CREATE ACCOUNT</h1>
            <p className="text-gray-500 mt-2">Join us today to access all features</p>
          </div>
          
          <form onSubmit={handleSignup}>
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
              
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium">
                  Password
                </label>
                <Input
                  id="password"
                  type="password" 
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-md border border-gray-300"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="block text-sm font-medium">
                  Confirm Password
                </label>
                <Input
                  id="confirmPassword"
                  type="password" 
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full rounded-md border border-gray-300"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-purple-600 hover:bg-purple-700 text-white"
              >
                Create Account
              </Button>
            </div>
          </form>
          
          <div className="mt-4 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or</span>
            </div>
          </div>
          
          <div className="mt-4">
            <button 
              onClick={handleGoogleSignup} 
              className="w-full flex items-center justify-center gap-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-all"
            >
              <img src="/lovable-uploads/f928437f-2e5d-4ff4-ab42-9ea27d95a54f.png" alt="Google logo" className="w-5 h-5" />
              <span className="text-gray-700">Sign up with Google</span>
            </button>
          </div>
          
          <p className="mt-6 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link to="/" className="text-purple-600 hover:text-purple-500 font-medium">
              Sign in
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

export default Signup;
