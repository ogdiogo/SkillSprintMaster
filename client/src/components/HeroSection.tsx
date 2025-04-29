import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-gradient-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Learn New Skills in Just 5 Minutes a Day</h1>
            <p className="text-blue-100 text-lg mb-6">Perfect for remote workers who want to grow professionally without disrupting their busy schedule.</p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Button className="px-6 py-3 bg-white text-primary font-medium rounded-md shadow-lg hover:bg-gray-100 transition">
                Get Started Free
              </Button>
              <Button variant="outline" className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-blue-600 transition">
                Learn More
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Person learning on laptop" 
              className="rounded-lg shadow-xl"
              width="500"
              height="375"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
