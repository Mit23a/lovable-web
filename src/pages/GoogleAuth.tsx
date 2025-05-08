
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';
import { AvatarImage, AvatarFallback } from '@/components/ui/avatar';

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
    setTimeout(() => {
      navigate('/otp-verification', { 
        state: { 
          email: accounts.find(acc => acc.id === accountId)?.email 
        } 
      });
    }, 1000);
  };

  const handleUseAnotherAccount = () => {
    // In a real app, this would show Google's account selection UI
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-8 bg-white">
      <div className="w-full max-w-md p-6">
        <div className="flex items-center justify-center mb-10">
          <div className="w-6 h-6 mr-2 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="100%" height="100%">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
            </svg>
          </div>
          <span className="text-xl text-gray-600">Sign in with Google</span>
        </div>
        
        <div className="border-t border-gray-200 my-8"></div>
        
        <div className="mb-5">
          <h1 className="text-2xl font-medium mb-1">Choose an account</h1>
          <p className="text-gray-600">to continue to Company</p>
        </div>
        
        <div className="space-y-4">
          {accounts.map((account) => (
            <button
              key={account.id}
              className="flex items-center w-full p-3 text-left rounded-lg hover:bg-gray-50 transition-colors"
              onClick={() => handleAccountSelect(account.id)}
            >
              <div className="mr-4">
                <Avatar className="w-10 h-10 bg-purple-600 text-white">
                  <AvatarFallback>{account.avatar}</AvatarFallback>
                </Avatar>
              </div>
              <div>
                <div className="font-medium">{account.name}</div>
                <div className="text-gray-500 text-sm">{account.email}</div>
              </div>
            </button>
          ))}
          
          <button
            onClick={handleUseAnotherAccount}
            className="flex items-center w-full p-3 text-left rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="mr-4">
              <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z" fill="#5F6368"/>
                </svg>
              </div>
            </div>
            <div className="font-medium text-gray-700">Use another account</div>
          </button>
        </div>
        
        <div className="mt-12 text-sm text-gray-600">
          <p className="mb-4">
            To continue, Google will share your name, email address, language preference, and profile picture with Company.
          </p>
          <p>
            Before using this app, you can review Company's{" "}
            <a href="#" className="text-blue-600">privacy policy</a> and{" "}
            <a href="#" className="text-blue-600">terms of service</a>.
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
