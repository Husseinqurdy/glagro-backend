export default function ProductsPage() {
  const services = [
    {
      title: "Mbolea Bora",
      description: "Tunauza DAP, Urea, NPK, CAN, S.A Boron na nyinginezo.",
      link: "/products/fertilizers",
      icon: "🌱",
    },
    {
      title: "Mbegu Bora",
      description: "Tunashauri na kuuza mbegu za mahindi na mazao mengine.",
      link: "/products/seeds",
      icon: "🌾",
    },
    {
      title: "Usimamizi wa Mashamba",
      description: "Tunatoa huduma ya kusimamia mashamba kwa teknolojia ya kisasa.",
      link: "/services/farm-management",
      icon: "🚜",
    },
    {
      title: "Ushauri wa Kitaalamu",
      description: "Tunasaidia kupanga bajeti, ratiba ya msimu, na mzunguko wa mazao.",
      link: "/services/consultancy",
      icon: "📊",
    },
  ];

  return (
    <main className="container mx-auto py-16 px-6">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">
          Bidhaa na Huduma Zetu
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Tunakuwezesha kupata mavuno bora kupitia pembejeo na ushauri wa kitaalamu.
        </p>
      </section>

      {/* Services Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-8 flex flex-col justify-between hover:shadow-xl transition"
          >
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-4">{service.icon}</span>
              <h2 className="text-2xl font-semibold text-green-700">
                {service.title}
              </h2>
            </div>
            <p className="text-gray-600 mb-6">{service.description}</p>
            <a
              href={service.link}
              className="bg-green-600 text-white px-4 py-2 rounded font-semibold hover:bg-green-700 transition self-start"
            >
              Jifunze zaidi
            </a>
          </div>
        ))}
      </section>
    </main>
  );
}