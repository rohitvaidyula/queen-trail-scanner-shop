
import { Crown } from "lucide-react";

interface LoadingProps {
  message?: string;
}

const Loading = ({ message = "Curating elegance..." }: LoadingProps) => {
  return (
    <div className="min-h-screen bg-creamy-sand-50 flex flex-col items-center justify-center">
      <div className="relative">
        {/* Spinning logo effect */}
        <div className="w-24 h-24 md:w-32 md:h-32 relative">
          <div className="absolute inset-0 border-4 border-rose-gold-300/30 rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-4 border-rose-gold-400/50 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '3s' }}></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src="/lovable-uploads/1960f31f-f620-420f-98f6-2d0b6d504877.png" 
              alt="Trailblazer Queen Productions Logo" 
              className="w-16 h-16 md:w-20 md:h-20 object-contain"
            />
          </div>
        </div>
      </div>
      
      {/* Tagline */}
      <p className="mt-8 text-charcoal-600 text-lg md:text-xl font-light tracking-wide animate-pulse">
        {message}
      </p>
    </div>
  );
};

export default Loading;
