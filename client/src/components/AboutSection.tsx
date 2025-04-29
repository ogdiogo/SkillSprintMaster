interface AboutBlock {
  id: number;
  title: string;
  content: string[];
  image: string;
  alt: string;
  reversed?: boolean;
}

const aboutBlocks: AboutBlock[] = [
  {
    id: 1,
    title: "Our Mission",
    content: [
      "At SkillBite, we believe that continuous learning shouldn't be a luxury. Our mission is to make professional skill development accessible to remote workers around the world through our innovative micro-learning approach.",
      "By breaking down complex skills into 5-minute daily lessons, we help busy professionals grow without disrupting their work-life balance."
    ],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    alt: "Our Mission"
  },
  {
    id: 2,
    title: "Our Method",
    content: [
      "Our educational methodology is based on cognitive science research showing that short, focused learning sessions followed by practical application lead to better skill retention.",
      "Each 5-minute lesson delivers a specific, actionable concept that you can immediately apply to your work, ensuring that learning translates to real-world results."
    ],
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    alt: "Our Method",
    reversed: true
  },
  {
    id: 3,
    title: "Our Team",
    content: [
      "We're a diverse team of remote workers ourselves, with backgrounds spanning education, technology, and professional development. We understand the unique challenges of remote work because we live them every day.",
      "Our content is created by industry experts who specialize in translating complex skills into digestible, practical learning experiences."
    ],
    image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    alt: "Our Team"
  },
  {
    id: 4,
    title: "Our Impact",
    content: [
      "Since our launch, we've helped over 50,000 remote professionals acquire new skills and advance their careers through consistent micro-learning.",
      "Our users report increased confidence, productivity, and job satisfaction after just 30 days of using SkillBite for their professional development."
    ],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    alt: "Our Impact",
    reversed: true
  },
  {
    id: 5,
    title: "Our Vision",
    content: [
      "We envision a future where continuous professional development is seamlessly integrated into the daily routine of every remote worker, regardless of their location or schedule constraints.",
      "By democratizing access to high-quality learning experiences, we aim to close skill gaps and create more equitable career advancement opportunities in the digital workforce."
    ],
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    alt: "Our Vision"
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Sobre Nós</h2>
          <p className="mt-4 text-lg text-gray-600">Learn about our mission to transform professional learning for remote workers.</p>
        </div>
        
        <div className="space-y-12">
          {aboutBlocks.map((block) => (
            <div 
              key={block.id} 
              className={`flex flex-col ${block.reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8`}
            >
              <div className="md:w-1/2">
                <img 
                  src={block.image} 
                  alt={block.alt} 
                  className="rounded-lg shadow-md" 
                  width="600" 
                  height="400"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-4">{block.title}</h3>
                {block.content.map((paragraph, index) => (
                  <p key={index} className="text-gray-600 mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
