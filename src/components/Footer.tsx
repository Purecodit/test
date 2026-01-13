import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-navy-blue text-white pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
                    <div>
                        <div className="flex items-center space-x-4 mb-8">
                            <Image src="/img/logo.webp" alt="Guru Nanak School Logo" width={64} height={64} className="w-16 h-16 object-contain" />
                            <div>
                                <h2 className="text-2xl font-bold heading-font">Guru Nanak School</h2>
                                <p className="text-premium-gold text-sm font-medium">CBSE Affiliated</p>
                            </div>
                        </div>
                        <p className="text-white/70 mb-8 leading-relaxed">A premier educational institution in Pharal, Haryana committed to nurturing future leaders through academic excellence, character building, and holistic development.</p>
                        <div className="flex space-x-4">
                            <Link href="#" aria-label="Facebook" className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-premium-gold hover:text-navy-blue transition">
                                <i className="fab fa-facebook-f"></i>
                            </Link>
                            <Link href="#" aria-label="Instagram" className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-premium-gold hover:text-navy-blue transition">
                                <i className="fab fa-instagram"></i>
                            </Link>
                            <Link href="#" aria-label="LinkedIn" className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-premium-gold hover:text-navy-blue transition">
                                <i className="fab fa-linkedin-in"></i>
                            </Link>
                            <Link href="#" aria-label="YouTube" className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-premium-gold hover:text-navy-blue transition">
                                <i className="fab fa-youtube"></i>
                            </Link>
                            <Link href="https://wa.me/919350202103" aria-label="WhatsApp" className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-premium-gold hover:text-navy-blue transition">
                                <i className="fab fa-whatsapp"></i>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-8 heading-font">Quick Links</h3>
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-white/70 hover:text-premium-gold transition flex items-center"><i className="fas fa-chevron-right text-xs mr-3 text-premium-gold"></i> Home</Link></li>
                            <li><Link href="/about" className="text-white/70 hover:text-premium-gold transition flex items-center"><i className="fas fa-chevron-right text-xs mr-3 text-premium-gold"></i> About Us</Link></li>
                            <li><Link href="/academics" className="text-white/70 hover:text-premium-gold transition flex items-center"><i className="fas fa-chevron-right text-xs mr-3 text-premium-gold"></i> Academics</Link></li>
                            <li><Link href="/curriculum" className="text-white/70 hover:text-premium-gold transition flex items-center"><i className="fas fa-chevron-right text-xs mr-3 text-premium-gold"></i> Curriculum</Link></li>
                            <li><Link href="/facilities" className="text-white/70 hover:text-premium-gold transition flex items-center"><i className="fas fa-chevron-right text-xs mr-3 text-premium-gold"></i> Facilities</Link></li>
                            <li><Link href="/admissions" className="text-white/70 hover:text-premium-gold transition flex items-center"><i className="fas fa-chevron-right text-xs mr-3 text-premium-gold"></i> Admissions</Link></li>
                            <li><Link href="/gallery" className="text-white/70 hover:text-premium-gold transition flex items-center"><i className="fas fa-chevron-right text-xs mr-3 text-premium-gold"></i> Gallery</Link></li>
                            <li><Link href="/contact" className="text-white/70 hover:text-premium-gold transition flex items-center"><i className="fas fa-chevron-right text-xs mr-3 text-premium-gold"></i> Contact Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-8 heading-font">Contact Information</h3>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-premium-gold/20 rounded-xl flex items-center justify-center mr-4">
                                    <i className="fas fa-map-marker-alt text-premium-gold"></i>
                                </div>
                                <div>
                                    <p className="font-semibold">Campus Address</p>
                                    <p className="text-white/70">Pharal, Kaithal-136021, Haryana</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-premium-gold/20 rounded-xl flex items-center justify-center mr-4">
                                    <i className="fas fa-phone-alt text-premium-gold"></i>
                                </div>
                                <div>
                                    <p className="font-semibold">Contact Numbers</p>
                                    <p className="text-white/70">+919350202103<br />+91 9813202103</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-premium-gold/20 rounded-xl flex items-center justify-center mr-4">
                                    <i className="fas fa-envelope text-premium-gold"></i>
                                </div>
                                <div>
                                    <p className="font-semibold">Email Address</p>
                                    <p className="text-white/70 text-xs">admissions@gurunanakschool.edu.in<br />info@gurunanakschool.edu.in</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-8 heading-font">School Hours</h3>
                        <div className="bg-white/10 p-6 rounded-2xl mb-8">
                            <div className="flex justify-between py-3 border-b border-white/20">
                                <span>Monday - Friday</span>
                                <span className="font-semibold">8:00 AM - 2:30 PM</span>
                            </div>
                            <div className="flex justify-between py-3 border-b border-white/20">
                                <span>Saturday</span>
                                <span className="font-semibold">8:00 AM - 12:30 PM</span>
                            </div>
                            <div className="flex justify-between py-3">
                                <span>Office Hours</span>
                                <span className="font-semibold">9:00 AM - 5:00 PM</span>
                            </div>
                        </div>
                        <Link href="/prospectus.pdf" className="block w-full gradient-gold text-navy-blue py-4 rounded-xl text-center font-bold shadow-premium hover:shadow-gold-glow">
                            <i className="fas fa-download mr-2"></i> Download Prospectus
                        </Link>
                    </div>
                </div>

                <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-white/50 text-center md:text-left mb-4 md:mb-0">&copy; {new Date().getFullYear()} Guru Nanak School, Pharal, Haryana. All Rights Reserved.</p>
                    <div className="flex space-x-6">
                        <Link href="/privacy-policy" className="text-white/50 hover:text-premium-gold transition text-sm">Privacy Policy</Link>
                        <Link href="/terms" className="text-white/50 hover:text-premium-gold transition text-sm">Terms of Service</Link>
                        <Link href="/sitemap" className="text-white/50 hover:text-premium-gold transition text-sm">Sitemap</Link>
                        <Link href="/disclosure" className="text-white/50 hover:text-premium-gold transition text-sm">Mandatory Disclosure</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
