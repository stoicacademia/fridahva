import Link from "next/link";
import Image from "next/image";
import { Mail, Linkedin, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground/5 border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-lg text-primary mb-4">FridahVA</h3>
            <p className="text-sm text-foreground/60">
              Professional virtual assistant services for growing businesses.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/#how-it-works"
                  className="text-foreground/60 hover:text-primary transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="text-foreground/60 hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-foreground/60 hover:text-primary transition-colors"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/hire-a-va"
                  className="text-foreground/60 hover:text-primary transition-colors"
                >
                  Hire a VA
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-foreground/60 hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-foreground/60 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-foreground/60 hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-foreground/60 hover:text-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-foreground/60 hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60">
          <p>&copy; 2025 Fridahva. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <Link
            href="https://mbugua.nijue.me"
            target="_blank"
            rel="noopener noreferrer"
            className="group border rounded-lg shadow-sm p-2 mt-4 text-center text-sm text-foreground/60 flex flex-col justify-center items-center hover:text-primary transition-colors hover:translate-y-1"
          >
            <span>Crafted by Mbugua</span>
            <Image
              src="/amctrld.png"
              alt="amCtrld Logo"
              width={32}
              height={32}
              className="inline-block ml-1 mt-2"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
