import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Menu = () => {
  const menuItems = [
    {
      category: "Суши и роллы",
      items: [
        {
          name: "Филадельфия",
          description: "Лосось, сливочный сыр, огурец",
          price: "350 ₽",
          image:
            "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop",
        },
        {
          name: "Калифорния",
          description: "Краб, авокадо, огурец, икра тобико",
          price: "320 ₽",
          image:
            "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&h=300&fit=crop",
        },
        {
          name: "Дракон",
          description: "Угорь, огурец, соус унаги",
          price: "380 ₽",
          image:
            "https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&h=300&fit=crop",
        },
      ],
    },
    {
      category: "Горячие блюда",
      items: [
        {
          name: "Терияки с курицей",
          description: "Курица в соусе терияки с рисом",
          price: "450 ₽",
          image:
            "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
        },
        {
          name: "Рамен с мисо",
          description: "Традиционный суп с лапшой",
          price: "520 ₽",
          image:
            "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop",
        },
        {
          name: "Темпура с креветками",
          description: "Креветки в хрустящем кляре",
          price: "480 ₽",
          image:
            "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
        },
      ],
    },
    {
      category: "Закуски",
      items: [
        {
          name: "Эдамаме",
          description: "Молодые соевые бобы с морской солью",
          price: "180 ₽",
          image:
            "https://images.unsplash.com/photo-1583032015870-5d3c8cc6aa7c?w=400&h=300&fit=crop",
        },
        {
          name: "Гиоза",
          description: "Жареные пельмени с свининой",
          price: "280 ₽",
          image:
            "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&h=300&fit=crop",
        },
        {
          name: "Мисо суп",
          description: "Традиционный японский суп",
          price: "150 ₽",
          image:
            "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop",
        },
      ],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 font-montserrat">Наше меню</h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-open-sans">
            Каждое блюдо готовится с душой и традиционными японскими техниками
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className="hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <CardTitle className="text-xl font-montserrat text-slate-800">
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="border-b border-gray-200 pb-4 last:border-b-0 space-y-3"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-semibold text-slate-800">
                          {item.name}
                        </h3>
                        <Badge
                          variant="outline"
                          className="text-red-600 border-red-600"
                        >
                          {item.price}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 font-open-sans">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
