interface NuagesLinksProps {
  nuages: { theme: string; url: string }[];
}

const NuagesLinks = ({ nuages }: NuagesLinksProps) => {
  return (
    <div className="mt-4 text-base font-sans">
      <strong>Accès aux nuages de mots :</strong>
      <ul className="list-disc ml-6 mt-2">
        {nuages.map((nuage, idx) => (
          <li key={idx}>
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
