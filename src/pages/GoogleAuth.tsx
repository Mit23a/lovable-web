
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar } from '@/components/ui/avatar';
import { AvatarFallback } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { User } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

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
      {/* Google header */}
      <div className="w-full max-w-3xl mx-auto p-6">
        <div className="flex items-center gap-2 py-4 border-b border-gray-200 mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          <span className="text-xl text-gray-600">Sign in with Google</span>
        </div>

        {/* Main content */}
        <div className="flex flex-col md:flex-row w-full max-w-3xl mx-auto gap-8 items-start">
          {/* Left section - Account selection text */}
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-normal text-gray-800 mb-2">Choose an account</h1>
            <p className="text-base text-gray-600">
              to continue to <span className="text-blue-500">Company</span>
            </p>
          </div>
          
          {/* Right section - Account options */}
          <div className="w-full md:w-1/2 space-y-4">
            {accounts.map((account) => (
              <Card 
                key={account.id}
                className="flex items-center justify-between w-full p-4 hover:bg-gray-50 transition-colors cursor-pointer border-gray-200"
                onClick={() => handleAccountSelect(account.id)}
              >
                <div>
                  <div className="font-medium">{account.name}</div>
                  <div className="text-gray-500">{account.email}</div>
                </div>
                <Avatar className="w-10 h-10 bg-purple-500 text-white">
                  <AvatarFallback className="text-white">{account.avatar}</AvatarFallback>
                </Avatar>
              </Card>
            ))}
            
            <Card 
              className="flex items-center justify-between w-full p-4 hover:bg-gray-50 transition-colors cursor-pointer border-gray-200"
              onClick={handleUseAnotherAccount}
            >
              <div className="font-medium text-gray-700">Use another account</div>
              <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
                <User size={20} className="text-gray-600" />
              </div>
            </Card>
          </div>
        </div>
        
        {/* Privacy info */}
        <div className="mt-16 text-sm text-gray-600 max-w-3xl mx-auto">
          <p className="mb-2">
            To continue, Google will share your name, email address, language preference, and profile picture with Company.
          </p>
          <p>
            Before using this app, you can review Company's{" "}
            <a href="#" className="text-blue-500">privacy policy</a> and{" "}
            <a href="#" className="text-blue-500">terms of service</a>.
          </p>
        </div>
        
        {/* Footer */}
        <div className="flex justify-between mt-16 text-sm max-w-3xl mx-auto">
          <div>
            <Select defaultValue="en-US">
              <SelectTrigger className="w-[180px] border-none bg-transparent h-8 p-0">
                <SelectValue placeholder="English (United States)" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en-US">English (United States)</SelectItem>
                <SelectItem value="fr-FR">Français (France)</SelectItem>
                <SelectItem value="es-ES">Español (España)</SelectItem>
              </SelectContent>
            </Select>
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
