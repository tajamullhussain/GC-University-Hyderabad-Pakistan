import React from 'react';

export default function Affiliations() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="section-title-box">Affiliated Institutes</div>
      <div className="content-card mt-4">
        <div className="mb-4 text-slate-500 font-bold">1</div>
        <table className="table-gcuh">
          <thead>
            <tr>
              <th className="w-16">#</th>
              <th>Name</th>
              <th>Programs</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-slate-50">
              <td className="font-bold">1</td>
              <td className="text-gcuh-maroon font-medium">HIAST - Hyderabad Institute Of Arts Science and Technology</td>
              <td>B.S Computer Science (Provisional)</td>
              <td>
                <a href="https://www.hiast.edu.pk/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                  https://www.hiast.edu.pk/
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
