
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar } from '@/components/ui/avatar';
import { AvatarFallback } from '@/components/ui/avatar';

const GoogleAuth = () => {
  const navigate = useNavigate();
  const [selectedAccount, setSelectedAccount] = useState<string | null>(null);
  
  // Mock accounts for demo purposes
  const accounts = [
    { 
      id: '1', 
      name: 'Account Name', 
      email: 'email@gmail.com',
      avatar: 'B'
    },
    { 
      id: '2', 
      name: 'Another Account', 
      email: 'another@gmail.com',
      avatar: 'A'
    }
  ];

  const handleAccountSelect = (accountId: string) => {
    setSelectedAccount(accountId);
    // In a real app, this would authenticate with the selected account
    navigate('/');
  };

  const handleUseAnotherAccount = () => {
    // In a real app, this would show Google's account selection UI
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="w-full max-w-md mx-auto p-6">
        {/* Google logo and sign in text */}
        <div className="flex items-center gap-2 py-4 border-b border-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          <span className="text-xl text-gray-600">Sign in with Google</span>
        </div>
        
        <div className="mt-12">
          <h1 className="text-2xl font-normal text-gray-800 mb-1">Choose an account</h1>
          <p className="text-base text-gray-600">to continue to <span className="text-blue-500">Company</span></p>
        </div>
        
        <div className="mt-8 space-y-4">
          {accounts.map((account) => (
            <button
              key={account.id}
              className="flex items-center justify-between w-full p-3 text-left border-b border-gray-200 hover:bg-gray-50 transition-colors"
              onClick={() => handleAccountSelect(account.id)}
            >
              <div>
                <div className="font-medium">{account.name}</div>
                <div className="text-gray-500">{account.email}</div>
              </div>
              <Avatar className="w-10 h-10 bg-purple-500 text-white">
                <AvatarFallback>{account.avatar}</AvatarFallback>
              </Avatar>
            </button>
          ))}
          
          <button
            onClick={handleUseAnotherAccount}
            className="flex items-center justify-between w-full p-3 text-left border-b border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <div className="font-medium text-gray-700">Use another account</div>
            <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6C5.76 6 0.88 11.22 0 18C0.88 24.78 5.76 30 12 30C18.24 30 23.12 24.78 24 18C23.12 11.22 18.24 6 12 6ZM12 25.5C8.24 25.5 5.19 22.16 5.19 18C5.19 13.84 8.24 10.5 12 10.5C15.76 10.5 18.81 13.84 18.81 18C18.81 22.16 15.76 25.5 12 25.5ZM12 13.5C9.93 13.5 8.25 15.54 8.25 18C8.25 20.46 9.93 22.5 12 22.5C14.07 22.5 15.75 20.46 15.75 18C15.75 15.54 14.07 13.5 12 13.5Z" fill="#5F6368"/>
              </svg>
            </div>
          </button>
        </div>
        
        <div className="mt-12 text-sm text-gray-600 text-center max-w-md">
          <p>
            To continue, Google will share your name, email address, language preference, and profile picture with Company.
          </p>
          <p className="mt-4">
            Before using this app, you can review Company's{" "}
            <a href="#" className="text-blue-500">privacy policy</a> and{" "}
            <a href="#" className="text-blue-500">terms of service</a>.
          </p>
        </div>
        
        <div className="flex justify-between mt-12 text-sm">
          <div className="text-gray-600">
            English (United States)
          </div>
          <div className="space-x-4">
            <a href="#" className="text-gray-600">Help</a>
            <a href="#" className="text-gray-600">Privacy</a>
            <a href="#" className="text-gray-600">Terms</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleAuth;
