import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <Badge className="mb-4 bg-red-600 hover:bg-red-700">
          🍣 Подлинная японская кухня
        </Badge>
        <h1 className="text-5xl font-bold mb-6 font-montserrat">Кафе Любовь</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 font-open-sans">
          Откройте для себя настоящий вкус Японии в уютной атмосфере нашего
          ресторана. Свежие ингредиенты, традиционные рецепты и искусство
          подачи.
        </p>
        <div className="flex justify-center gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400">15+</div>
            <div className="text-sm text-gray-400">Лет опыта</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400">500+</div>
            <div className="text-sm text-gray-400">Довольных гостей</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
