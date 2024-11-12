import { Phone, Mail, Clock, MapPin } from "lucide-react";

const ContactForm = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div>
          <h3 className="text-center text-2xl font-bold text-gray-800">
            Contactez-nous
          </h3>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Mail className="w-6 h-6 text-green-600" />
                <span>demo.Mail@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-6 h-6 text-green-600" />
                <span>+254 821 94 52 35</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-6 h-6 text-green-600" />
                <span>Folokomania, Cotonou</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6 text-green-600" />
                <span>LUNDI - SAMEDI<br />8h - 18h</span>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-xl mb-4">Nous laisser un message...</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Prénom et nom"
                    className="w-full p-2 border rounded-md"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full p-2 border rounded-md"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows="4"
                    className="w-full p-2 border rounded-md"
                    required
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                >
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;