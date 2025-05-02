
import Section from "@/components/Section";
import TimelineItem from "@/components/TimelineItem";
import { User, Code, Camera, Dumbbell } from "lucide-react";

const About = () => {
  const timeline = [
    {
      title: "البدايات",
      date: "2005",
      content: "ولدت في 20 يونيو 2005، وبدأت رحلتي في استكشاف العالم من حولي."
    },
    {
      title: "بداية الشغف بالرياضة",
      date: "منذ الصغر",
      content: "كنت شغوفًا بالرياضة منذ طفولتي وأحببت التحديات والمنافسة."
    },
    {
      title: "بداية ممارسة كمال الأجسام",
      date: "2021",
      content: "بدأت ممارسة رياضة كمال الأجسام ومصارعة الذراعين في سن 16 سنة."
    },
    {
      title: "الالتحاق بكلية هندسة البترول",
      date: "2023",
      content: "التحقت بكلية هندسة البترول لبدء مسيرتي الأكاديمية في مجال الطاقة."
    }
  ];

  const interests = [
    {
      title: "البرمجة",
      description: "التعلم المستمر للبرمجة البسيطة والتطبيقات.",
      icon: <Code className="w-8 h-8 text-neon" />
    },
    {
      title: "التصوير الفوتوغرافي",
      description: "التقاط اللحظات الجميلة والزوايا المميزة.",
      icon: <Camera className="w-8 h-8 text-neon" />
    },
    {
      title: "كمال الأجسام",
      description: "ممارسة الرياضة وتحسين القوة البدنية.",
      icon: <Dumbbell className="w-8 h-8 text-neon" />
    }
  ];

  return (
    <div>
      {/* قسم معلوماتي الشخصية */}
      <Section id="personal-info" title="نبذة عني" align="right">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-8 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-neon/10 rounded-xl blur-xl"></div>
            <img
              src="/lovable-uploads/bb208097-fd15-41b9-b31c-30fbc6dd279a.png"
              alt="محمد البحراوي"
              className="w-full h-auto rounded-xl relative z-10 neon-border"
            />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-full bg-neon/10 border border-neon/20">
                <User className="w-6 h-6 text-neon" />
              </div>
              <h3 className="text-2xl font-bold text-white">محمد البحراوي مصطفى محمد</h3>
            </div>
            <p className="text-gray-300 mb-4">
              طالب بكلية هندسة البترول، شغوف بالرياضة والتحديات. أسعى دائمًا للتطور وتحقيق أهدافي في مختلف المجالات.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-900/50 p-4 rounded-lg backdrop-blur-sm">
                <h4 className="text-lg font-semibold text-white mb-2">معلومات شخصية</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><span className="text-neon">تاريخ الميلاد:</span> 20 يونيو 2005</li>
                  <li><span className="text-neon">التخصص:</span> هندسة البترول</li>
                  <li><span className="text-neon">العمر:</span> {new Date().getFullYear() - 2005} سنة</li>
                </ul>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-lg backdrop-blur-sm">
                <h4 className="text-lg font-semibold text-white mb-2">الإنجازات</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>المركز الثالث على مستوى الجامعة</li>
                  <li>المركز الثالث في بطولة خاصة بالجيم</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* قسم الاهتمامات */}
      <Section id="interests" title="اهتماماتي" align="left" className="bg-black/40">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((interest, index) => (
            <div 
              key={index} 
              className="p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm hover:bg-gray-900/70 transition-colors border border-gray-800 hover:border-neon/30 group card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">{interest.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-neon transition-colors">{interest.title}</h3>
              <p className="text-gray-400">{interest.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* قسم الخط الزمني */}
      <Section id="timeline" title="رحلتي حتى الآن" align="center">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-0">
            {timeline.map((item, index) => (
              <TimelineItem 
                key={index}
                title={item.title}
                date={item.date}
                index={index + 1}
              >
                <p>{item.content}</p>
              </TimelineItem>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;
