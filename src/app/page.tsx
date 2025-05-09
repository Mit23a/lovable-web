import LoginForm from "@/components/LoginForm";
import WinterLandscape from "@/components/WinterLandscape";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full">
      {/* Left side - Login form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-white">
        <LoginForm />
      </div>
      
      {/* Right side - Winter landscape illustration */}
      <div className="hidden md:block md:w-1/2 relative overflow-hidden">
        <WinterLandscape />
      </div>
    </div>
  );
}