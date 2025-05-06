
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/components/ui/use-toast';
import { LogIn } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    
    // Here you would typically handle authentication
    toast({
      title: "Login Attempt",
      description: "This is a demo. In a real app, authentication would happen here.",
    });
    
    // For demo purposes, navigate to OTP verification
    navigate("/otp-verification", { state: { email } });
  };

  const handleGoogleLogin = () => {
    toast({
      title: "Google Login",
      description: "Connecting to Google authentication...",
    });
    // In a real implementation, this would redirect to Google OAuth
    navigate("/google-auth");
  };

  return (
    <div className="w-full max-w-md">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight">WELCOME BACK</h1>
        <p className="text-gray-500 mt-2">Please enter your email</p>
      </div>
      
      <form onSubmit={handleLogin}>
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
              placeholder="••••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md border border-gray-300"
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="remember" 
                checked={remember} 
                onCheckedChange={(checked) => setRemember(checked as boolean)}
              />
              <label
                htmlFor="remember"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember account
              </label>
            </div>
            <Link 
              to="/forgot-password"
              className="text-sm text-purple-600 hover:text-purple-500"
            >
              Forgot password?
            </Link>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-purple-600 hover:bg-purple-700 text-white"
          >
            Sign in
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
          onClick={handleGoogleLogin} 
          className="w-full flex items-center justify-center gap-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-all"
        >
          <img src="/lovable-uploads/f928437f-2e5d-4ff4-ab42-9ea27d95a54f.png" alt="Google logo" className="w-5 h-5" />
          <span className="text-gray-700">Sign in with Google</span>
        </button>
      </div>
      
      <p className="mt-6 text-center text-sm text-gray-500">
        Don't have an account?{" "}
        <Link to="/signup" className="text-purple-600 hover:text-purple-500 font-medium">
          Sign up for free!
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
