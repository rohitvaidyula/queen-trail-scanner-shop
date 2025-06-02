
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Camera, Upload, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Scanner = () => {
  const [isScanning, setIsScanning] = useState(false);
  const navigate = useNavigate();

  const handleCapture = () => {
    setIsScanning(true);
    // Simulate scanning process
    setTimeout(() => {
      setIsScanning(false);
      navigate("/scan-result");
    }, 2000);
  };

  const handleUpload = () => {
    // Simulate file upload
    navigate("/scan-result");
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="p-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold golden-text-gradient mb-2">
          AI Fashion Scanner
        </h1>
        <p className="text-alabaster-200">
          Discover designer pieces and shop the look instantly
        </p>
      </div>

      {/* Camera View */}
      <div className="flex-1 relative overflow-hidden mx-6 mb-6">
        <Card className="h-full min-h-[500px] bg-obsidian-900 border-golden-sand-300/20 relative overflow-hidden">
          {/* Camera preview placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-obsidian-800 to-obsidian-900 flex items-center justify-center">
            {isScanning ? (
              <div className="text-center animate-pulse">
                <Zap className="w-16 h-16 text-golden-sand-300 mx-auto mb-4 animate-bounce" />
                <p className="text-golden-sand-300 text-lg font-medium">Analyzing fashion...</p>
                <p className="text-alabaster-300 text-sm mt-2">AI is identifying the design</p>
              </div>
            ) : (
              <div className="text-center">
                <Camera className="w-16 h-16 text-alabaster-300 mx-auto mb-4" />
                <p className="text-alabaster-300">Camera preview will appear here</p>
                <p className="text-alabaster-400 text-sm mt-2">Point at any fashion item to scan</p>
              </div>
            )}
          </div>

          {/* Scanning overlay */}
          {isScanning && (
            <div className="absolute inset-0 border-4 border-golden-sand-300 animate-pulse">
              <div className="absolute inset-4 border-2 border-golden-sand-300/50"></div>
            </div>
          )}

          {/* Scan frame guide */}
          {!isScanning && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 border-2 border-golden-sand-300/50 relative">
                {/* Corner guides */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-golden-sand-300"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-golden-sand-300"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-golden-sand-300"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-golden-sand-300"></div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-golden-sand-300 text-sm font-medium bg-obsidian-900/80 px-3 py-1 rounded">
                    Align item here
                  </p>
                </div>
              </div>
            </div>
          )}
        </Card>
      </div>

      {/* Action Buttons */}
      <div className="px-6 pb-6 space-y-4">
        <Button
          onClick={handleCapture}
          disabled={isScanning}
          className="w-full bg-golden-sand-300 hover:bg-golden-sand-400 text-obsidian-900 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 disabled:opacity-50"
        >
          {isScanning ? (
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 border-2 border-obsidian-900/30 border-t-obsidian-900 rounded-full animate-spin"></div>
              Scanning...
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Camera size={24} />
              Capture & Analyze
            </div>
          )}
        </Button>

        <Button
          onClick={handleUpload}
          variant="outline"
          className="w-full border-golden-sand-300 text-golden-sand-300 hover:bg-golden-sand-300 hover:text-obsidian-900 py-4 text-lg rounded-full transition-all duration-300"
        >
          <div className="flex items-center gap-3">
            <Upload size={20} />
            Upload from Gallery
          </div>
        </Button>
      </div>

      {/* Tips */}
      <div className="px-6 pb-8">
        <Card className="bg-obsidian-800/30 border-golden-sand-300/10 p-4">
          <h3 className="text-golden-sand-300 font-semibold mb-2">Scanning Tips</h3>
          <ul className="text-alabaster-300 text-sm space-y-1">
            <li>• Ensure good lighting for best results</li>
            <li>• Keep the item centered in the frame</li>
            <li>• Works best with clear, unobstructed views</li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default Scanner;
