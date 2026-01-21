'use client'

import { Rocket, Brain, Code, Sparkles, ExternalLink, Mail, MapPin, Building2 } from 'lucide-react'

function StarField() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="star animate-twinkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            opacity: Math.random() * 0.7 + 0.3,
          }}
        />
      ))}
    </div>
  )
}

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative w-10 h-10">
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border-2 border-accent-cyan/30" />
        {/* Planet */}
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-accent-purple to-accent-cyan" />
        {/* Ring around planet */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-3 border-2 border-accent-cyan/50 rounded-full transform -rotate-12" />
        </div>
        {/* Small orbiting dot */}
        <div className="absolute w-2 h-2 bg-accent-orange rounded-full animate-pulse-glow" style={{ top: '2px', right: '2px' }} />
      </div>
      <span className="text-xl font-bold">Interstellar</span>
    </div>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <StarField />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-6">
            <a href="#services" className="text-sm text-gray-400 hover:text-white transition-colors">Services</a>
            <a href="#products" className="text-sm text-gray-400 hover:text-white transition-colors">Products</a>
            <a href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">About</a>
            <a href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Glowing orb decoration */}
          <div className="absolute top-40 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent-cyan/20 rounded-full blur-3xl" />
          <div className="absolute top-60 left-1/3 w-64 h-64 bg-accent-purple/20 rounded-full blur-3xl" />

          <div className="relative">
            <p className="text-accent-cyan text-sm font-medium tracking-widest uppercase mb-4">
              Interstellar s.r.o.
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">Helping You Navigate</span>
              <br />
              <span className="text-white">the World of AI</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
              We build innovative SaaS software and provide expert consulting services
              in AI and Agentic AI implementation to help businesses thrive in the age of intelligence.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.seekwhy.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                Visit SeekWhy.ai <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border border-white/20 rounded-full font-medium hover:bg-white/5 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="glow-line max-w-4xl mx-auto" />

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Expert solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-cyan/20 to-accent-cyan/5 flex items-center justify-center mb-6">
                <Code className="w-7 h-7 text-accent-cyan" />
              </div>
              <h3 className="text-xl font-semibold mb-3">SaaS Development</h3>
              <p className="text-gray-400">
                Custom software-as-a-service solutions built with modern technologies
                and scalable architecture for your business growth.
              </p>
            </div>

            <div className="glass-card p-8 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-purple/5 flex items-center justify-center mb-6">
                <Brain className="w-7 h-7 text-accent-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Consulting</h3>
              <p className="text-gray-400">
                Strategic guidance on artificial intelligence adoption,
                helping you identify opportunities and implement AI solutions effectively.
              </p>
            </div>

            <div className="glass-card p-8 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-pink/20 to-accent-pink/5 flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-accent-pink" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Agentic AI Implementation</h3>
              <p className="text-gray-400">
                Deploy autonomous AI agents that can reason, plan, and execute complex
                tasks to automate your business processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-6 bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Innovative tools powered by cutting-edge AI technology
            </p>
          </div>

          <div className="glass-card p-8 md:p-12 max-w-3xl mx-auto">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-orange to-accent-pink flex items-center justify-center flex-shrink-0">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  <span className="text-gradient-orange">SeekWhy.ai</span>
                </h3>
                <p className="text-gray-400 mb-4">
                  Our flagship AI-powered research and analysis platform. SeekWhy helps teams
                  understand complex topics, conduct thorough research, and generate actionable
                  insights using advanced language models.
                </p>
                <a
                  href="https://www.seekwhy.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent-cyan hover:text-white transition-colors"
                >
                  Learn more about SeekWhy <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Interstellar</h2>
              <p className="text-gray-400 mb-4">
                Founded in 2018, Interstellar s.r.o. has been at the forefront of software
                innovation, helping businesses leverage technology to achieve their goals.
              </p>
              <p className="text-gray-400 mb-6">
                Our team combines deep technical expertise with strategic thinking to deliver
                solutions that make a real difference. From custom SaaS applications to
                cutting-edge AI implementations, we partner with our clients to turn their
                vision into reality.
              </p>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient">2018</div>
                  <div className="text-sm text-gray-500">Founded</div>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient">AI</div>
                  <div className="text-sm text-gray-500">Focused</div>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient">SaaS</div>
                  <div className="text-sm text-gray-500">Products</div>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Decorative element */}
              <div className="aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 rounded-full border border-accent-cyan/20" />
                <div className="absolute inset-8 rounded-full border border-accent-purple/20" />
                <div className="absolute inset-16 rounded-full border border-accent-pink/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent-cyan to-accent-purple animate-pulse-glow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Ready to start your AI journey? Get in touch with us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="glass-card p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-accent-cyan" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <a href="mailto:info@interstellar.guide" className="text-gray-400 hover:text-accent-cyan transition-colors">
                info@interstellar.guide
              </a>
            </div>

            <div className="glass-card p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-accent-purple/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-accent-purple" />
              </div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-gray-400">Slovakia, EU</p>
            </div>

            <div className="glass-card p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-accent-pink/10 flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-6 h-6 text-accent-pink" />
              </div>
              <h3 className="font-semibold mb-2">Company</h3>
              <p className="text-gray-400">Interstellar s.r.o.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-6">
              <Logo />
              <div className="w-px h-8 bg-white/10 hidden md:block" />
              <p className="text-sm text-gray-500">
                Operating since 2018
              </p>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a
                href="https://www.orsr.sk/vypis.asp?ID=429326&SID=2&P=0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
              >
                Company Register <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/5 text-center">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Interstellar s.r.o. All rights reserved.
            </p>
            <p className="text-xs text-gray-600 mt-2">
              ICO: 51940299 | Registered in the Commercial Register of the District Court Bratislava I
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
