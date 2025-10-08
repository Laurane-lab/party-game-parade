
const mascot = "/assets/New mascot.png";

const MentionsLegales: React.FC = () => (
  <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-2">
    {/* Header section */}
    <div className="w-full max-w-md bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
      <div className="h-24 bg-gradient-to-r from-party-blue/40 to-party-pink/30" />
      <div className="flex flex-col items-center -mt-12 pb-4">
        <div className="w-24 h-24 rounded-full bg-gray-200 border-4 border-white flex items-center justify-center mb-2 overflow-hidden">
          <img src={mascot} alt="Mascotte" className="w-20 h-20 object-contain" />
        </div>
        <div className="text-center">
          <h2 className="text-xl font-bold text-black">Mentions légales</h2>
          <span className="text-sm text-gray-500">Apérololo</span>
        </div>
        <div className="flex gap-2 mt-3">
          <a href="/" className="px-4 py-1 rounded-lg border border-gray-300 text-xs font-semibold bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 hover:from-blue-200 hover:to-blue-400 transition">Accueil</a>
        </div>
        <p className="mt-4 text-center text-sm text-gray-700 px-4">
          Site édité par Laurane Boullay<br />
          SIRET : 83520965100024<br />
          Hébergeur : Vercel Inc.<br />
          Propriété intellectuelle : Tous droits réservés.<br />
        </p>
      </div>
    </div>
    {/* Info section */}
    <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-6">
      <h3 className="text-lg font-bold text-party-pink mb-4">Informations</h3>
      <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-sm">
        <div className="flex items-center gap-2 text-gray-500">
          <span><i className="fa-solid fa-globe" /></span>
          <span>Site web</span>
        </div>
        <div className="text-black">www.aperololo.com</div>
        <div className="flex items-center gap-2 text-gray-500">
          <span><i className="fa-solid fa-envelope" /></span>
          <span>Email</span>
        </div>
        <div className="text-black underline">lauraneboullay@gmail.com</div>
        <div className="flex items-center gap-2 text-gray-500">
          <span><i className="fa-solid fa-phone" /></span>
          <span>Whatsapp</span>
        </div>
        <div className="text-black">+33 6 29 24 30 90</div>
        <div className="flex items-center gap-2 text-gray-500">
          <span><i className="fa-solid fa-calendar" /></span>
          <span>Création</span>
        </div>
        <div className="text-black">Août 2025</div>
      </div>
    </div>
  </div>
);

export default MentionsLegales;
