
const partners = [
  { name: 'NSIA Assurance', logo: '🛡️' },
  { name: 'Atlantique Assurance', logo: '🌊' },
  { name: 'Saham Assurance', logo: '⭐' },
  { name: 'Allianz CI', logo: '🏆' },
  { name: 'AXA Assurance', logo: '🔷' },
  { name: 'Sunu Assurance', logo: '☀️' }
];

const Partners = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Nos Assureurs Partenaires
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
              <div className="text-4xl mb-2">{partner.logo}</div>
              <p className="text-sm font-medium text-gray-700">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
