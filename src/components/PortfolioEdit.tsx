import React, { useState } from 'react';
import { PortfolioData, Experience, Education, Language } from '../data';
import { Save, X, Plus, Trash2 } from 'lucide-react';
import { motion } from 'motion/react';

interface PortfolioEditProps {
  data: PortfolioData;
  onSave: (data: PortfolioData) => void;
  onCancel: () => void;
}

export default function PortfolioEdit({ data, onSave, onCancel }: PortfolioEditProps) {
  const [formData, setFormData] = useState<PortfolioData>(JSON.parse(JSON.stringify(data)));

  const handleChange = (section: keyof PortfolioData, field: string, value: any, index?: number) => {
    setFormData(prev => {
      const newData = { ...prev };
      if (index !== undefined && Array.isArray(newData[section])) {
        (newData[section] as any[])[index][field] = value;
      } else if (typeof newData[section] === 'object' && !Array.isArray(newData[section])) {
        (newData[section] as any)[field] = value;
      } else {
        (newData as any)[section] = value;
      }
      return newData;
    });
  };

  const handleArrayAdd = (section: 'experience' | 'education' | 'languages', newItem: any) => {
    setFormData(prev => ({
      ...prev,
      [section]: [...prev[section], { ...newItem, id: Date.now().toString() }]
    }));
  };

  const handleArrayRemove = (section: 'experience' | 'education' | 'languages', index: number) => {
    setFormData(prev => {
      const newArray = [...prev[section]];
      newArray.splice(index, 1);
      return { ...prev, [section]: newArray };
    });
  };

  const handleSkillsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const skillsArray = e.target.value.split(',').map(s => s.trim()).filter(Boolean);
    setFormData(prev => ({ ...prev, skills: skillsArray }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-[#0e4194] text-white p-6 sticky top-0 z-50 shadow-md">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Modo Edición</h1>
          <div className="flex gap-3">
            <button 
              onClick={onCancel}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
            >
              <X className="w-4 h-4" /> Cancelar
            </button>
            <button 
              onClick={handleSubmit}
              className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg font-medium transition-colors shadow-lg"
            >
              <Save className="w-4 h-4" /> Guardar Cambios
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6 space-y-8 mt-6">
        
        {/* Personal Info */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-xl font-bold text-[#0e4194] mb-4 border-b pb-2">Información Personal</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
              <input 
                type="text" 
                value={formData.personalInfo.name}
                onChange={(e) => handleChange('personalInfo', 'name', e.target.value)}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-[#0e4194] outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Fecha de Nacimiento</label>
              <input 
                type="text" 
                value={formData.personalInfo.dob}
                onChange={(e) => handleChange('personalInfo', 'dob', e.target.value)}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-[#0e4194] outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nacionalidad</label>
              <input 
                type="text" 
                value={formData.personalInfo.nationality}
                onChange={(e) => handleChange('personalInfo', 'nationality', e.target.value)}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-[#0e4194] outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Ubicación</label>
              <input 
                type="text" 
                value={formData.personalInfo.location}
                onChange={(e) => handleChange('personalInfo', 'location', e.target.value)}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-[#0e4194] outline-none"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Perfil Profesional</label>
              <textarea 
                rows={4}
                value={formData.personalInfo.profile}
                onChange={(e) => handleChange('personalInfo', 'profile', e.target.value)}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-[#0e4194] outline-none resize-y"
              />
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex justify-between items-center mb-4 border-b pb-2">
            <h2 className="text-xl font-bold text-[#0e4194]">Experiencia Laboral</h2>
            <button 
              onClick={() => handleArrayAdd('experience', { role: '', company: '', period: '', location: '', tasks: [] })}
              className="flex items-center gap-1 text-sm bg-blue-50 text-[#0e4194] px-3 py-1 rounded-lg hover:bg-blue-100"
            >
              <Plus className="w-4 h-4" /> Añadir
            </button>
          </div>
          <div className="space-y-6">
            {formData.experience.map((exp, index) => (
              <div key={exp.id} className="p-4 border border-gray-100 bg-gray-50 rounded-lg relative">
                <button 
                  onClick={() => handleArrayRemove('experience', index)}
                  className="absolute top-4 right-4 text-red-500 hover:bg-red-50 p-1 rounded"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pr-8">
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">Cargo</label>
                    <input type="text" value={exp.role} onChange={(e) => handleChange('experience', 'role', e.target.value, index)} className="w-full p-2 border rounded focus:ring-1 focus:ring-[#0e4194] outline-none text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">Empresa</label>
                    <input type="text" value={exp.company} onChange={(e) => handleChange('experience', 'company', e.target.value, index)} className="w-full p-2 border rounded focus:ring-1 focus:ring-[#0e4194] outline-none text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">Periodo</label>
                    <input type="text" value={exp.period} onChange={(e) => handleChange('experience', 'period', e.target.value, index)} className="w-full p-2 border rounded focus:ring-1 focus:ring-[#0e4194] outline-none text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">Ubicación</label>
                    <input type="text" value={exp.location} onChange={(e) => handleChange('experience', 'location', e.target.value, index)} className="w-full p-2 border rounded focus:ring-1 focus:ring-[#0e4194] outline-none text-sm" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs font-medium text-gray-500 mb-1">Tareas (Separadas por punto y coma ;)</label>
                    <textarea 
                      rows={2}
                      value={exp.tasks?.join('; ') || ''} 
                      onChange={(e) => handleChange('experience', 'tasks', e.target.value.split(';').map(t => t.trim()).filter(Boolean), index)} 
                      className="w-full p-2 border rounded focus:ring-1 focus:ring-[#0e4194] outline-none text-sm" 
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex justify-between items-center mb-4 border-b pb-2">
            <h2 className="text-xl font-bold text-[#0e4194]">Educación</h2>
            <button 
              onClick={() => handleArrayAdd('education', { degree: '', institution: '', period: '', location: '', level: '' })}
              className="flex items-center gap-1 text-sm bg-blue-50 text-[#0e4194] px-3 py-1 rounded-lg hover:bg-blue-100"
            >
              <Plus className="w-4 h-4" /> Añadir
            </button>
          </div>
          <div className="space-y-6">
            {formData.education.map((edu, index) => (
              <div key={edu.id} className="p-4 border border-gray-100 bg-gray-50 rounded-lg relative">
                <button 
                  onClick={() => handleArrayRemove('education', index)}
                  className="absolute top-4 right-4 text-red-500 hover:bg-red-50 p-1 rounded"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pr-8">
                  <div className="md:col-span-2">
                    <label className="block text-xs font-medium text-gray-500 mb-1">Título</label>
                    <input type="text" value={edu.degree} onChange={(e) => handleChange('education', 'degree', e.target.value, index)} className="w-full p-2 border rounded focus:ring-1 focus:ring-[#0e4194] outline-none text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">Institución</label>
                    <input type="text" value={edu.institution} onChange={(e) => handleChange('education', 'institution', e.target.value, index)} className="w-full p-2 border rounded focus:ring-1 focus:ring-[#0e4194] outline-none text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">Periodo</label>
                    <input type="text" value={edu.period} onChange={(e) => handleChange('education', 'period', e.target.value, index)} className="w-full p-2 border rounded focus:ring-1 focus:ring-[#0e4194] outline-none text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">Ubicación</label>
                    <input type="text" value={edu.location} onChange={(e) => handleChange('education', 'location', e.target.value, index)} className="w-full p-2 border rounded focus:ring-1 focus:ring-[#0e4194] outline-none text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">Nivel</label>
                    <input type="text" value={edu.level} onChange={(e) => handleChange('education', 'level', e.target.value, index)} className="w-full p-2 border rounded focus:ring-1 focus:ring-[#0e4194] outline-none text-sm" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills & Languages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-xl font-bold text-[#0e4194] mb-4 border-b pb-2">Capacidades</h2>
            <p className="text-xs text-gray-500 mb-2">Separadas por comas</p>
            <textarea 
              rows={6}
              value={formData.skills.join(', ')}
              onChange={handleSkillsChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-[#0e4194] outline-none resize-y text-sm"
            />
          </section>

          <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex justify-between items-center mb-4 border-b pb-2">
              <h2 className="text-xl font-bold text-[#0e4194]">Idiomas</h2>
              <button 
                onClick={() => handleArrayAdd('languages', { language: '', level: '' })}
                className="flex items-center gap-1 text-sm bg-blue-50 text-[#0e4194] px-3 py-1 rounded-lg hover:bg-blue-100"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-4">
              {formData.languages.map((lang, index) => (
                <div key={lang.id} className="flex gap-2 items-start">
                  <div className="flex-1 space-y-2">
                    <input type="text" placeholder="Idioma" value={lang.language} onChange={(e) => handleChange('languages', 'language', e.target.value, index)} className="w-full p-2 border rounded focus:ring-1 focus:ring-[#0e4194] outline-none text-sm" />
                    <input type="text" placeholder="Nivel" value={lang.level} onChange={(e) => handleChange('languages', 'level', e.target.value, index)} className="w-full p-2 border rounded focus:ring-1 focus:ring-[#0e4194] outline-none text-sm" />
                  </div>
                  <button onClick={() => handleArrayRemove('languages', index)} className="text-red-500 hover:bg-red-50 p-2 rounded mt-1">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>

      </div>
    </div>
  );
}
