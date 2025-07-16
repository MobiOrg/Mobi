import { Clock, Shield, Users, CheckCircle } from 'lucide-react';

const features = [
  { icon: Clock, title: 'Comparaison Rapide', desc: 'Obtenez vos devis en moins de 3 minutes' },
  { icon: Shield, title: 'Sécurisé', desc: 'Vos données sont protégées et cryptées' },
  { icon: Users, title: 'Partenaires Fiables', desc: 'Assureurs agréés et reconnus en Côte d\'Ivoire' },
  { icon: CheckCircle, title: 'Gratuit', desc: 'Service de comparaison 100% gratuit' }
];

const Features = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Pourquoi choisir NOLI Motor ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
