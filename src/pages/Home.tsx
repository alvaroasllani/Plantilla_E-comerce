import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, Shield, Headphones } from 'lucide-react';
import { ProductCard } from '@/components/common/ProductCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getFeaturedProducts, getOnSaleProducts } from '@/data/mockProducts';

export const Home = () => {
  const featuredProducts = getFeaturedProducts().slice(0, 8);
  const saleProducts = getOnSaleProducts().slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Descubre las Mejores
            <span className="block text-accent-foreground">Ofertas Online</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
            Productos de calidad, precios increíbles y envío gratis en compras superiores a $50
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop">
              <Button size="lg" variant="secondary" className="min-w-[200px]">
                Explorar Tienda
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/shop?sale=true">
              <Button size="lg" variant="outline" className="min-w-[200px] bg-white/10 border-white/30 text-white hover:bg-white/20">
                Ver Ofertas
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-soft">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Envío Gratis</h3>
                <p className="text-muted-foreground">En compras superiores a $50. Entrega rápida y segura.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-soft">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Compra Segura</h3>
                <p className="text-muted-foreground">Pagos protegidos y garantía de devolución en 30 días.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-soft">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Headphones className="h-8 w-8 text-warning" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Soporte 24/7</h3>
                <p className="text-muted-foreground">Atención al cliente disponible todos los días del año.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sale Products Section */}
      {saleProducts.length > 0 && (
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-error">Ofertas</span> Especiales
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Aprovecha estos descuentos por tiempo limitado en productos seleccionados
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {saleProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            <div className="text-center">
              <Link to="/shop?sale=true">
                <Button size="lg" variant="outline">
                  Ver Todas las Ofertas
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Featured Products Section */}
      <section className="py-16 px-4 bg-gradient-banner">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Productos <span className="text-primary">Destacados</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Descubre nuestros productos más populares y mejor valorados por los clientes
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/shop">
              <Button size="lg">
                Ver Toda la Tienda
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Lo que Dicen Nuestros <span className="text-accent">Clientes</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "María González",
                rating: 5,
                comment: "Excelente servicio y productos de calidad. La entrega fue súper rápida.",
                product: "Smartphone Pro Max"
              },
              {
                name: "Carlos Rodríguez",
                rating: 5,
                comment: "Muy satisfecho con mi compra. El soporte al cliente es excepcional.",
                product: "Laptop Gaming RGB"
              },
              {
                name: "Ana López",
                rating: 4,
                comment: "Gran variedad de productos y precios competitivos. Recomendado.",
                product: "Auriculares Inalámbricos"
              }
            ].map((review, index) => (
              <Card key={index} className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < review.rating ? 'text-warning fill-warning' : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{review.comment}"
                  </p>
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-muted-foreground">Compró: {review.product}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¡Mantente al Día!
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Suscríbete a nuestro boletín y recibe ofertas exclusivas, nuevos productos y descuentos especiales
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu email..."
              className="flex-1 px-4 py-3 rounded-lg text-foreground"
            />
            <Button variant="secondary" size="lg">
              Suscribirme
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};