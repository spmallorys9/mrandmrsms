import { useState } from 'react'
import heroImg from '@/imports/20260526_113438-1.jpg'
import vanImg from '@/imports/20260304_144355-5.jpg'

const FLAVORS = [
  { name: 'Strawberry Dream',          desc: 'Fresh strawberries & cream',          color: '#F9A8C9', emoji: '🍓' },
  { name: 'Clotted Cream Vanilla',     desc: 'Rich Cornish clotted cream vanilla',  color: '#FDDBB4', emoji: '🍦' },
  { name: 'Cornish Cream Tea',         desc: 'Scone, jam & clotted cream',          color: '#FDE2EF', emoji: '🫖' },
  { name: 'Salted Honeycomb & Caramel',desc: 'Sea salt, honeycomb & caramel swirl', color: '#FDDBB4', emoji: '🍯' },
  { name: 'Bubblegum Pop',             desc: 'Classic fairground flavour',           color: '#C9B8E8', emoji: '🫧' },
  { name: 'Chocolate Fudge',           desc: 'Rich Belgian chocolate',              color: '#D4A5A5', emoji: '🍫' },
]

const EVENTS = [
  'Birthday Party', 'Wedding', 'Corporate Event', 'School Fete',
  'Festival', 'Community Event', 'Other'
]

type BookingForm = {
  name: string; email: string; phone: string; date: string
  eventType: string; guests: string; location: string; message: string
}
type ContactForm = { name: string; email: string; message: string }

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFF0F5]/95 backdrop-blur-sm border-b-2 border-[#F9A8C9]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2">
          <span className="text-3xl">🍦</span>
          <span className="font-display font-black text-xl text-[#4A3060]">
            Mr & Mrs<span className="text-[#E87DAE]"> M's</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {[['Our Van', '#ourvan'], ['Flavours', '#flavours'], ['Booking', '#booking'], ['Contact', '#contact']].map(([label, href]) => (
            <a key={href} href={href} className="font-semibold text-[#4A3060] hover:text-[#E87DAE] transition-colors duration-200">{label}</a>
          ))}
          <a href="#booking" className="bg-[#F9A8C9] text-white font-bold px-5 py-2 rounded-full hover:bg-[#E87DAE] transition-colors duration-200 shadow-sm">
            Book Now
          </a>
        </div>
        <button className="md:hidden text-[#4A3060] p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <div className={`w-6 h-0.5 bg-current mb-1.5 transition-transform ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <div className={`w-6 h-0.5 bg-current mb-1.5 transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-current transition-transform ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-[#FFF0F5] border-t border-[#F9A8C9]/40 px-6 py-4 flex flex-col gap-4">
          {[['Our Van', '#ourvan'], ['Flavours', '#flavours'], ['Booking', '#booking'], ['Contact', '#contact']].map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)} className="font-semibold text-[#4A3060] hover:text-[#E87DAE]">{label}</a>
          ))}
          <a href="#booking" onClick={() => setMenuOpen(false)} className="bg-[#F9A8C9] text-white font-bold px-5 py-2 rounded-full text-center">Book Now</a>
        </div>
      )}
    </nav>
  )
}

