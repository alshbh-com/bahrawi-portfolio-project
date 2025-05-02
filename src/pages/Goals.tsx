
import Section from "@/components/Section";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Target, TrendingUp, BookOpen, BatteryCharging } from "lucide-react";

interface Goal {
  id: string;
  title: string;
  description: string;
  progress: number;
  icon: React.ReactNode;
  timeframe: string;
}

const Goals = () => {
  const academicGoals: Goal[] = [
    {
      id: "academic1",
      title: "تحقيق تقدير ممتاز في الجامعة",
      description: "الحصول على تقدير ممتاز في جميع مواد هندسة البترول والحفاظ على معدل تراكمي مرتفع.",
      progress: 70,
      icon: <BookOpen className="w-10 h-10 text-neon" />,
      timeframe: "حتى 2026"
    },
    {
      id: "academic2",
      title: "مشروع تخرج مبتكر",
      description: "تطوير مشروع تخرج مبتكر في مجال هندسة البترول يقدم حلولًا مستدامة لتحديات الطاقة.",
      progress: 40,
      icon: <BatteryCharging className="w-10 h-10 text-neon" />,
      timeframe: "2025-2026"
    }
  ];

  const careerGoals: Goal[] = [
    {
      id: "career1",
      title: "العمل في شركة بترول عالمية",
      description: "الانضمام لإحدى الشركات العالمية الكبرى في مجال البترول والطاقة لاكتساب الخبرة العملية.",
      progress: 25,
      icon: <TrendingUp className="w-10 h-10 text-neon" />,
      timeframe: "بعد 2026"
    },
    {
      id: "career2",
      title: "تأسيس مشروع خاص",
      description: "إنشاء مشروع خاص في مجال الطاقة المستدامة والحلول البيئية المرتبطة بصناعة البترول.",
      progress: 15,
      icon: <Target className="w-10 h-10 text-neon" />,
      timeframe: "2030"
    }
  ];

  const sportGoals: Goal[] = [
    {
      id: "sport1",
      title: "المشاركة في بطولة إقليمية",
      description: "الاستعداد والمشاركة في بطولة إقليمية لمصارعة الذراعين وتحقيق مركز متقدم.",
      progress: 55,
      icon: <Target className="w-10 h-10 text-neon" />,
      timeframe: "2025"
    },
    {
      id: "sport2",
      title: "تطوير مستوى لياقة متقدم",
      description: "الوصول لمستوى متقدم من اللياقة البدنية والقوة العضلية من خلال برنامج تدريبي مكثف.",
      progress: 65,
      icon: <TrendingUp className="w-10 h-10 text-neon" />,
      timeframe: "2024-2025"
    }
  ];

  return (
    <div>
      <Section id="vision" title="رؤيتي المستقبلية" align="center">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xl text-gray-300 mb-6">
            أطمح لأن أكون من الكفاءات الرائدة في مجال هندسة البترول، مع الاستمرار في تطوير مهاراتي الرياضية والشخصية.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 px-6 py-3 rounded-full">
              <span className="text-neon">الطموح</span>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 px-6 py-3 rounded-full">
              <span className="text-neon">الابتكار</span>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 px-6 py-3 rounded-full">
              <span className="text-neon">التحدي</span>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 px-6 py-3 rounded-full">
              <span className="text-neon">الإصرار</span>
            </div>
          </div>
        </div>

        <div className="space-y-16">
          {/* الأهداف الأكاديمية */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">الأهداف الأكاديمية</h3>
              <Separator className="bg-gray-700" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {academicGoals.map((goal, index) => (
                <GoalCard key={goal.id} goal={goal} index={index} />
              ))}
            </div>
          </div>

          {/* الأهداف المهنية */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">الأهداف المهنية</h3>
              <Separator className="bg-gray-700" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {careerGoals.map((goal, index) => (
                <GoalCard key={goal.id} goal={goal} index={index} />
              ))}
            </div>
          </div>

          {/* الأهداف الرياضية */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">الأهداف الرياضية</h3>
              <Separator className="bg-gray-700" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sportGoals.map((goal, index) => (
                <GoalCard key={goal.id} goal={goal} index={index} />
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

interface GoalCardProps {
  goal: Goal;
  index: number;
}

const GoalCard = ({ goal, index }: GoalCardProps) => (
  <div 
    className="p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 group hover:border-neon/30 transition-all card-hover animate-fade-in"
    style={{ animationDelay: `${index * 0.15}s` }}
  >
    <div className="flex flex-col h-full">
      <div className="mb-4">{goal.icon}</div>
      <h4 className="text-xl font-bold mb-2 text-white group-hover:text-neon transition-colors">{goal.title}</h4>
      <p className="text-gray-300 mb-6 flex-grow">{goal.description}</p>
      <div className="mt-auto">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-400">الإطار الزمني: {goal.timeframe}</span>
          <span className="text-neon">{goal.progress}%</span>
        </div>
        <Progress value={goal.progress} className="h-2 bg-gray-700">
          <div 
            className="h-full bg-gradient-to-r from-neon/60 to-neon rounded-full"
            style={{ width: `${goal.progress}%` }}
          ></div>
        </Progress>
      </div>
    </div>
  </div>
);

export default Goals;
