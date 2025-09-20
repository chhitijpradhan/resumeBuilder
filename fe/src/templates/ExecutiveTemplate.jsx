import React, { forwardRef } from 'react';


const ExecutiveTemplate = (({ user }) => {

  const skillsArray = Array.isArray(user?.skills)
    ? user?.skills
    : user?.skills?.split(',') || [];

  const educationList = Array.isArray(user?.education) ? user?.education : [];
  const experienceList = Array.isArray(user?.experience) ? user?.experience : [];

  return (
    <div className="flex w-[900px] min-h-[1000px] mx-auto shadow-lg border border-gray-200 font-sans bg-white">

      {/* Header */}
      <header className="border-b-2 border-black pb-4 mb-6">
        <h1 className="text-4xl font-bold">{user?.name}</h1>
        <p className="text-md">
          {user?.email} | {user?.phone} | {user?.address}
        </p>
      </header>

      {/* Summary */}
      {user?.summary && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b border-gray-400 mb-2">Professional Summary</h2>
          <p>{user?.summary}</p>
        </section>
      )}

      {/* Education */}
      {educationList.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b border-gray-400 mb-2">Education</h2>
          {educationList.map((edu, index) => (
            <div key={index} className="mb-2">
              <p className="font-bold">
                {edu.degree || 'Degree'} - {edu.institution || 'Institution'}
              </p>
              <p className="text-sm text-gray-600">{edu.year || '-'}</p>
            </div>
          ))}
        </section>
      )}

      {/* Experience */}
      {experienceList.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b border-gray-400 mb-2">Experience</h2>
          {experienceList.map((exp, index) => (
            <div key={index} className="mb-4">
              <p className="font-bold">
                {exp.role || exp.jobTitle || 'Job Title'} - {exp.company || 'Company'}
              </p>
              <p className="text-sm text-gray-600">{exp.duration || '-'}</p>
              <p>{exp.description || '-'}</p>
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {skillsArray.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold border-b border-gray-400 mb-2">Skills</h2>
          <ul className="list-disc list-inside">
            {skillsArray.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
});

export default ExecutiveTemplate;
