interface SectionListProps {
  title: string;
  items: string[];
  asHtml?: boolean;
}

const SectionList = ({ title, items, asHtml = false }: SectionListProps) => {
  return (
    <div className="mt-6 text-base font-sans">
      <strong>{title} :</strong>
      <ul className="list-disc ml-6 mt-2">
        {items.map((item, idx) => (
          <li key={idx}>
            {asHtml ? (
              <span dangerouslySetInnerHTML={{ __html: item }} />
            ) : (
              item
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SectionList;
