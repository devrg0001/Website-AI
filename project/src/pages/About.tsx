import React from 'react';

export default function About() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <img
              src="/dev-gupta.jpg"
              alt="Dev R. Gupta"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Dev R. Gupta</h1>
            <h2 className="text-2xl text-blue-600 mb-8">Founder & CEO</h2>
            <div className="prose prose-lg text-gray-600 space-y-6">
              <p>
                Dev R. Gupta is a passionate high school student at the prestigious Horace Mann School, 
                driven by a vision to leverage technology for global healthcare improvement. Born in India 
                and having lived in Singapore and the United States, Dev's multicultural background has 
                shaped his unique perspective on global healthcare disparities.
              </p>
              <p>
                As the founder of Sow4future, a financial literacy initiative, Dev has already demonstrated 
                his commitment to empowering others through education. His completion of the rigorous Kumon 
                program further underscores his dedication to academic excellence and continuous learning.
              </p>
              <p>
                Inspired by his Indian heritage and motivated by the healthcare accessibility challenges he 
                observed across different countries, Dev developed an innovative AI-powered diagnostic tool. 
                This groundbreaking project uses advanced machine learning algorithms to analyze X-ray images, 
                capable of detecting a range of conditions from pneumonia to fractures.
              </p>
              <p>
                Dev's vision extends beyond technological innovation. He sees this project as a stepping stone 
                towards more affordable and accessible healthcare globally, particularly in regions where trained 
                radiologists are scarce. By automating the diagnostic process, Dev aims to reduce human error, 
                speed up diagnoses, and ultimately save lives.
              </p>
              <p>
                Despite his young age, Dev's work demonstrates a mature understanding of global health challenges. 
                He continues to refine and expand his model, driven by a deep-seated desire to make a positive 
                impact on the world, especially in developing nations like India.
              </p>
              <p>
                Dev's journey is a testament to the power of combining technological expertise with a passion for 
                social good. Through this project, he hopes to inspire other young innovators to use their skills 
                and knowledge to address pressing global challenges, proving that age is no barrier to making a 
                significant impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}