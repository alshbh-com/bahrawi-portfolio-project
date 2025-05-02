
import Section from "@/components/Section";
import Hero from "@/components/Hero";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  // بيانات الأقسام الرئيسية للعرض في الصفحة الرئيسية
  const sections = [
    {
      id: "about",
      title: "من أنا",
      description: "تعرف على مسيرتي الشخصية والأكاديمية وشغفي بالرياضة والتكنولوجيا.",
      link: "/about",
      image: "/lovable-uploads/bb208097-fd15-41b9-b31c-30fbc6dd279a.png",
    },
    {
      id: "achievements",
      title: "إنجازاتي",
      description: "اكتشف رحلتي وما حققته من إنجازات في مجال الرياضة والتعليم.",
      link: "/achievements",
      image: "/placeholder.svg",
    },
    {
      id: "gallery",
      title: "المعرض",
      description: "صور متنوعة من حياتي الشخصية والرياضية والأماكن التي زرتها.",
      link: "/gallery",
      image: "/lovable-uploads/b634a9de-0ffa-4999-94bb-adc9fbc9eb1d.png",
    },
  ];

  return (
    <div className="space-y-24">
      <Hero />

      {/* الأقسام الرئيسية */}
      {sections.map((section, index) => (
        <Section
          key={section.id}
          id={`home-${section.id}`}
          title={section.title}
          align={index % 2 === 0 ? "right" : "left"}
        >
          <div
            className={`grid grid-cols-1 ${
              index % 2 === 0 ? "md:grid-cols-[2fr_3fr]" : "md:grid-cols-[3fr_2fr]"
            } gap-8 items-center`}
          >
            <div
              className={`${
                index % 2 === 0 ? "order-1" : "order-1 md:order-2"
              }`}
            >
              <h3 className="text-2xl font-bold mb-4 text-white">
                {section.title}
              </h3>
              <p className="text-gray-300 mb-6">{section.description}</p>
              <Button
                onClick={() => navigate(section.link)}
                className="neon-button flex items-center gap-2 group"
              >
                اكتشف المزيد
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1 transition-transform" />
              </Button>
            </div>
            <div
              className={`${
                index % 2 === 0 ? "order-2" : "order-2 md:order-1"
              }`}
            >
              <div className="relative overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-neon/20 blur-lg"></div>
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-[300px] object-cover rounded-xl relative z-10 neon-border card-hover"
                />
              </div>
            </div>
          </div>
        </Section>
      ))}
    </div>
  );
};

export default Home;
