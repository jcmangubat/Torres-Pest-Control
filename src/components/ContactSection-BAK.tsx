import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { useRef, useEffect } from "react";

const ContactSection = () => {
  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Optional: handle autofocus when mounted or scrolled via IntersectionObserver
  }, []);

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get Your Free Inspection Today
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Contact us for a free quotation and professional pest control
            service
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-600 dark:text-green-400" />
                <span className="text-gray-700 dark:text-gray-300">
                  +63 917 139 1908
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-600 dark:text-green-400" />
                <span className="text-gray-700 dark:text-gray-300">
                  torres.pestcontrol@email.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                <span className="text-gray-700 dark:text-gray-300">
                  WhatsApp Available
                </span>
              </div>
            </div>
            <div className="mt-8 space-y-4">
              <Button
                className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 text-white"
                onClick={() => (window.location.href = "tel:+639171391908")}
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Now for Free Inspection
              </Button>
              <Button
                variant="outline"
                className="w-full border-green-600 text-green-600 hover:bg-green-50 dark:border-green-400 dark:text-green-400 dark:hover:bg-gray-800"
                onClick={() =>
                  window.open("https://wa.me/639171391908", "_blank")
                }
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp Us
              </Button>
            </div>
          </div>
          <div>
            <form className="space-y-4">
              <Input
                ref={nameInputRef}
                placeholder="Your Name"
                className="dark:bg-gray-800 dark:border-gray-600"
              />
              <Input
                placeholder="Your Email"
                type="email"
                className="dark:bg-gray-800 dark:border-gray-600"
              />
              <Textarea
                placeholder="Your Message"
                rows={4}
                className="dark:bg-gray-800 dark:border-gray-600"
              />
              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
