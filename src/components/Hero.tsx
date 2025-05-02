
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-[90vh] flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 text-center md:text-right animate-fade-in [--animation-delay:3]">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              <span className="text-white">محمد</span>{" "}
              <span className="text-neon animate-pulse-neon">البحراوي</span>
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-gray-300">
              طموحي يتجاوز الحدود، وشغفي يدفعني لاكتشاف نفسي من جديد في كل يوم
            </p>
            <p className="mb-8 text-gray-400">
              محمد البحراوي، طالب بكلية هندسة البترول، رياضي شغوف وعاشق للتحديات.
              أسعى دائمًا لتحقيق الأفضل والوصول لمكانة مميزة سواء في مجالي
              الأكاديمي أو الرياضي.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                onClick={() => navigate("/about")}
                className="neon-button flex items-center gap-2"
              >
                تعرف علي أكثر
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                onClick={() => navigate("/contact")}
                variant="outline"
                className="border-gray-600 text-gray-300 hover:text-white hover:bg-gray-800"
              >
                تواصل معي
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center animate-fade-in [--animation-delay:5]">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="w-full h-full rounded-full bg-neon/20 blur-3xl absolute"></div>
              <img
                src="/lovable-uploads/39dac111-3a81-4109-a4eb-6062d0db1460.png"
                alt="محمد البحراوي"
                className="w-full h-full object-cover rounded-xl relative z-10 neon-border"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-16 h-16 bg-neon/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-neon/5 rounded-full blur-3xl"></div>
    </div>
  );
};

export default Hero;
