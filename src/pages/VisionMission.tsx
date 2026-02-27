import React from 'react';

export default function VisionMission() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="section-title-box">Vision & Mission</div>
      <div className="content-card mt-4">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gcuh-maroon mb-4">Vision:</h2>
          <p className="text-slate-700 leading-relaxed">
            Impart modern social, ethical, and cultural education to youth in order to nurture and develop leadership for a prosperous Pakistan.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gcuh-maroon mb-4">Mission:</h2>
          <p className="text-slate-700 leading-relaxed">
            Government College University Hyderabad develops human resources and imparts quality education in different fields of natural and social sciences. GCUH faculty is equipped with selfless dedication, commitment and responsibility to teach and be proud of their culture and to uplift an individual and society as a whole to contribute to the national and global progress, prosperity, peace and harmony.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold text-gcuh-maroon mb-4">Core Values</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
            <li>Excellence</li>
            <li>Integrity</li>
            <li>Diversity</li>
            <li>Social Responsibility</li>
            <li>Innovation</li>
            <li>Openness</li>
            <li>Collaboration</li>
            <li>Global Citizenship</li>
            <li>Life Long Learning</li>
          </ul>
        </div>

        <div className="mt-12 border-t pt-12">
          <img 
            src="https://gcuh.edu.pk/images/IMG-20231027-WA0003.jpg" 
            alt="Vision Mission Chart" 
            className="w-full max-w-4xl mx-auto shadow-lg rounded"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg';
            }}
          />
        </div>
      </div>
    </div>
  );
}
