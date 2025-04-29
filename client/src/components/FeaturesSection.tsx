import { Clock, ClipboardList, Zap } from "lucide-react";

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  iconBgColor 
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBgColor: string;
}) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
      <div className={`w-12 h-12 ${iconBgColor} rounded-lg flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "5-Minute Micro-Lessons",
      description: "Bite-sized lessons designed to fit into your busy schedule, making learning consistent and achievable.",
      iconBgColor: "bg-blue-100"
    },
    {
      icon: <ClipboardList className="h-6 w-6 text-secondary" />,
      title: "Smart Notifications",
      description: "Gentle reminders that adapt to your schedule, ensuring you never miss a learning opportunity.",
      iconBgColor: "bg-green-100"
    },
    {
      icon: <Zap className="h-6 w-6 text-accent" />,
      title: "Skill-Building Focused",
      description: "Content curated specifically for remote professionals looking to advance their careers.",
      iconBgColor: "bg-amber-100"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Why SkillBite Works</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">Our methodology is designed for busy professionals who want to learn efficiently.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              iconBgColor={feature.iconBgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
