import './About.css';

const team = [
  { name: 'Maurelle Prisca', role: 'Fondatrice & CEO', avatar: '🧑‍💼' },
  { name: 'Jean Kouadio', role: 'Lead Développeur', avatar: '👨‍💻' },
  { name: 'Fatou Diarra', role: 'Responsable Partenariats', avatar: '🤝' },
];

const About = () => (
  <div className="about-bg" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-bg-light)' }}>
    <div className="about-section-flex" style={{ display: 'flex', gap: '48px', maxWidth: 1100, width: '100%', alignItems: 'center', justifyContent: 'center', padding: '48px 16px' }}>
      {/* Bloc citation à gauche */}
      <div className="about-quote-block" style={{ background: '#F6F8FB', borderRadius: '50%', width: 280, height: 280, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 16px #22314A10', textAlign: 'center', flexShrink: 0 }}>
        <div style={{ fontSize: 32, color: '#2563EB', marginBottom: 16 }}>💬</div>
        <div style={{ fontSize: '1.08rem', color: '#22314A', marginBottom: 18, padding: '0 18px' }}>
          “Notre mission est de rendre l’assurance auto simple, transparente et accessible à tous. Nous croyons que chaque conducteur mérite la meilleure protection, au meilleur prix.”
        </div>
        <div style={{ fontWeight: 700, color: '#2563EB', fontSize: '1.1rem' }}>L’équipe NOLI Motor</div>
      </div>
      {/* Bloc texte à droite */}
      <div className="about-main-block" style={{ flex: 1, minWidth: 260 }}>
        <h2 style={{ color: '#2563EB', fontSize: '1.6rem', fontWeight: 800, marginBottom: 18 }}>À propos de NOLI Motor</h2>
        <p style={{ color: '#22314A', fontSize: '1.08rem', marginBottom: 18 }}>
          NOLI Motor est le comparateur d’assurance auto de référence en Côte d’Ivoire. Notre plateforme analyse des dizaines d’assureurs pour vous proposer les meilleures garanties au meilleur prix, en toute impartialité.
        </p>
        <p style={{ color: '#22314A', fontSize: '1.08rem' }}>
          Nous croyons que l’assurance doit être simple, rapide et transparente. Notre équipe s’engage à accompagner chaque automobiliste dans sa recherche de protection, pour rouler en toute sérénité.
        </p>
      </div>
    </div>
  </div>
);

export default About; 