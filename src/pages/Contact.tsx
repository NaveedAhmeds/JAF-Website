import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Contact = () => {
  const contactInfo = [
    {
      title: "Phone",
      details: ["+91 98481 47003"],
      icon: "📞"
    },
    {
      title: "Email", 
      details: ["info@jaflogistics.com", "operations@jaflogistics.com"],
      icon: "📧"
    },
    {
      title: "Address",
      details: ["Zehra Towers, 8-1-43/A/66, Shaikpet Rd,", "opp. HP Petrol Pump, Sathya Colony,", "Qutub Shahi Tombs, Hyderabad,", "Telangana 500008, India"],
      icon: "📍"
    },
    {
      title: "Working Hours",
      details: ["24/7 Operations", "Emergency Support Available"],
      icon: "🕒"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Contact <span className="text-orange-500">Us</span>
            </h1>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
              Ready to transform your corporate transportation? Get in touch with our team 
              for personalized solutions and competitive quotes.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Get Your Quote
                </CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="Enter your email address" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name *</Label>
                  <Input id="company" placeholder="Enter your company name" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="service">Service Required *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="employee-transport">Employee Transportation</SelectItem>
                      <SelectItem value="car-rentals">Car Rentals</SelectItem>
                      <SelectItem value="long-term-rentals">Long Term Rentals</SelectItem>
                      <SelectItem value="event-transport">Event Transport</SelectItem>
                      <SelectItem value="airport-transfers">Airport Transfers</SelectItem>
                      <SelectItem value="fleet-management">Fleet Management</SelectItem>
                      <SelectItem value="multiple">Multiple Services</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your specific requirements..." 
                    rows={4}
                  />
                </div>
                
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg py-3">
                  Send Inquiry
                </Button>
                
                <p className="text-sm text-gray-500 text-center">
                  * Required fields. We respect your privacy and will never share your information.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
                <div className="grid grid-cols-1 gap-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start">
                          <div className="text-2xl mr-4">{info.icon}</div>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-gray-600">{detail}</p>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Emergency Contact */}
              <Card className="border-0 shadow-lg bg-red-50 border-l-4 border-l-red-500">
                <CardContent className="p-6">
                  <h3 className="font-bold text-red-900 mb-2 flex items-center">
                    🚨 Emergency Support
                  </h3>
                  <p className="text-red-800 mb-2">24/7 Crisis Management Hotline</p>
                  <p className="font-semibold text-red-900">+91 98481 47003</p>
                  <p className="text-sm text-red-700 mt-2">
                    For urgent transportation issues, breakdowns, or emergencies
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-orange-500">Location</span>
            </h2>
            <p className="text-xl text-gray-600">
              Serving Hyderabad and surrounding areas with local expertise
            </p>
          </div>
          
          <div className="flex justify-center">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-md">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Hyderabad Office</h3>
                <div className="text-gray-600 mb-4 space-y-1">
                  <p>Zehra Towers, 8-1-43/A/66</p>
                  <p>Shaikpet Rd, opp. HP Petrol Pump</p>
                  <p>Sathya Colony, Qutub Shahi Tombs</p>
                  <p>Hyderabad, Telangana 500008</p>
                  <p>India</p>
                </div>
                <p className="text-orange-500 font-semibold">+91 98481 47003</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-lg text-gray-600">Hyderabad, Telangana</p>
          </div>
          
          <div className="bg-gray-300 rounded-lg h-96 flex items-center justify-center border-2 border-dashed border-gray-400">
            <div className="text-center text-gray-600">
              <div className="text-4xl mb-4">🗺️</div>
              <p className="text-lg font-semibold">Interactive Map</p>
              <p>Google Maps integration would be placed here</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Our team is standing by to discuss your transportation needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              Call Now: +91 98481 47003
            </Button>
            <Button size="lg" variant="outline" className="text-black border-white bg-white hover:bg-gray-100 hover:text-black">
              Schedule Meeting
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
