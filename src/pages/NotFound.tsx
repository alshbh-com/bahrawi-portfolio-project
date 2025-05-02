
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center px-4">
        <h1 className="text-7xl font-bold mb-4 text-white">
          <span className="text-neon">4</span>0<span className="text-neon">4</span>
        </h1>
        <p className="text-2xl text-gray-300 mb-8">عفواً، الصفحة غير موجودة</p>
        <Button 
          onClick={() => navigate("/")}
          className="neon-button flex items-center gap-2"
        >
          <Home className="w-5 h-5" />
          العودة للصفحة الرئيسية
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
