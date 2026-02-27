import React from 'react';

export default function VCMessageFull() {
  const [tab, setTab] = React.useState('message');

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="section-title-box">VICE CHANCELLOR'S MESSAGE</div>
      <div className="content-card mt-4">
        <div className="flex justify-center gap-8 mb-8 border-b pb-4">
          <button 
            onClick={() => setTab('message')}
            className={`font-bold transition-colors ${tab === 'message' ? 'text-gcuh-maroon border-b-2 border-gcuh-maroon' : 'text-slate-400 hover:text-gcuh-maroon'}`}
          >
            Message
          </button>
          <button 
            onClick={() => setTab('profile')}
            className={`font-bold transition-colors ${tab === 'profile' ? 'text-gcuh-maroon border-b-2 border-gcuh-maroon' : 'text-slate-400 hover:text-gcuh-maroon'}`}
          >
            Profile
          </button>
        </div>

        {tab === 'message' ? (
          <div className="space-y-8">
            <div className="max-w-3xl mx-auto rounded-xl overflow-hidden shadow-xl border-4 border-gcuh-gold">
              <img 
                src="https://gcuh.edu.pk/images/Prof-Dr-Moazzam-Ali-Khan.jpg" 
                alt="VC" 
                className="w-full"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://gcuh.edu.pk/images/slider/09-12-2025-Slide-41.JPG';
                }}
              />
              <div className="bg-gcuh-maroon text-white p-4 text-center">
                <h3 className="text-xl font-bold">PROF. DR. MOAZZAM ALI KHAN</h3>
                <p className="text-sm text-gcuh-gold">Vice Chancellor, GC University Hyderabad</p>
              </div>
            </div>

            <div className="space-y-6 text-slate-700 leading-relaxed">
              <p>
                It is both an honour and a profound responsibility to assume the office of Vice Chancellor of Government College University Hyderabad. This institution occupies a distinctive place in the academic landscape of Sindh, carrying forward a respected legacy of learning while steadily evolving as a modern public university.
              </p>
              <p>
                Although GC University Hyderabad is a relatively young university, it inherits a strong academic tradition rooted in decades of college-level education. This legacy provides a solid foundation upon which we are building a progressive, inclusive, and forward-looking university one that responds to contemporary challenges while remaining anchored in enduring educational values.
              </p>
              <p>
                My vision is to transform GC University Hyderabad into a vibrant centre of teaching, research, and innovation. We are committed to academic reforms that emphasize quality education, outcome-based learning, and meaningful research aligned with national priorities and global standards. Strengthening faculty development, modernizing curricula, improving governance, and promoting a culture of accountability and transparency remain central to this reform agenda.
              </p>
              <p>
                Equally important is our focus on students. We aim to provide an environment that nurtures intellectual curiosity, critical thinking, creativity, and ethical leadership. Through academic excellence, co-curricular engagement, and community outreach, we seek to prepare graduates who are confident, socially responsible, and capable of contributing positively to society. I would also like to foster linkages, especially with the international sector, to broaden our global engagement. Additionally, I would like our students, after completing their degrees, to emerge not only as employees but also as employers, empowered to create opportunities.
              </p>
              <p>
                Progress can only be achieved through collective effort. I invite faculty members, administrative staff, students, alumni, and stakeholders to work together in shaping the future of GC University Hyderabad. With shared commitment and purpose, we can elevate this institution into a respected centre of learning and innovation, serving the region and the nation with distinction.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t">
              <p className="font-bold text-gcuh-maroon">Prof. Dr. Moazzam Ali Khan</p>
              <p className="text-sm text-slate-500">Vice Chancellor</p>
              <p className="text-sm text-slate-500">GC University Hyderabad</p>
            </div>
          </div>
        ) : (
          <div className="p-12 text-center text-slate-500">
            Profile content would go here...
          </div>
        )}
      </div>
    </div>
  );
}
