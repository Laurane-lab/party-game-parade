interface ToursProps {
  tours: { title: string; color: string; description: string[] }[];
}

const ToursSection = ({ tours }: ToursProps) => {
  return (
    <div className="text-base font-sans mt-8">
      <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-200">
        <div className="flex items-center justify-center w-8 h-8 bg-indigo-100 rounded-lg">
          <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-800">Tours</h3>
      </div>
      <ul className="list-disc ml-6 space-y-3">
        {tours.map((tour, idx) => (
          <li key={idx} className="text-gray-700 leading-relaxed">
            <div>
              <span className="font-semibold" style={{ color: tour.color }}>{tour.title} :</span>
              {tour.description.map((desc, descIdx) => (
                <div key={descIdx} className="mt-1" dangerouslySetInnerHTML={{ __html: desc }} />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToursSection;
