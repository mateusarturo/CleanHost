import React, { useState } from 'react';
import { 
  Sparkles, 
  Clock, 
  Shield, 
  Star, 
  Check, 
  Phone, 
  MessageCircle, 
  Camera, 
  MapPin, 
  Mail, 
  Instagram,
  ChevronDown,
  Home,
  Bed,
  Bath,
  Coffee
} from 'lucide-react';

const App = () => {
  const [openPackage, setOpenPackage] = useState<number | null>(null);

  const packages = [
    {
      id: 1,
      name: "Básico",
      price: "R$ 120",
      description: "Ideal para estúdios e quitinetes",
      icon: <Home className="w-8 h-8" />,
      includes: [
        "Limpeza completa de banheiro",
        "Aspirar e passar pano no chão",
        "Limpeza de superfícies",
        "Organização básica",
        "Troca de lençóis e toalhas"
      ]
    },
    {
      id: 2,
      name: "Completo",
      price: "R$ 180",
      description: "Para apartamentos de 1-2 quartos",
      icon: <Bed className="w-8 h-8" />,
      popular: true,
      includes: [
        "Tudo do pacote Básico",
        "Limpeza profunda de cozinha",
        "Limpeza de geladeira",
        "Organização de armários",
        "Limpeza de janelas internas",
        "Checagem de amenities"
      ]
    },
    {
      id: 3,
      name: "Premium",
      price: "R$ 250",
      description: "Para casas e apartamentos grandes",
      icon: <Bath className="w-8 h-8" />,
      includes: [
        "Tudo do pacote Completo",
        "Limpeza de área externa",
        "Lavagem de roupa de cama",
        "Reposição de amenities",
        "Relatório fotográfico completo",
        "Atendimento prioritário",
        "Suporte 24h"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Maria Santos",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2",
      text: "Excelente serviço! Meu apartamento fica sempre impecável e meus hóspedes sempre elogiam a limpeza.",
      rating: 5
    },
    {
      name: "João Silva",
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2",
      text: "Pontualidade e qualidade são os pontos fortes. Recomendo para todos os anfitriões!",
      rating: 5
    },
    {
      name: "Ana Oliveira",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2",
      text: "Desde que contratei a LimpaHost, minhas avaliações só melhoraram. Serviço de primeira!",
      rating: 5
    }
  ];

  const whyChooseUs = [
    {
      icon: <Star className="w-8 h-8 text-blue-400" />,
      title: "Nota 5.0",
      description: "Avaliação máxima com anfitriões locais"
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-green-500" />,
      title: "Agendamento WhatsApp",
      description: "Fácil e rápido pelo WhatsApp"
    },
    {
      icon: <Camera className="w-8 h-8 text-blue-400" />,
      title: "Fotos pós-limpeza",
      description: "Relatório fotográfico de cada serviço"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "Especialistas Airbnb RJ",
      description: "Conhecimento do padrão hoteleiro"
    }
  ];

  const scrollToPackages = () => {
    document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToIncludes = () => {
    document.getElementById('includes')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-green-50 min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-green-400/10"></div>
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 animate-pulse">
              <Sparkles className="w-16 h-16 text-blue-400 mx-auto mb-4" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Limpeza Profissional para 
              <span className="text-blue-500"> Airbnb</span> em 
              <span className="text-green-500"> Volta Redonda</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Padrão hoteleiro, agendamento rápido e confiança em cada detalhe. 
              <br />
              <span className="font-semibold text-blue-600">Imóveis 100% prontos para o próximo hóspede!</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Solicitar Orçamento
              </button>
              <button 
                onClick={scrollToPackages}
                className="border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Ver Pacotes
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pacotes e Preços</h2>
            <p className="text-xl text-gray-600">Escolha o pacote ideal para seu imóvel</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg) => (
              <div key={pkg.id} className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 transition-all duration-300 hover:shadow-xl hover:scale-105 ${pkg.popular ? 'border-blue-400 bg-blue-50/30' : 'border-gray-200'}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Mais Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-500">
                    {pkg.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <div className="text-4xl font-bold text-blue-600">{pkg.price}</div>
                </div>
                
                <button 
                  onClick={scrollToIncludes}
                  className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg"
                >
                  Ver Detalhes dos Pacotes
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section id="includes" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">O que está incluso</h2>
            <p className="text-xl text-gray-600">Detalhamento completo de cada pacote</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-2xl shadow-lg p-8">
                <div className="text-center mb-6">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-500">
                    {pkg.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">{pkg.price}</div>
                </div>
                
                <ul className="space-y-3">
                  {pkg.includes.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Por que escolher a LimpaHost?</h2>
            <p className="text-xl text-gray-600">Diferenciais que fazem toda a diferença</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-all duration-300 hover:shadow-lg">
                <div className="mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">O que nossos clientes dizem</h2>
            <p className="text-xl text-gray-600">Depoimentos reais de anfitriões satisfeitos</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto para elevar o padrão do seu Airbnb?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Solicite um orçamento e receba um atendimento rápido e personalizado! 
            Transformamos seu imóvel em uma experiência inesquecível para seus hóspedes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
              <MessageCircle className="w-5 h-5" />
              <span>Falar no WhatsApp</span>
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
              <Clock className="w-5 h-5" />
              <span>Visita Técnica Gratuita</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="w-8 h-8 text-blue-400" />
                <span className="text-2xl font-bold">LimpaHost</span>
              </div>
              <p className="text-gray-400 mb-4">
                Especialistas em limpeza profissional para Airbnb. 
                Padrão hoteleiro garantido.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4 text-blue-400">Contato</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>contato@limpahost.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>(21) 9XXXX-XXXX</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Instagram className="w-4 h-4" />
                  <span>@limpahost</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4 text-green-400">Atendemos</h4>
              <div className="flex items-start space-x-2 text-gray-400">
                <MapPin className="w-4 h-4 mt-1" />
                <span>Rio de Janeiro e região</span>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 LimpaHost. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;