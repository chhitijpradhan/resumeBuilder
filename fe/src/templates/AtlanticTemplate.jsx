import React, { forwardRef } from 'react';


const AtlanticTemplate = forwardRef(({ user }, ref) => {
  const skills = Array.isArray(user?.skills)
    ? user.skills
    : user?.skills?.split(',') || [];

  return (
    <div ref={ref} className="flex w-[900px] min-h-[1000px] mx-auto shadow-lg border border-gray-200 font-sans bg-white">
      {/* Left Panel - Dark Sidebar */}
      <div className="w-1/3 bg-[#1E2A38] text-gray-100 p-8 flex flex-col space-y-8">
        {/* Header Section */}
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-white">{user?.name}</h1>
          <p className="text-sm text-gray-300">{user?.title}</p>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/20">
            <img
              src={user?.image || 'https://randomuser.me/api/portraits/men/75.jpg'}
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white/80">Contact</h2>
          <div className="space-y-2 text-xs">
            {user?.email && (
              <div className="flex items-center">
                <span className="mr-2">📧</span>
                <span>{user.email}</span>
              </div>
            )}
            {user?.phone && (
              <div className="flex items-center">
                <span className="mr-2">📱</span>
                <span>{user.phone}</span>
              </div>
            )}
            {user?.address && (
              <div className="flex items-center">
                <span className="mr-2">📍</span>
                <span>{user.address}</span>
              </div>
            )}
            {user?.linkedin && (
              <div className="flex items-center">
                <span className="mr-2">🔗</span>
                <span>{user.linkedin}</span>
              </div>
            )}
            {user?.website && (
              <div className="flex items-center">
                <span className="mr-2">🌐</span>
                <span>{user.website}</span>
              </div>
            )}
          </div>
        </div>

        {/* Profile Summary */}
        {user?.summary && (
          <div className="space-y-2">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white/80 border-b border-white/20 pb-1">
              Profile
            </h2>
            <p className="text-xs leading-relaxed text-gray-300">{user.summary}</p>
          </div>
        )}

        {/* Languages */}
        {user?.languages?.length > 0 && (
          <div className="space-y-2">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white/80 border-b border-white/20 pb-1">
              Languages
            </h2>
            <ul className="space-y-1 text-xs">
              {user.languages.map((lang, i) => (
                <li key={i} className="flex items-center">
                  <span className="w-2 h-2 bg-white/50 rounded-full mr-2"></span>
                  {lang}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Awards */}
        {user?.awards?.length > 0 && (
          <div className="space-y-2">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white/80 border-b border-white/20 pb-1">
              Awards
            </h2>
            <ul className="space-y-2 text-xs">
              {user.awards.map((award, i) => (
                <li key={i} className="flex">
                  <span className="mr-2">🏆</span>
                  <span>{award}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Right Panel - Main Content */}
      <div className="w-2/3 p-8 space-y-8">
        {/* Experience Section */}
        {user?.experience?.length > 0 && (
          <section className="space-y-6">
            <h2 className="text-xl font-bold text-[#1E2A38] border-b-2 border-[#1E2A38] pb-1">
              Professional Experience
            </h2>
            {user.experience.map((exp, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-base text-[#1E2A38]">
                    {exp?.role || 'Position'}
                  </h3>
                  <span className="text-xs bg-[#1E2A38] text-white px-2 py-1 rounded">
                    {exp?.duration || 'Dates'}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{exp?.company || 'Company'}</span>
                  <span className="text-gray-500">{exp?.location || 'Location'}</span>
                </div>
                <ul className="list-disc list-inside text-sm space-y-1 pl-2 ml-2">
                  {exp?.points?.map((point, j) => (
                    <li key={j} className="leading-snug">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        )}

        {/* Education Section */}
        {user?.education?.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-[#1E2A38] border-b-2 border-[#1E2A38] pb-1">
              Education
            </h2>
            {user.education.map((edu, i) => (
              <div key={i} className="space-y-1">
                <h3 className="font-bold text-sm text-[#1E2A38]">
                  {edu?.degree || 'Degree'}
                </h3>
                <div className="flex justify-between text-xs">
                  <span className="font-medium">{edu?.institution || 'Institution'}</span>
                  <span className="text-gray-500">{edu?.year || 'Year'}</span>
                </div>
                <p className="text-xs text-gray-600">{edu?.location || 'Location'}</p>
              </div>
            ))}
          </section>
        )}

        {/* Skills Section */}
        {skills?.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-[#1E2A38] border-b-2 border-[#1E2A38] pb-1">
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-100 text-sm rounded-full text-[#1E2A38]"
                >
                  {skill.trim()}
                </span>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
});

export default AtlanticTemplate;