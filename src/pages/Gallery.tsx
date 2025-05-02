
import { useState } from "react";
import Section from "@/components/Section";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { X, Camera, Dumbbell, Image } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  category: "personal" | "sports" | "photography";
  image: string;
  description: string;
}

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: "img1",
      title: "صورة شخصية",
      category: "personal",
      image: "/lovable-uploads/39dac111-3a81-4109-a4eb-6062d0db1460.png",
      description: "صورة شخصية تم التقاطها في إحدى الزيارات إلى مكان تراثي."
    },
    {
      id: "img2",
      title: "في مناسبة عامة",
      category: "personal",
      image: "/lovable-uploads/b634a9de-0ffa-4999-94bb-adc9fbc9eb1d.png",
      description: "صورة في إحدى المناسبات العامة بعد حضور فعالية مهمة."
    },
    {
      id: "img3",
      title: "في معرض الأزياء",
      category: "personal",
      image: "/lovable-uploads/bb208097-fd15-41b9-b31c-30fbc6dd279a.png",
      description: "صورة للذكرى في معرض الأزياء الرسمية."
    },
    {
      id: "img4",
      title: "تمرين في الجيم",
      category: "sports",
      image: "/placeholder.svg",
      description: "أثناء جلسة تدريبية في صالة الألعاب الرياضية."
    },
    {
      id: "img5",
      title: "مسابقة مصارعة الذراعين",
      category: "sports",
      image: "/placeholder.svg",
      description: "لحظة منافسة في بطولة مصارعة الذراعين."
    },
    {
      id: "img6",
      title: "لقطة فنية للطبيعة",
      category: "photography",
      image: "/placeholder.svg",
      description: "صورة فنية للطبيعة التقطتها بعدستي الخاصة."
    }
  ];

  const filteredItems = activeTab === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <div>
      <Section id="gallery" title="معرض الصور" align="center">
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-4 w-full max-w-xl bg-gray-900/70">
              <TabsTrigger value="all" className="data-[state=active]:bg-neon/20 data-[state=active]:text-neon">
                الكل
              </TabsTrigger>
              <TabsTrigger value="personal" className="data-[state=active]:bg-neon/20 data-[state=active]:text-neon">
                شخصية
              </TabsTrigger>
              <TabsTrigger value="sports" className="data-[state=active]:bg-neon/20 data-[state=active]:text-neon">
                رياضية
              </TabsTrigger>
              <TabsTrigger value="photography" className="data-[state=active]:bg-neon/20 data-[state=active]:text-neon">
                تصويري
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="animate-fade-in">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item, index) => (
                <GalleryCard key={item.id} item={item} index={index} onSelect={setSelectedImage} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </Section>

      {/* صندوق حوار للصورة المكبرة */}
      <Dialog open={Boolean(selectedImage)} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="sm:max-w-2xl bg-gray-900/95 border-gray-800">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-gray-400 hover:text-white p-1.5 rounded-full bg-black/50 hover:bg-black/80 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
          {selectedImage && (
            <div className="pt-6">
              <div className="mb-4 text-center">
                <h3 className="text-xl font-bold text-white">{selectedImage.title}</h3>
                <p className="text-gray-400 mt-2">{selectedImage.description}</p>
              </div>
              <div className="overflow-hidden rounded-lg">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto object-contain max-h-[70vh]"
                />
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

interface GalleryCardProps {
  item: GalleryItem;
  index: number;
  onSelect: (item: GalleryItem) => void;
}

const GalleryCard = ({ item, index, onSelect }: GalleryCardProps) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "personal":
        return <Image className="w-4 h-4" />;
      case "sports":
        return <Dumbbell className="w-4 h-4" />;
      case "photography":
        return <Camera className="w-4 h-4" />;
      default:
        return <Image className="w-4 h-4" />;
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card 
          className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 overflow-hidden cursor-pointer group card-hover animate-fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
          onClick={() => onSelect(item)}
        >
          <CardContent className="p-0">
            <div className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4 bg-black/60 text-neon font-semibold text-sm px-3 py-1 rounded-full z-20 flex items-center gap-1 backdrop-blur-sm border border-neon/30">
                {getCategoryIcon(item.category)}
                <span>
                  {item.category === "personal" ? "شخصية" : 
                   item.category === "sports" ? "رياضية" : "تصويري"}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                <h3 className="text-lg font-bold text-white group-hover:text-neon transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
    </Dialog>
  );
};

export default Gallery;
