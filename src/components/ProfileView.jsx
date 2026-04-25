import React, { useState } from 'react';
import { ShieldCheck, CreditCard, ChevronRight, Bell, Eye, FileText, Activity } from 'lucide-react';

const ProfileView = ({ data }) => {
  const [userData] = useState({
    name: data?.name || "Juan Pérez",
    nfcId: data?.nfcId || "MH-8829-01X",
    bloodType: data?.bloodType || "O+",
    criticalAllergy: data?.chronicDisease || "Ninguna registrada",
    vaultData: {
      history: data?.history ? [data.history] : ["Perfil creado el " + new Date().toLocaleDateString()],
      medications: [data?.baseMedication || "Sin medicación"],
      lastCheckup: new Date().toLocaleDateString()
    },
    contacts: [
      { 
        name: data?.contact1Name || "María García", 
        phone: data?.contact1Phone || "+52 33 1234 5678",
        relation: "Contacto Principal"
      }
    ]
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-12">
      
      {/* HEADER DEL PERFIL CON FOTO */}
      <div className="flex flex-col items-center text-center space-y-4 pt-4">
        <div className="relative">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-xl bg-slate-200">
            <img 
              src="/assets/patient-photo.png" 
              alt="Tu foto de perfil" 
              className="w-full h-full object-cover"
              onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"; }}
            />
          </div>
          <div className="absolute -bottom-1 -right-1 bg-myhealth-blue border-2 border-white w-6 h-6 rounded-full flex items-center justify-center shadow-sm">
            <ShieldCheck size={14} className="text-white" />
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-black text-slate-900 italic tracking-tighter uppercase">{userData.name}</h2>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Identidad Blockchain Activa</p>
        </div>
      </div>

      {/* SECCIÓN 1: PERFIL DE EMERGENCIA (PÚBLICO) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between px-2">
          <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
            <Eye size={14} className="text-myhealth-red" /> Ficha Médica Completa
          </h3>
          <span className="text-[9px] bg-red-100 text-myhealth-red px-2 py-0.5 rounded-full font-bold">ACCESO INMEDIATO</span>
        </div>

        <div className="bg-white rounded-[32px] p-6 shadow-xl border-l-[12px] border-myhealth-red relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-5">
            <Activity size={80} />
          </div>
          
          <div className="relative z-10 space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-3xl font-black text-slate-900 italic tracking-tighter uppercase leading-none">{userData.name}</h2>
                <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-widest">Pasaporte de Salud MyHealth</p>
              </div>
              <div className="bg-slate-50 p-2 rounded-xl">
                <CreditCard size={20} className="text-slate-400" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                <p className="text-[9px] font-bold text-slate-400 uppercase">Sangre</p>
                <p className="text-2xl font-black text-myhealth-red leading-none">{userData.bloodType}</p>
              </div>
              <div className="bg-red-50 p-3 rounded-2xl border border-red-100">
                <p className="text-[9px] font-bold text-red-400 uppercase">Enfermedad/Alergia</p>
                <p className="text-sm font-black text-red-700 leading-none truncate">{userData.criticalAllergy}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-[9px] font-black text-slate-400 uppercase flex items-center gap-1 tracking-widest">
                  <FileText size={10} /> Historial Clínico
                </p>
                <div className="bg-slate-50 p-4 rounded-2xl text-slate-700 text-xs font-semibold border border-slate-100">
                  {userData.vaultData.history[0]}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <p className="text-[9px] font-black text-slate-400 uppercase mb-1 tracking-widest">Medicinas</p>
                  <p className="text-slate-800 text-xs font-bold">{userData.vaultData.medications[0]}</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <p className="text-[9px] font-black text-slate-400 uppercase mb-1 tracking-widest">Sincronizado</p>
                  <p className="text-slate-800 text-xs font-bold">{userData.vaultData.lastCheckup}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: RED DE APOYO */}
      <section className="bg-white rounded-[32px] p-6 shadow-sm border border-slate-100 space-y-4">
        <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
          <Bell size={14} className="text-myhealth-red" /> Contactos SOS
        </h3>
        {userData.contacts.map((contact, i) => (
          <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-myhealth-red/10 rounded-full flex items-center justify-center text-myhealth-red text-xs font-black">
                {contact.name.split(' ').map(n => n[0]).join('').toUpperCase()}
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800 leading-tight">{contact.name}</p>
                <p className="text-[10px] text-slate-400 font-medium">{contact.relation || 'Contacto'} • SMS Activo</p>
              </div>
            </div>
            <ChevronRight size={18} className="text-slate-300" />
          </div>
        ))}
      </section>

    </div>
  );
};

export default ProfileView;
