"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
import WinterLandscape from "@/components/WinterLandscape";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { toast } = useToast();
  const router = useRouter();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    
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
    
    toast({
      title: "Sign Up Attempt",
      description: "This is a demo. In a real app, registration would happen here.",
    });
    
    router.push("/otp-verification");
  };

  const handleGoogleSignup = () => {
    toast({
      title: "Google Sign Up",
      description: "Connecting to Google authentication...",
    });
    router.push("/google-auth");
  };

  return (
    <div className="flex min-h-screen w-full">
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
              <div className="w-5 h-5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="100%" height="100%">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                </svg>
              </div>
              <span className="text-gray-700">Sign up with Google</span>
            </button>
          </div>
          
          <p className="mt-6 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link href="/" className="text-purple-600 hover:text-purple-500 font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </div>
      
      <div className="hidden md:block md:w-1/2 relative overflow-hidden">
        <WinterLandscape />
      </div>
    </div>
  );
}