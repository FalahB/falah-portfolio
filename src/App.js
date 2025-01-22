import React, { useState } from 'react';
import { FileText, TrendingUp, Mail, Linkedin, X } from 'lucide-react';

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="prose max-w-none">
            {project.content}
          </div>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectDetails = {
    smiley: {
      title: "Support Quality Analysis: Customer Interaction Framework",
      content: (
        <div>
          <h4 className="font-semibold mb-4">Project Overview</h4>
          <p className="mb-4">Analysis of customer service interactions using Shopify's standardized 5As framework:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Acknowledge - Repeating back customer's issue</li>
            <li>Ask - Gathering context through effective questioning</li>
            <li>Align - Demonstrating understanding and empathy</li>
            <li>Assure - Confirming ability to resolve the issue</li>
            <li>After - Following up to ensure satisfaction</li>
          </ul>
          
          <h4 className="font-semibold mb-4">Key Metrics Analysis</h4>
          <ul className="list-disc pl-6 mb-4">
            <li>59 Chat Transcripts analyzed</li>
            <li>43 Smiley ratings received</li>
            <li>7 Neutral ratings</li>
            <li>10 Frowny ratings</li>
          </ul>

          <h4 className="font-semibold mb-4">Resolution Time Analysis</h4>
          <p className="mb-4">Compared October vs November performance:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Smiley ratings: 50 mins → 42 mins average resolution</li>
            <li>Neutral ratings: 35 mins → 45 mins</li>
            <li>Frowny ratings: 28 mins → 29 mins</li>
          </ul>

          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h4 className="font-semibold mb-2">Impact</h4>
            <ul className="list-disc pl-6">
              <li>20% improvement in team satisfaction scores</li>
              <li>Developed new support guidelines</li>
              <li>Created training materials based on best practices</li>
            </ul>
          </div>
        </div>
      )
    },
    autoAdd: {
      title: "Product Support Review: Automatically Add to Cart Functionality",
      content: (
        <div>
          <h4 className="font-semibold mb-4">Project Overview</h4>
          <p className="mb-4">Strategic analysis of Shopify Discounts feature focusing on merchant needs for automatic product addition functionality.</p>
          
          <h4 className="font-semibold mb-4">Methodology</h4>
          <ul className="list-disc pl-6 mb-4">
            <li>Analyzed 337 support tickets using Looker Studio for data extraction</li>
            <li>Conducted detailed Excel analysis of merchant requests and pain points</li>
            <li>Focused on enterprise merchant segment needs</li>
          </ul>

          <h4 className="font-semibold mb-4">Key Findings</h4>
          <ul className="list-disc pl-6 mb-4">
            <li>25% of enterprise merchants requested this functionality</li>
            <li>Most common use case: Buy X Get Y promotions</li>
            <li>Current workarounds often require third-party apps</li>
            <li>Identified potential annual savings of $49K in support costs</li>
          </ul>

          <h4 className="font-semibold mb-4">Common Merchant Challenges</h4>
          <ul className="list-disc pl-6 mb-6">
            <li>Issues with Discount Codes (39% of tickets)</li>
            <li>Setting Up Promotions (26% of tickets)</li>
            <li>Integration with Third-Party Apps (22% of tickets)</li>
          </ul>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Recommendations</h4>
            <ul className="list-disc pl-6">
              <li>Enhance documentation for current workarounds</li>
              <li>Explore native functionality development</li>
              <li>Create better integration guides for third-party solutions</li>
            </ul>
          </div>
        </div>
      )
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white shadow">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Falah Ali Bashir</h1>
            <p className="text-gray-500 italic">Portfolio under redesign</p>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">About</h2>
          <p className="text-gray-600 mb-4">
            Data-driven analyst with experience in product insights, customer experience optimization, and operational improvements. 
            Passionate about transforming complex data into actionable business strategies.
          </p>
          <div className="flex gap-4">
            <a href="mailto:falah.bashir@live.com" className="flex items-center text-blue-600 hover:text-blue-800">
              <Mail className="w-4 h-4 mr-2" />
              Email
            </a>
            <a href="https://www.linkedin.com/in/falah-ali-bashir/" className="flex items-center text-blue-600 hover:text-blue-800">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </a>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Support Quality Analysis: Customer Interaction Framework</h3>
                <p className="text-gray-600 mb-4">
                  Leveraged internal data analytics platforms to analyze customer support interactions and made recommendations 
                  to improve teammates' chat structure and workflow. Implementation of these recommendations led to a 
                  <strong> 20% increase in team satisfaction scores</strong> and reduced average handling time by 
                  <strong> 10 minutes</strong>, significantly improving team efficiency.
                </p>
                <div className="flex space-x-4">
                  <div className="flex flex-wrap gap-2 flex-grow">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Data Analysis</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Customer Experience</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Process Optimization</span>
                  </div>
                  <a 
                    href="/falah-portfolio/smiley-analysis.pdf"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-50 rounded-lg">
                <FileText className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Product Support Review: Automatically Add to Cart Functionality</h3>
                <p className="text-gray-600 mb-4">
                  Led strategic analysis of Shopify Discounts feature using Looker Studio to identify and extract relevant support tickets. 
                  Conducted detailed analysis in Excel, uncovering <strong>$49K in annual cost-saving opportunities</strong> and revealing that 
                  <strong> 25% of enterprise merchants</strong> requested enhanced functionality. Created detailed documentation with 
                  actionable recommendations for feature improvements based on user needs and support patterns.
                </p>
                <div className="flex space-x-4">
                  <div className="flex flex-wrap gap-2 flex-grow">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Looker Studio</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Excel</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Product Analytics</span>
                  </div>
                  <a 
                    href="/falah-portfolio/auto-add-analysis.pdf"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    View Analysis →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-3">Analysis Tools</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Excel (Advanced)</li>
                <li>Looker Studio</li>
                <li>Power BI</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-3">Programming</h3>
              <ul className="text-gray-600 space-y-2">
                <li>SQL</li>
                <li>Python</li>
                <li>R</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-3">Business Tools</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Salesforce</li>
                <li>FactSet</li>
                <li>Crunchbase</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Certifications & Professional Development</h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold">Certifications</h3>
              <p className="text-gray-600">CFA Program - Passed Level I</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold">Professional Development</h3>
              <ul className="text-gray-600 space-y-1">
                <li>Project Management Foundations Course - University of Toronto</li>
                <li>Product Management Course - General Assembly</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <ProjectModal 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)}
        project={selectedProject ? projectDetails[selectedProject] : null}
      />
    </div>
  );
};

export default Portfolio;
