// components/ServicesSection.tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const ServicesSection = () => {
  const services = [
    { title: "Oversized Load Transport", description: "Specialized handling for extra-large cargo", icon: "🚛" },
    { title: "Cross-Border Shipping", description: "Seamless USA-Canada transportation", icon: "🌎" },
    { title: "Just-in-Time Delivery", description: "Precision logistics for your time-sensitive needs", icon: "⏱️" },
  ]

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Our Premium Services</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.icon}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
