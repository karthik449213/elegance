import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-neutral-100">
      <div className="w-full max-w-md mx-4 bg-white p-8 rounded-lg shadow-lg">
        <div className="flex mb-4 gap-2 items-center">
          <AlertCircle className="h-8 w-8 text-red-500" />
          <h1 className="text-2xl font-bold" style={{ color: "hsl(177, 55%, 22%)" }}>
            404 Page Not Found
          </h1>
        </div>

        <p className="mt-4 text-neutral-800">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="mt-6">
          <a 
            href="/" 
            className="inline-block px-6 py-3 bg-[hsl(51,100%,50%)] text-neutral-800 font-bold rounded-md hover:bg-opacity-90 transition"
          >
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
}
