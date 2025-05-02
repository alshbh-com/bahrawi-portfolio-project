
import { useState } from "react";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Send, MapPin, Instagram, Facebook, MessageSquare } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // تقليد إرسال النموذج (في واقع الأمر سيتم إرسال البيانات إلى خادم API)
    setTimeout(() => {
      toast({
        title: "تم إرسال الرسالة بنجاح",
        description: "سيتم الرد عليك في أقرب وقت ممكن.",
        variant: "default",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-neon" />,
      label: "البريد الإلكتروني",
      value: "mohamed.elbahrawi@example.com",
    },
    {
      icon: <Phone className="w-5 h-5 text-neon" />,
      label: "رقم الهاتف",
      value: "+20 123 456 7890",
    },
    {
      icon: <MapPin className="w-5 h-5 text-neon" />,
      label: "العنوان",
      value: "القاهرة، مصر",
    },
  ];

  const socialLinks = [
    {
      icon: <Instagram className="w-6 h-6" />,
      label: "Instagram",
      url: "#instagram",
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      label: "Facebook",
      url: "#facebook",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      label: "WhatsApp",
      url: "#whatsapp",
    },
  ];

  return (
    <div>
      <Section id="contact" title="تواصل معي" align="center">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-fade-in [--animation-delay:3]">
              <h3 className="text-2xl font-bold text-white mb-6">أرسل رسالة</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    الاسم
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-gray-900/60 border-gray-700 text-white focus-visible:ring-neon"
                    placeholder="محمد أحمد"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    البريد الإلكتروني
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-gray-900/60 border-gray-700 text-white focus-visible:ring-neon"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                    رقم الهاتف
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-gray-900/60 border-gray-700 text-white focus-visible:ring-neon"
                    placeholder="+20 123 456 7890"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    الرسالة
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-32 bg-gray-900/60 border-gray-700 text-white focus-visible:ring-neon"
                    placeholder="أكتب رسالتك هنا..."
                  />
                </div>

                <Button
                  type="submit"
                  className="neon-button w-full flex items-center justify-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "جاري الإرسال..."
                  ) : (
                    <>
                      إرسال الرسالة
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            <div className="animate-fade-in [--animation-delay:5]">
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-white mb-6">معلومات التواصل</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-neon/10 border border-neon/20">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-400">{info.label}</h4>
                        <p className="text-white font-medium">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6">تابعني على</h3>
                <div className="grid grid-cols-3 gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      className="flex flex-col items-center p-4 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 transition-all hover:bg-neon/10 hover:border-neon/30"
                    >
                      <div className="text-neon mb-2">{link.icon}</div>
                      <span className="text-gray-300">{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
