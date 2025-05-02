
import { useState } from "react";
import Section from "@/components/Section";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Calendar, Clock, ArrowRight } from "lucide-react";

interface Achievement {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
}

const Achievements = () => {
  const [activeTab, setActiveTab] = useState("past");

  const pastAchievements: Achievement[] = [
    {
      id: "achievement1",
      title: "المركز الثالث على مستوى الجامعة",
      date: "أكتوبر 2023",
      description: "حصلت على المركز الثالث في بطولة الجامعة لمصارعة الذراعين، بعد منافسة شرسة مع أفضل المتسابقين.",
      image: "/placeholder.svg",
    },
    {
      id: "achievement2",
      title: "المركز الثالث في بطولة الجيم",
      date: "يناير 2024",
      description: "تمكنت من تحقيق المركز الثالث في بطولة محلية لكمال الأجسام، بعد تدريب مكثف استمر لعدة أشهر.",
      image: "/placeholder.svg",
    },
  ];

  const futureAchievements: Achievement[] = [
    {
      id: "future1",
      title: "مشروع تخرج متميز",
      date: "2026",
      description: "أخطط لإنجاز مشروع تخرج مبتكر في مجال تكنولوجيا البترول، يتناول حلولًا مستدامة للطاقة.",
      image: "/placeholder.svg",
    },
    {
      id: "future2",
      title: "المشاركة في بطولة إقليمية",
      date: "2025",
      description: "أستعد للمشاركة في بطولة إقليمية لمصارعة الذراعين، والعمل على تحقيق مركز متقدم.",
      image: "/placeholder.svg",
    },
  ];

  return (
    <div>
      <Section id="achievements" title="إنجازاتي" align="center">
        <Tabs defaultValue="past" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 w-full max-w-md bg-gray-900/70">
              <TabsTrigger value="past" className="data-[state=active]:bg-neon/20 data-[state=active]:text-neon">
                إنجازات سابقة
              </TabsTrigger>
              <TabsTrigger value="future" className="data-[state=active]:bg-neon/20 data-[state=active]:text-neon">
                طموحات مستقبلية
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="past" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pastAchievements.map((achievement, index) => (
                <AchievementCard key={achievement.id} achievement={achievement} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="future" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {futureAchievements.map((achievement, index) => (
                <AchievementCard key={achievement.id} achievement={achievement} index={index} future />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </Section>

      <Section id="certificates" title="الشهادات" align="right" className="bg-black/40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 overflow-hidden group card-hover">
            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-neon transition-colors">
              شهادة المركز الثالث في بطولة الجامعة
            </h3>
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
              <Calendar className="w-4 h-4" />
              <span>أكتوبر 2023</span>
            </div>
            <div className="bg-black/60 p-4 rounded-lg mb-4">
              <p className="text-gray-300">
                شهادة تقدير من الجامعة للحصول على المركز الثالث في بطولة مصارعة الذراعين
                على مستوى الجامعة، بعد منافسة قوية مع أفضل المتسابقين.
              </p>
            </div>
            <div className="h-48 rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="شهادة المركز الثالث في بطولة الجامعة"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 overflow-hidden group card-hover">
            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-neon transition-colors">
              شهادة المركز الثالث في بطولة الجيم
            </h3>
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
              <Calendar className="w-4 h-4" />
              <span>يناير 2024</span>
            </div>
            <div className="bg-black/60 p-4 rounded-lg mb-4">
              <p className="text-gray-300">
                شهادة تقدير للحصول على المركز الثالث في بطولة كمال الأجسام المحلية،
                بعد تدريب مكثف وجهد متواصل استمر لعدة أشهر.
              </p>
            </div>
            <div className="h-48 rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="شهادة المركز الثالث في بطولة الجيم"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

interface AchievementCardProps {
  achievement: Achievement;
  index: number;
  future?: boolean;
}

const AchievementCard = ({ achievement, index, future = false }: AchievementCardProps) => (
  <Card className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 overflow-hidden hover:border-neon/30 transition-all group card-hover [--animation-delay:3]">
    <CardContent className="p-0">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
        <img
          src={achievement.image}
          alt={achievement.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-neon text-black font-semibold text-sm px-3 py-1 rounded-full z-20 flex items-center gap-1">
          {future ? <Clock className="w-4 h-4" /> : <Trophy className="w-4 h-4" />}
          <span>{future ? "مستقبلي" : "منجز"}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-neon transition-colors">
          {achievement.title}
        </h3>
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
          <Calendar className="w-4 h-4" />
          <span>{achievement.date}</span>
        </div>
        <p className="text-gray-300 mb-4">{achievement.description}</p>
        {future && (
          <div className="flex items-center gap-1 text-sm text-neon group-hover:text-white transition-colors">
            <span>أعمل على تحقيقه</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        )}
      </div>
    </CardContent>
  </Card>
);

export default Achievements;
