import { Card, CardContent } from "@/components/ui/card";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  alt: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "New Skill Paths for Tech Professionals",
    date: "June 15, 2023",
    description: "We've launched five new skill paths designed specifically for remote tech professionals.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    alt: "New Skill Paths"
  },
  {
    id: 2,
    title: "Mobile App 2.0 Now Available",
    date: "May 28, 2023",
    description: "Our redesigned mobile app offers improved notifications and offline learning capabilities.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    alt: "Mobile App Update"
  },
  {
    id: 3,
    title: "Enterprise Solutions for Remote Teams",
    date: "May 10, 2023",
    description: "Introducing our enterprise package for companies with distributed workforce.",
    image: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    alt: "Enterprise Solutions"
  }
];

const NewsSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Latest News</h2>
          <p className="mt-4 text-lg text-gray-600">Stay updated with our latest features and learning content.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <Card key={item.id} className="bg-gray-50 rounded-xl shadow-sm overflow-hidden border border-gray-100">
              <img 
                src={item.image} 
                alt={item.alt} 
                className="h-48 w-full object-cover" 
              />
              <CardContent className="p-6">
                <span className="text-sm text-gray-500">{item.date}</span>
                <h3 className="text-xl font-bold mt-2 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <a href="#" className="text-primary font-medium hover:text-blue-700">Read more →</a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
