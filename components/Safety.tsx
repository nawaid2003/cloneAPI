import React from 'react'
import { ShieldCheck, Phone, Filter, Scale, FileSpreadsheet } from 'lucide-react'

const Safety: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <div className="flex flex-col items-center mb-6">
        <ShieldCheck className="text-orange-500 w-12 h-12 mb-4" />
        <h1 className="text-4xl font-bold">Unwavering Safety & Security</h1>
      </div>
      
      <p className="mb-8 text-lg max-w-2xl">
        With robust internal audits and stringent data governance, we
        champion the ethical use of AI, ensuring technology serves
        humanity's best interests. Our commitment sets the foundation for
        Advanced General Intelligence (AGI) with integrity.
      </p>

      <div className="grid grid-cols-2 gap-8">
        <SecurityFeature icon={<Phone />} title="Call Monitoring" />
        <SecurityFeature icon={<Filter />} title="Prompt Injection" />
        <SecurityFeature icon={<Scale />} title="Rate Limits" />
        <SecurityFeature icon={<FileSpreadsheet />} title="Internal Hard Audits" />
      </div>
    </div>
  )
}

const SecurityFeature: React.FC<{ icon: React.ReactNode; title: string }> = ({ icon, title }) => (
  <div className="flex flex-col items-center">
    <div className="bg-orange-500 p-3 rounded-full mb-2">
      {React.cloneElement(icon as React.ReactElement, { className: "text-white w-6 h-6" })}
    </div>
    <span className="text-lg">{title}</span>
  </div>
)

export default Safety