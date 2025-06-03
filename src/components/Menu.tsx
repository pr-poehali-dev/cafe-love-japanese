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
        },
        {
          name: "Калифорния",
          description: "Краб, авокадо, огурец, икра тобико",
          price: "320 ₽",
        },
        {
          name: "Дракон",
          description: "Угорь, огурец, соус унаги",
          price: "380 ₽",
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
        },
        {
          name: "Рамен с мисо",
          description: "Традиционный суп с лапшой",
          price: "520 ₽",
        },
        {
          name: "Темпура с креветками",
          description: "Креветки в хрустящем кляре",
          price: "480 ₽",
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
        },
        {
          name: "Гиоза",
          description: "Жареные пельмени с свининой",
          price: "280 ₽",
        },
        {
          name: "Мисо суп",
          description: "Традиционный японский суп",
          price: "150 ₽",
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
                      className="border-b border-gray-200 pb-3 last:border-b-0"
                    >
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
