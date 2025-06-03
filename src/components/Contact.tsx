import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="py-16 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 font-montserrat">Контакты</h2>
          <p className="text-gray-300 max-w-2xl mx-auto font-open-sans">
            Мы ждем вас в Кафе Любовь каждый день
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-red-400 flex items-center gap-2">
                📍 Адрес
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 font-open-sans">
                г. Москва
                <br />
                ул. Тверская, 15
                <br />
                2-й этаж
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-red-400 flex items-center gap-2">
                🕒 Время работы
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 font-open-sans">
                Пн-Вс: 12:00 - 23:00
                <br />
                Кухня до 22:30
                <br />
                Без выходных
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-red-400 flex items-center gap-2">
                📞 Связь
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 font-open-sans mb-4">
                +7 (495) 123-45-67
                <br />
                info@cafelove.ru
                <br />
                @cafelove_moscow
              </p>
              <Button className="w-full bg-red-600 hover:bg-red-700">
                Забронировать столик
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 font-open-sans">
            🍱 Доставка по Москве • 🎌 Аутентичная японская кухня • ❤️ С любовью
            к традициям
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
