interface ToursProps {
  tours: { title: string; color: string; description: string[] }[];
}

const ToursSection = ({ tours }: ToursProps) => {
  return (
    <div className="text-base font-sans mt-6">
      <strong>Tours :</strong>
      <ul className="list-disc ml-6 mt-2">
        {tours.map((tour, idx) => (
          <li key={idx}>
            <div>
              <span className="font-semibold" style={{ color: tour.color }}>{tour.title} :</span>
              {tour.description.map((desc, descIdx) => (
                <div key={descIdx} dangerouslySetInnerHTML={{ __html: desc }} />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToursSection;
