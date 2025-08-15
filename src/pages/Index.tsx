import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const portfolioItems = [
  {
    id: 1,
    title: "Свадебная съемка",
    category: "wedding",
    image: "/img/a4a16c4b-8e0d-483f-8cc6-6afd2d2945a9.jpg",
    description: "Романтичные моменты вашего особенного дня"
  },
  {
    id: 2,
    title: "Предметная съемка",
    category: "product",
    image: "/img/8489d871-b4a2-4d74-93cd-5141c1d929ee.jpg",
    description: "Профессиональная съемка товаров и продукции"
  },
  {
    id: 3,
    title: "Контент для соц.сетей",
    category: "social",
    image: "/img/8cb6f891-4fce-4361-b12d-b61e7e448899.jpg",
    description: "Яркий контент для Instagram и TikTok"
  }
];

const services = [
  {
    icon: "Camera",
    title: "Свадебная съемка",
    description: "Полное сопровождение вашего торжества",
    price: "от 50 000 ₽"
  },
  {
    icon: "Package",
    title: "Предметная съемка",
    description: "Каталожная съемка товаров и продукции",
    price: "от 5 000 ₽"
  },
  {
    icon: "Instagram",
    title: "Контент для соцсетей",
    description: "Фото и видео для социальных платформ",
    price: "от 10 000 ₽"
  },
  {
    icon: "Video",
    title: "Видеопроизводство",
    description: "Рилсы, монтаж, видеоконтент",
    price: "от 15 000 ₽"
  }
];

const testimonials = [
  {
    name: "Анна Петрова",
    text: "Невероятные фотографии нашей свадьбы! Каждый кадр — это произведение искусства.",
    rating: 5
  },
  {
    name: "Дмитрий Иванов",
    text: "Отличная работа с продуктовой съемкой. Продажи выросли после обновления каталога.",
    rating: 5
  },
  {
    name: "Мария Смирнова",
    text: "Контент для Instagram получился потрясающий! Охваты увеличились в разы.",
    rating: 5
  }
];

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredPortfolio = selectedCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background text-foreground dark">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">PHOTO</div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-accent transition-colors">Главная</a>
              <a href="#portfolio" className="hover:text-accent transition-colors">Портфолио</a>
              <a href="#services" className="hover:text-accent transition-colors">Услуги</a>
              <a href="#about" className="hover:text-accent transition-colors">Обо мне</a>
              <a href="#pricing" className="hover:text-accent transition-colors">Цены</a>
              <a href="#testimonials" className="hover:text-accent transition-colors">Отзывы</a>
            </nav>
            <Button variant="outline" className="hidden md:flex">
              <Icon name="Phone" size={16} className="mr-2" />
              Связаться
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Создаю визуальные<br />
              <span className="text-accent">истории</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Профессиональная фото и видеосъемка для свадеб, рекламы, 
              соцсетей и бизнеса
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                <Icon name="Camera" size={20} className="mr-2" />
                Посмотреть работы
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Обсудить проект
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Портфолио</h2>
            <p className="text-muted-foreground text-lg mb-8">Избранные работы</p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button 
                variant={selectedCategory === "all" ? "default" : "outline"}
                onClick={() => setSelectedCategory("all")}
              >
                Все работы
              </Button>
              <Button 
                variant={selectedCategory === "wedding" ? "default" : "outline"}
                onClick={() => setSelectedCategory("wedding")}
              >
                Свадьбы
              </Button>
              <Button 
                variant={selectedCategory === "product" ? "default" : "outline"}
                onClick={() => setSelectedCategory("product")}
              >
                Предметка
              </Button>
              <Button 
                variant={selectedCategory === "social" ? "default" : "outline"}
                onClick={() => setSelectedCategory("social")}
              >
                Соцсети
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPortfolio.map((item) => (
              <Card key={item.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Icon name="Eye" size={32} className="text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Услуги</h2>
            <p className="text-muted-foreground text-lg">Полный спектр фото и видеопроизводства</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                      <Icon name={service.icon as any} size={32} className="text-accent" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Badge variant="secondary" className="text-lg font-semibold">
                    {service.price}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Обо мне</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Меня зовут Александр, и я профессиональный фотограф с 8-летним опытом. 
                Специализируюсь на свадебной, коммерческой и контентной съемке.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Работаю на профессиональном оборудовании Canon и Sony. Каждый проект — 
                это уникальная история, которую я помогаю рассказать через объектив.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <Badge variant="outline">Canon 5D Mark IV</Badge>
                <Badge variant="outline">Sony A7R IV</Badge>
                <Badge variant="outline">Lightroom</Badge>
                <Badge variant="outline">Premiere Pro</Badge>
              </div>
              <Button className="bg-accent hover:bg-accent/90">
                <Icon name="Download" size={20} className="mr-2" />
                Скачать портфолио
              </Button>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center">
                <Icon name="User" size={64} className="text-muted-foreground" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-6 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Цены</h2>
            <p className="text-muted-foreground text-lg">Прозрачные тарифы для всех видов съемки</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="relative">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-2">Базовый</h3>
                <div className="text-4xl font-bold text-accent mb-4">15 000 ₽</div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Icon name="Check" size={20} className="text-green-500 mr-2" />
                    2 часа съемки
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={20} className="text-green-500 mr-2" />
                    30 обработанных фото
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={20} className="text-green-500 mr-2" />
                    Онлайн-галерея
                  </li>
                </ul>
                <Button className="w-full" variant="outline">Выбрать пакет</Button>
              </CardContent>
            </Card>

            <Card className="relative border-accent">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-accent">Популярный</Badge>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-2">Стандарт</h3>
                <div className="text-4xl font-bold text-accent mb-4">35 000 ₽</div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Icon name="Check" size={20} className="text-green-500 mr-2" />
                    5 часов съемки
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={20} className="text-green-500 mr-2" />
                    100 обработанных фото
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={20} className="text-green-500 mr-2" />
                    Онлайн-галерея
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={20} className="text-green-500 mr-2" />
                    USB-носитель
                  </li>
                </ul>
                <Button className="w-full bg-accent hover:bg-accent/90">Выбрать пакет</Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-2">Премиум</h3>
                <div className="text-4xl font-bold text-accent mb-4">60 000 ₽</div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Icon name="Check" size={20} className="text-green-500 mr-2" />
                    Весь день съемки
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={20} className="text-green-500 mr-2" />
                    300+ фотографий
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={20} className="text-green-500 mr-2" />
                    Видеоролик
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={20} className="text-green-500 mr-2" />
                    Печатный альбом
                  </li>
                </ul>
                <Button className="w-full" variant="outline">Выбрать пакет</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Отзывы</h2>
            <p className="text-muted-foreground text-lg">Что говорят мои клиенты</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                  <div className="font-semibold">{testimonial.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-card border-t border-border">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">PHOTO</div>
              <p className="text-muted-foreground">
                Профессиональная фотография и видеопроизводство
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Свадебная съемка</li>
                <li>Предметная съемка</li>
                <li>Контент для соцсетей</li>
                <li>Видеопроизводство</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (999) 123-45-67
                </li>
                <li className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  hello@photo.ru
                </li>
                <li className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  Москва
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Соцсети</h3>
              <div className="flex space-x-4">
                <Button size="icon" variant="outline">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button size="icon" variant="outline">
                  <Icon name="Youtube" size={20} />
                </Button>
                <Button size="icon" variant="outline">
                  <Icon name="MessageCircle" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 PHOTO. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}