function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-gradient-to-b from-[#FFF0F5] via-[#FDE8F2] to-[#EBF6FB]">
      {/* Soft blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#F9A8C9]/25 blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-96 h-96 rounded-full bg-[#A8D8EA]/25 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-[#C9B8E8]/15 blur-3xl" />
        {/* Sprinkle dots */}
        {[
          ['top-32 left-16',  '#F9A8C9', '12px', '0deg'],
          ['top-48 right-32', '#A8D8EA', '10px', '30deg'],
          ['bottom-48 left-32','#C9B8E8','14px', '-15deg'],
          ['bottom-32 right-16','#FDDBB4','10px','45deg'],
          ['top-64 left-1/3', '#F9A8C9', '8px',  '0deg'],
          ['top-80 right-1/4','#A8D8EA', '9px',  '20deg'],
        ].map(([pos, color, size, rot], i) => (
          <div key={i} className={`absolute ${pos} rounded-sm`}
            style={{ width: size, height: size, backgroundColor: color, transform: `rotate(${rot})`, opacity: 0.7 }} />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-20">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#A8D8EA]/25 border border-[#A8D8EA]/60 rounded-full px-4 py-1.5 mb-6">
            <span className="text-sm font-semibold text-[#4A86A0]">🚐 Available across Cornwall</span>
          </div>
          <h1 className="font-display font-black text-5xl md:text-6xl lg:text-7xl text-[#4A3060] leading-[1.05] mb-6">
            Bringing the{' '}
            <span className="italic text-[#E87DAE]">sweetest</span>
            {' '}scoops to your event
          </h1>
          <p className="text-lg text-[#7B5EA7] leading-relaxed mb-8 max-w-lg">
            From birthday parties to weddings, Mr & Mrs M's brings artisan ice cream and classic
            van charm right to your door. Hand-scooped, made fresh, unforgettable.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#booking"
              className="bg-[#F9A8C9] text-white font-bold px-8 py-3.5 rounded-full text-lg hover:bg-[#E87DAE] transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5">
              Book Your Event
            </a>
            <a href="#flavours"
              className="border-2 border-[#A8D8EA] text-[#4A3060] font-bold px-8 py-3.5 rounded-full text-lg hover:bg-[#A8D8EA]/20 transition-all duration-200">
              See Our Flavours
            </a>
          </div>
          <div className="mt-10 flex gap-8">
            {[['150+', 'Events served'], ['12', 'Flavours'], ['5★', 'Hygiene Rating']].map(([num, label]) => (
              <div key={label}>
                <div className="font-display font-black text-2xl text-[#E87DAE]">{num}</div>
                <div className="text-sm font-semibold text-[#7B5EA7]">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="relative">
            <div className="w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
              style={{ boxShadow: 'rgba(0,0,0,0.25) 0px 4px 4px 0px, rgba(0,0,0,0.25) 0px 4px 4px 0px inset' }}>
              <img src={heroImg} alt="Mr & Mrs M's ice cream van"
                className="w-full h-full object-cover" />
            </div>
            <div className="absolute -top-4 -right-4 bg-[#F9A8C9] text-white font-black text-sm px-4 py-2 rounded-full rotate-6 shadow-md">
              Fresh daily! 🌞
            </div>
            <div className="absolute -bottom-4 -left-4 bg-[#A8D8EA] text-[#4A3060] font-bold text-sm px-4 py-2 rounded-2xl shadow-md">
              🍦 12 flavours
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#F9A8C9" opacity="0.2" />
        </svg>
      </div>
    </section>
  )
}

function OurVan() {
  return (
    <section id="ourvan" className="py-24 bg-gradient-to-br from-[#FDE8F2] to-[#EBF6FB]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-[#E87DAE] font-bold text-sm uppercase tracking-widest">Meet the team</span>
          <h2 className="font-display font-black text-4xl md:text-5xl text-[#4A3060] mt-2">
            Our <span className="italic text-[#E87DAE]">Van</span>
          </h2>
          <p className="text-[#7B5EA7] mt-4 max-w-xl mx-auto">
            She's been lovingly restored and kitted out with everything needed to serve the perfect scoop.
            Meet the star of the show.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Van photo */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
              <img
                src={vanImg}
                alt="Mr & Mrs M's ice cream van"
                className="w-full h-72 md:h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-[#F9A8C9] text-white font-black text-sm px-5 py-2.5 rounded-full shadow-lg rotate-3">
              Est. 2026 🍦
            </div>
          </div>

          {/* Story */}
          <div>
            <h3 className="font-display font-black text-3xl text-[#4A3060] mb-4">
              A little bit about <span className="italic text-[#75BADA]">us</span>
            </h3>
            <p className="text-[#7B5EA7] leading-relaxed mb-4">
              Mr & Mrs M's started as a dream over a kitchen table in 2024. We wanted to bring
              proper, artisan ice cream — made with Cornish cream and locally sourced ingredients —
              to events across Cornwall and beyond.
            </p>
            <p className="text-[#7B5EA7] leading-relaxed mb-6">
              Our van, lovingly nicknamed <strong className="text-[#4A3060]">"Shelby"</strong>, has
              been with us since the start. Fully refrigerated, freshly painted, and always stocked
              with our rotating menu of seasonal flavours, she turns up to every event ready to make
              memories.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Fully insured', 'Food hygiene rated 5★', 'Allergen info available', 'Vegan options'].map(badge => (
                <span key={badge} className="bg-white border-2 border-[#F9A8C9]/50 text-[#4A3060] text-sm font-semibold px-4 py-1.5 rounded-full">
                  ✓ {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Feature tiles */}
        <div className="flex items-center justify-center gap-5">
          {[
            { icon: '🚐', title: 'Fully mobile', desc: 'We come to you — no venue restrictions' },
            { icon: '❄️', title: 'Always chilled', desc: 'Built-in refrigeration keeps every scoop perfect' },
            { icon: '🌍', title: 'Eco-friendly', desc: 'Compostable cups & spoons as standard' },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="bg-white rounded-3xl p-6 border-2 border-[#F9D6E8] text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="text-3xl mb-3">{icon}</div>
              <h4 className="font-display font-bold text-[#4A3060] mb-1">{title}</h4>
              <p className="text-xs text-[#7B5EA7] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Flavours() {
  return (
    <section id="flavours" className="py-24 bg-[#FFF0F5]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-[#E87DAE] font-bold text-sm uppercase tracking-widest">What's Scooping</span>
          <h2 className="font-display font-black text-4xl md:text-5xl text-[#4A3060] mt-2">
            Our <span className="italic">Signature</span> Flavours
          </h2>
          <p className="text-[#7B5EA7] mt-4 max-w-xl mx-auto">
            Made in small batches with real ingredients. No artificial colours, no shortcuts — just
            exceptional ice cream your guests will talk about.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {FLAVORS.map((f) => (
            <div key={f.name}
              className="group bg-white rounded-3xl p-6 border-2 border-[#FDE2EF] hover:border-[#F9A8C9] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 cursor-default">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4"
                style={{ backgroundColor: f.color + '55' }}>
                {f.emoji}
              </div>
              <h3 className="font-display font-bold text-lg text-[#4A3060] mb-1">{f.name}</h3>
              <p className="text-sm text-[#7B5EA7]">{f.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-[#7B5EA7] mt-8 font-semibold">
          Seasonal specials & vegan options always available — ask when booking 🌱
        </p>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    { step: '01', icon: '📅', title: 'Fill the form', desc: 'Tell us your date, location, and number of guests.' },
    { step: '02', icon: '📞', title: 'We confirm', desc: "We'll call or email you to finalise the details within 24 hours." },
    { step: '03', icon: '🚐', title: 'We roll up', desc: 'Sit back and enjoy while we bring the ice cream to you.' },
  ]
  return (
    <section className="py-20 bg-gradient-to-br from-[#EBF6FB] via-[#E8EEF9] to-[#F2E8F6]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-[#75BADA] font-bold text-sm uppercase tracking-widest">Simple as that</span>
          <h2 className="font-display font-black text-4xl md:text-5xl text-[#4A3060] mt-2">
            How it <span className="italic text-[#E87DAE]">works</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.step} className="relative bg-white/60 rounded-3xl p-8 border border-[#A8D8EA]/40 backdrop-blur-sm">
              <div className="font-display font-black text-6xl text-[#A8D8EA]/40 absolute -top-4 left-4 select-none">{s.step}</div>
              <div className="relative pt-8">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-display font-bold text-xl text-[#4A3060] mb-2">{s.title}</h3>
                <p className="text-[#7B5EA7] leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function BookingSection() {
  const [form, setForm] = useState<BookingForm>({
    name: '', email: '', phone: '', date: '', eventType: '', guests: '', location: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<BookingForm>>({})

  const validate = () => {
    const e: Partial<BookingForm> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email required'
    if (!form.phone.trim()) e.phone = 'Phone number required'
    if (!form.date) e.date = 'Please pick a date'
    if (!form.eventType) e.eventType = 'Select event type'
    if (!form.guests) e.guests = 'Estimate required'
    if (!form.location.trim()) e.location = 'Location required'
    return e
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    const res = await fetch('https://formspree.io/f/xbglkzpo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(form),
    })
    if (res.ok) setSubmitted(true)
  }

  const inputClass = (err?: string) =>
    `w-full border-2 rounded-2xl px-4 py-3 font-body text-[#4A3060] bg-white outline-none focus:border-[#F9A8C9] transition-colors ${err ? 'border-red-300' : 'border-[#F9D6E8]'}`

  const field = (id: keyof BookingForm, label: string, type = 'text', placeholder = '') => (
    <div>
      <label className="block text-sm font-bold text-[#4A3060] mb-1.5" htmlFor={id}>{label}</label>
      <input id={id} type={type} placeholder={placeholder} value={form[id]}
        onChange={(e) => { setForm(f => ({ ...f, [id]: e.target.value })); setErrors(er => ({ ...er, [id]: '' })) }}
        className={inputClass(errors[id])} />
      {errors[id] && <p className="text-red-400 text-xs mt-1">{errors[id]}</p>}
    </div>
  )

  return (
    <section id="booking" className="py-24 bg-[#FDE8F2]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2">
            <span className="text-[#E87DAE] font-bold text-sm uppercase tracking-widest">Reserve your slot</span>
            <h2 className="font-display font-black text-4xl md:text-5xl text-[#4A3060] mt-2 mb-6">
              Book the<br /><span className="italic text-[#E87DAE]">van</span>
            </h2>
            <p className="text-[#7B5EA7] leading-relaxed mb-8">
              Fill in the form and we'll get back to you within 24 hours to confirm your booking
              and discuss menus. A 25% deposit secures your date.
            </p>
            <div className="space-y-4">
              {[
                ['📍', 'Coverage', 'Cornwall'],
                ['⏱️', 'Minimum booking', '2 hours'],
                ['👥', 'Capacity', 'Up to 500 guests'],
                ['🗓️', 'Availability', 'Mon–Sun, year-round'],
              ].map(([icon, label, val]) => (
                <div key={String(label)} className="flex gap-3 items-start">
                  <span className="text-xl mt-0.5">{icon}</span>
                  <div>
                    <div className="font-bold text-sm text-[#4A3060]">{label}</div>
                    <div className="text-sm text-[#7B5EA7]">{val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-white rounded-3xl p-10 shadow-lg border-2 border-[#A8D8EA]/50 text-center">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="font-display font-black text-2xl text-[#4A3060] mb-3">Booking Request Sent!</h3>
                <p className="text-[#7B5EA7] mb-6">
                  Thanks, <strong>{form.name}</strong>! We'll be in touch within 24 hours to confirm your
                  booking for <strong>{new Date(form.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</strong>.
                </p>
                <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', date: '', eventType: '', guests: '', location: '', message: '' }) }}
                  className="text-[#E87DAE] font-bold hover:underline">
                  Submit another booking
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-lg border-2 border-[#F9D6E8] space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {field('name', 'Your name', 'text', 'Jane Smith')}
                  {field('email', 'Email address', 'email', 'jane@example.com')}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {field('phone', 'Phone number', 'tel', '+44 7700 000000')}
                  {field('date', 'Event date', 'date')}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-[#4A3060] mb-1.5" htmlFor="eventType">Event type</label>
                    <select id="eventType" value={form.eventType}
                      onChange={(e) => { setForm(f => ({ ...f, eventType: e.target.value })); setErrors(er => ({ ...er, eventType: '' })) }}
                      className={inputClass(errors.eventType)}>
                      <option value="">Select type…</option>
                      {EVENTS.map(ev => <option key={ev} value={ev}>{ev}</option>)}
                    </select>
                    {errors.eventType && <p className="text-red-400 text-xs mt-1">{errors.eventType}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#4A3060] mb-1.5" htmlFor="guests">Estimated guests</label>
                    <select id="guests" value={form.guests}
                      onChange={(e) => { setForm(f => ({ ...f, guests: e.target.value })); setErrors(er => ({ ...er, guests: '' })) }}
                      className={inputClass(errors.guests)}>
                      <option value="">How many…</option>
                      {['Under 20', '20–50', '50–100', '100–200', '200–500', '500+'].map(g => <option key={g} value={g}>{g}</option>)}
                    </select>
                    {errors.guests && <p className="text-red-400 text-xs mt-1">{errors.guests}</p>}
                  </div>
                </div>
                {field('location', 'Event location / postcode', 'text', 'Village Hall, Truro, TR1')}
                <div>
                  <label className="block text-sm font-bold text-[#4A3060] mb-1.5" htmlFor="message">Anything else? (optional)</label>
                  <textarea id="message" rows={3} placeholder="Dietary requirements, theme, special requests…"
                    value={form.message} onChange={(e) => setForm(f => ({ ...f, message: e.target.value }))}
                    className="w-full border-2 border-[#F9D6E8] rounded-2xl px-4 py-3 font-body text-[#4A3060] bg-white outline-none focus:border-[#F9A8C9] transition-colors resize-none" />
                </div>
                <button type="submit"
                  className="w-full bg-[#F9A8C9] text-white font-black text-lg py-4 rounded-2xl hover:bg-[#E87DAE] transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 mt-2">
                  Send Booking Request 🍦
                </button>
                <p className="text-xs text-center text-[#7B5EA7]">We'll reply within 24 hours. No payment taken until we confirm.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  const [form, setForm] = useState<ContactForm>({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<ContactForm>>({})

  const validate = () => {
    const e: Partial<ContactForm> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email required'
    if (!form.message.trim()) e.message = 'Message required'
    return e
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    const res = await fetch('https://formspree.io/f/xbglkzpo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(form),
    })
    if (res.ok) setSubmitted(true)
  }

  const inputClass = (err?: string) =>
    `w-full border-2 rounded-2xl px-4 py-3 text-[#4A3060] bg-white outline-none focus:border-[#A8D8EA] transition-colors ${err ? 'border-red-300' : 'border-[#D6EEF8]'}`

  return (
    <section id="contact" className="py-24 bg-[#EBF6FB]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#75BADA] font-bold text-sm uppercase tracking-widest">Say hello</span>
            <h2 className="font-display font-black text-4xl md:text-5xl text-[#4A3060] mt-2 mb-6">
              Got a<br /><span className="italic text-[#75BADA]">question?</span>
            </h2>
            <p className="text-[#7B5EA7] leading-relaxed mb-8">
              Not quite ready to book, or have a question about pricing, custom flavours, or logistics?
              Drop us a message and we'll get back to you shortly.
            </p>
            <div className="space-y-5">
              {[
                ['📧', 'mrandmrsms@outlook.com'],
                ['📱', '07849008118'],
                ['📍', 'Based in Cornwall'],
              ].map(([icon, val]) => (
                <div key={String(val)} className="flex items-center gap-3">
                  <span className="text-2xl">{icon}</span>
                  <span className="font-semibold text-[#4A3060]">{val}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 p-5 bg-[#A8D8EA]/20 border border-[#A8D8EA]/50 rounded-2xl">
              <p className="font-bold text-[#4A3060] text-sm">⏰ Response time</p>
              <p className="text-[#7B5EA7] text-sm mt-1">We reply to all messages within 24 hours, Mon–Sat.</p>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="bg-white rounded-3xl p-10 shadow-lg border-2 border-[#A8D8EA]/50 text-center">
                <div className="text-6xl mb-4">🙌</div>
                <h3 className="font-display font-black text-2xl text-[#4A3060] mb-3">Message Sent!</h3>
                <p className="text-[#7B5EA7] mb-6">Thanks {form.name}! We'll be in touch soon.</p>
                <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', message: '' }) }}
                  className="text-[#75BADA] font-bold hover:underline">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-lg border-2 border-[#D6EEF8] space-y-5" noValidate>
                <div>
                  <label className="block text-sm font-bold text-[#4A3060] mb-1.5" htmlFor="c-name">Your name</label>
                  <input id="c-name" type="text" placeholder="Jane Smith" value={form.name}
                    onChange={(e) => { setForm(f => ({ ...f, name: e.target.value })); setErrors(er => ({ ...er, name: '' })) }}
                    className={inputClass(errors.name)} />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#4A3060] mb-1.5" htmlFor="c-email">Email address</label>
                  <input id="c-email" type="email" placeholder="jane@example.com" value={form.email}
                    onChange={(e) => { setForm(f => ({ ...f, email: e.target.value })); setErrors(er => ({ ...er, email: '' })) }}
                    className={inputClass(errors.email)} />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#4A3060] mb-1.5" htmlFor="c-message">Message</label>
                  <textarea id="c-message" rows={5} placeholder="Tell us how we can help…" value={form.message}
                    onChange={(e) => { setForm(f => ({ ...f, message: e.target.value })); setErrors(er => ({ ...er, message: '' })) }}
                    className={`${inputClass(errors.message)} resize-none`} />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>
                <button type="submit"
                  className="w-full bg-[#A8D8EA] text-[#4A3060] font-black text-lg py-4 rounded-2xl hover:bg-[#75BADA] hover:text-white transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5">
                  Send Message 💌
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#F9D6E8] to-[#D6EEF8] py-12 border-t-2 border-[#F9A8C9]/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🍦</span>
              <span className="font-display font-black text-xl text-[#4A3060]">
                Mr & Mrs<span className="text-[#E87DAE]"> M's</span>
              </span>
            </div>
            <p className="text-[#7B5EA7] text-sm">Artisan ice cream for every occasion</p>
          </div>
          <div className="flex gap-8 text-sm">
            {[['Flavours', '#flavours'], ['Book', '#booking'], ['Contact', '#contact']].map(([l, h]) => (
              <a key={h} href={h} className="text-[#7B5EA7] hover:text-[#E87DAE] transition-colors font-semibold">{l}</a>
            ))}
          </div>
          <p className="text-[#7B5EA7] text-sm">© {new Date().getFullYear()} Mr & Mrs M's. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <OurVan />
      <Flavours />
      <HowItWorks />
      <BookingSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
