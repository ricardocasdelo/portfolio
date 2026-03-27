import React from 'react';
import { PortfolioData } from '../data';
import { 
  Briefcase, 
  GraduationCap, 
  MapPin, 
  User, 
  Wrench, 
  Languages, 
  Download, 
  Edit3,
  Calendar,
  Building
} from 'lucide-react';
import { motion } from 'motion/react';

interface PortfolioViewProps {
  data: PortfolioData;
  onEdit: () => void;
  isAuthenticated: boolean;
}

export default function PortfolioView({ data, onEdit, isAuthenticated }: PortfolioViewProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans pb-20">
      {/* Header / Hero Section */}
      <header className="bg-[#0e4194] text-white pt-16 pb-24 px-6 relative overflow-hidden print:bg-white print:text-black print:pt-8 print:pb-8">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-96 h-96 rounded-full bg-white blur-3xl"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-64 h-64 rounded-full bg-blue-300 blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex-1"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">{data.personalInfo.name}</h1>
              <div className="flex flex-wrap gap-4 text-blue-100 text-sm md:text-base mt-4 print:text-gray-600">
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {data.personalInfo.dob}</span>
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {data.personalInfo.location}</span>
                <span className="flex items-center gap-1"><User className="w-4 h-4" /> {data.personalInfo.nationality}</span>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex gap-3 print:hidden"
            >
              <button 
                onClick={handlePrint}
                className="flex items-center gap-2 px-5 py-2.5 bg-white text-[#0e4194] rounded-full font-medium hover:bg-blue-50 transition-colors shadow-lg"
              >
                <Download className="w-4 h-4" />
                Descargar CV
              </button>
              <button 
                onClick={onEdit}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-colors shadow-lg ${
                  isAuthenticated 
                    ? 'bg-green-500 text-white hover:bg-green-600' 
                    : 'bg-[#1b5b97] text-white hover:bg-[#154a7c]'
                }`}
              >
                <Edit3 className="w-4 h-4" />
                {isAuthenticated ? 'Modificar Datos' : 'Editar'}
              </button>
            </motion.div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 -mt-12 relative z-20 print:mt-0 print:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Main Content Column */}
          <div className="md:col-span-2 space-y-8">
            
            {/* Profile Section */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100 print:shadow-none print:border-none print:p-0 print:mb-8"
            >
              <h2 className="text-2xl font-bold text-[#0e4194] mb-4 flex items-center gap-2 border-b border-gray-100 pb-4">
                <User className="w-6 h-6" /> Perfil Profesional
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {data.personalInfo.profile}
              </p>
            </motion.section>

            {/* Experience Section */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100 print:shadow-none print:border-none print:p-0 print:mb-8"
            >
              <h2 className="text-2xl font-bold text-[#0e4194] mb-6 flex items-center gap-2 border-b border-gray-100 pb-4">
                <Briefcase className="w-6 h-6" /> Experiencia Laboral
              </h2>
              <div className="space-y-8">
                {data.experience.map((exp, index) => (
                  <div key={exp.id} className="relative pl-6 border-l-2 border-blue-100 last:border-transparent">
                    <div className="absolute w-3 h-3 bg-[#0e4194] rounded-full -left-[7px] top-2"></div>
                    <div className="mb-1 flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                      <h3 className="text-lg font-bold text-gray-900">{exp.role}</h3>
                      <span className="text-sm font-medium text-[#1b5b97] bg-blue-50 px-3 py-1 rounded-full print:bg-transparent print:px-0">
                        {exp.period}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1 font-medium"><Building className="w-4 h-4" /> {exp.company}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {exp.location}</span>
                    </div>
                    {exp.tasks && exp.tasks.length > 0 && (
                      <ul className="list-disc list-inside text-gray-600 space-y-1 ml-2">
                        {exp.tasks.map((task, i) => (
                          <li key={i} className="text-sm">{task}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Education Section */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100 print:shadow-none print:border-none print:p-0 print:mb-8"
            >
              <h2 className="text-2xl font-bold text-[#0e4194] mb-6 flex items-center gap-2 border-b border-gray-100 pb-4">
                <GraduationCap className="w-6 h-6" /> Educación y Formación
              </h2>
              <div className="space-y-6">
                {data.education.map((edu) => (
                  <div key={edu.id} className="relative pl-6 border-l-2 border-blue-100 last:border-transparent">
                    <div className="absolute w-3 h-3 bg-[#0e4194] rounded-full -left-[7px] top-2"></div>
                    <div className="mb-1 flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                      <h3 className="text-lg font-bold text-gray-900">{edu.degree}</h3>
                      <span className="text-sm font-medium text-[#1b5b97] bg-blue-50 px-3 py-1 rounded-full print:bg-transparent print:px-0">
                        {edu.period}
                      </span>
                    </div>
                    <div className="text-gray-700 font-medium mb-1">{edu.institution}</div>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                      <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {edu.location}</span>
                    </div>
                    <div className="text-sm text-gray-500 italic">{edu.level}</div>
                  </div>
                ))}
              </div>
            </motion.section>

          </div>

          {/* Sidebar Column */}
          <div className="space-y-8">
            
            {/* Skills Section */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100 print:shadow-none print:border-none print:p-0 print:mb-8"
            >
              <h2 className="text-xl font-bold text-[#0e4194] mb-4 flex items-center gap-2 border-b border-gray-100 pb-4">
                <Wrench className="w-5 h-5" /> Capacidades
              </h2>
              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-sm font-medium print:border print:border-gray-300 print:bg-transparent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.section>

            {/* Languages Section */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100 print:shadow-none print:border-none print:p-0 print:mb-8"
            >
              <h2 className="text-xl font-bold text-[#0e4194] mb-4 flex items-center gap-2 border-b border-gray-100 pb-4">
                <Languages className="w-5 h-5" /> Idiomas
              </h2>
              <div className="space-y-4">
                {data.languages.map((lang) => (
                  <div key={lang.id} className="border-b border-gray-50 last:border-0 pb-3 last:pb-0">
                    <div className="font-bold text-gray-900">{lang.language}</div>
                    <div className="text-sm text-gray-600 mt-1">{lang.level}</div>
                  </div>
                ))}
              </div>
            </motion.section>

          </div>
        </div>
      </main>
    </div>
  );
}
