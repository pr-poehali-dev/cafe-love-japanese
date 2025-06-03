import { Card, CardContent } from "@/components/ui/card";

const Reviews = () => {
  const reviews = [
    {
      name: "Анна Петрова",
      rating: 5,
      text: "Потрясающий ресторан! Суши свежайшие, рамен просто божественный. Обязательно вернемся!",
      date: "2 дня назад",
    },
    {
      name: "Михаил Сидоров",
      rating: 5,
      text: "Лучшая японская кухня в городе. Атмосфера уютная, персонал очень внимательный. Рекомендую всем!",
      date: "неделю назад",
    },
    {
      name: "Елена Козлова",
      rating: 5,
      text: "Заказывала корпоративный ужин - все гости в восторге! Особенно понравилась подача блюд.",
      date: "2 недели назад",
    },
    {
      name: "Дмитрий Волков",
      rating: 4,
      text: "Отличное место для романтического ужина. Филадельфия и терияки - мои фавориты!",
      date: "месяц назад",
    },
  ];

  const renderStars = (rating: number) => {
    return "⭐".repeat(rating);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 font-montserrat">
            Отзывы гостей
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-open-sans">
            Что говорят наши гости о Кафе Любовь
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-slate-800">
                      {review.name}
                    </h3>
                    <div className="text-lg">{renderStars(review.rating)}</div>
                  </div>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
                <p className="text-gray-700 italic font-open-sans">
                  "{review.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-red-50 px-6 py-3 rounded-lg">
            <span className="text-2xl mr-3">⭐</span>
            <div>
              <div className="text-xl font-bold text-red-600">4.8/5</div>
              <div className="text-sm text-gray-600">Средняя оценка</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
