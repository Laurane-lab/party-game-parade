interface NuagesLinksProps {
  nuages: { theme: string; url: string }[];
}

const NuagesLinks = ({ nuages }: NuagesLinksProps) => {
  return (
    <div className="mt-8 text-base font-sans">
      <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-200">
        <div className="flex items-center justify-center w-8 h-8 bg-sky-100 rounded-lg">
          <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-800">Accès aux nuages de mots</h3>
      </div>
      <ul className="list-disc ml-6 space-y-2">
        {nuages.map((nuage, idx) => (
          <li key={idx} className="text-gray-700 leading-relaxed">
            <a href={nuage.url} target="_blank" rel="noopener noreferrer" className="text-party-blue underline hover:text-party-green">
              {nuage.theme}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NuagesLinks;
