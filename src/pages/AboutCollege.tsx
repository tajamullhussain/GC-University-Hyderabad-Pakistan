import React from 'react';

export default function AboutCollege() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="section-title-box">About College</div>
      <div className="content-card mt-4 space-y-6">
        <p className="text-slate-700 leading-relaxed">
          The college was established in 1917. Prior to the partition of the sub-continent, a board of trustees was administering this institution. However, all of them migrated to India in 1947. The Government of Sindh took over the college on 21st June 1948. The college imparted education up to intermediate level to the student of the faculty of science and up to B.A (Hons:) to the student belonging to the faculty of Arts. Total number of the student enrolled in 1948-49 was 224 and total number of teacher was 25. There was co-education in this institute up to 1951-52 as there was no separate college for girls by then.
        </p>
        <p className="text-slate-700 leading-relaxed">
          The faculty of science was upgraded to the degree classes in March 1951 as the number of students wishing to seek admission in B.Sc. class soared rapidly. In 1961-62 the University of Sindh took over teaching of honours classes. Ever since 1948, the college continues to occupy unique positions as a premier institution of the province of Sindh, the students of this college have been achieving enviable position in various examination conducted by the board of intermediate & secondary education, Hyderabad and the University of Sindh. A glimpse of the honours list placed in the assembly hall bearers testimony to this claim likewise, our students continue to win a large number of prizes and trophies in the field of extra-curricular activities. A large number of old boys of this college are now serving the nation in senior administrative position and other field of nation building activities.
        </p>

        <div className="mt-12">
          <table className="table-gcuh">
            <thead>
              <tr>
                <th>FOUNDATION</th>
                <th>1st October, 1917</th>
                <th>It was founded on 1st October 1917 by Mrs. Annie Besant who was the President of International Theosophical Society, National Education Movement and National Education Trust.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="bg-gcuh-maroon text-white font-bold"></td>
                <td className="bg-gcuh-maroon text-white font-bold">1917</td>
                <td className="bg-gcuh-maroon text-white font-bold">Contemplated by a devoted group of renowned philanthropists and elite of the city under the aegis of a trust "Diwan Metharam Gidu Mal Darmada Trust"</td>
              </tr>
              <tr>
                <td className="bg-gcuh-maroon text-white font-bold"></td>
                <td className="bg-gcuh-maroon text-white font-bold">1917</td>
                <td className="bg-gcuh-maroon text-white font-bold">The Land of the college beside the Phuleli Canal was donated by Seth Pertab Rai</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
