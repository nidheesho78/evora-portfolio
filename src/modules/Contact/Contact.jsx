
// import PageBanner from '@/utils/PageBanner';
// import AnimatedSection from '@/utils/Animations';
// import { MapPin, Phone, Mail, Clock } from 'lucide-react';
// import { useState } from 'react';
// import toast from 'react-hot-toast';

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     subject: '',
//     message: '',
//   });

//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.name.trim()) newErrors.name = 'Name is required';
//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = 'Invalid email format';
//     }
//     if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
//     if (!formData.message.trim()) newErrors.message = 'Message is required';

//     if (formData.phone && !/^\+?\d[\d\s-]{7,}$/.test(formData.phone)) {
//       newErrors.phone = 'Invalid phone format';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));

//     if (errors[name]) {
//       setErrors((prev) => ({ ...prev, [name]: '' }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       toast.error('Please fill in all required fields correctly');
//       return;
//     }

//     setIsSubmitting(true);

//     try {
//       console.log('Sending form data:', formData);

//       const res = await fetch('/api/contact', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       console.log('Response status:', res.status);

//       const data = await res.json();

//       if (res.ok && data.success) {
//         toast.success('Message sent successfully! We will get back to you soon.');
//         setFormData({
//           name: '',
//           email: '',
//           phone: '',
//           subject: '',
//           message: '',
//         });
//       } else {
//         throw new Error(data.error || 'Failed to send message');
//       }
//     } catch (err) {
//       console.error('Submission error:', err);
//       toast.error(err.message || 'Failed to send message. Please try again.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <main>
//       <PageBanner
//         title="Contact Us"
//         subtitle="Get in touch with our team"
//         image="https://images.pexels.com/photos/5288134/pexels-photo-5288134.jpeg"
//       />

//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-6">
//           <div className="grid lg:grid-cols-2 gap-12">
//             <AnimatedSection animation="slideLeft">
//               <div className="space-y-8">
//                 <div>
//                   <h2 className="text-4xl font-bold text-[#005369] mb-4">Let&apos;s Talk</h2>
//                   <p className="text-lg text-gray-700">
//                     Have a project in mind? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
//                   </p>
//                 </div>

//                 <div className="space-y-6">
//                   <div className="flex items-start space-x-4">
//                     <div className="w-12 h-12 rounded-full bg-[#005369] flex items-center justify-center flex-shrink-0">
//                       <MapPin size={24} className="text-[#c2b790]" />
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-xl text-[#005369] mb-1">Our Office</h3>
//                       <p className="text-gray-600">Dubai, United Arab Emirates</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start space-x-4">
//                     <div className="w-12 h-12 rounded-full bg-[#005369] flex items-center justify-center flex-shrink-0">
//                       <Mail size={24} className="text-[#c2b790]" />
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-xl text-[#005369] mb-1">Email Us</h3>
//                       <a
//                         href="mailto:evorafuture@gmail.com"
//                         className="text-gray-600 hover:text-[#c2b790] transition-colors"
//                       >
//                         evorafuture@gmail.com
//                       </a>
//                     </div>
//                   </div>

//                   <div className="flex items-start space-x-4">
//                     <div className="w-12 h-12 rounded-full bg-[#005369] flex items-center justify-center flex-shrink-0">
//                       <Phone size={24} className="text-[#c2b790]" />
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-xl text-[#005369] mb-2">Call Us</h3>
//                       <div className="space-y-2 text-gray-600">
//                         <p>
//                           <span className="font-medium">Mohammed Rufail:</span>{' '}
//                           <a
//                             href="tel:+971506596828"
//                             className="hover:text-[#c2b790] transition-colors"
//                           >
//                             +971 50 659 6828
//                           </a>
//                         </p>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="flex items-start space-x-4">
//                     <div className="w-12 h-12 rounded-full bg-[#005369] flex items-center justify-center flex-shrink-0">
//                       <Clock size={24} className="text-[#c2b790]" />
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-xl text-[#005369] mb-1">Working Hours</h3>
//                       <p className="text-gray-600">Sunday - Thursday: 8:00 AM - 6:00 PM</p>
//                       <p className="text-gray-600">Saturday: 9:00 AM - 3:00 PM</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </AnimatedSection>

//             <AnimatedSection animation="slideRight" delay={200}>
//               <div className="bg-gray-50 rounded-2xl p-8">
//                 <h3 className="text-2xl font-bold text-[#005369] mb-6">Send Us a Message</h3>
//                 <form onSubmit={handleSubmit} className="space-y-6" noValidate>
//                   <div>
//                     <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
//                       Your Name *
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       className={`w-full px-4 py-3 rounded-lg border ${
//                         errors.name ? 'border-red-500' : 'border-gray-300'
//                       } focus:ring-2 focus:ring-[#005369] focus:border-transparent outline-none transition-all text-black`}
//                       placeholder="John Doe"
//                     />
//                     {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
//                   </div>

//                   <div>
//                     <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                       Email Address *
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       className={`w-full px-4 py-3 rounded-lg border ${
//                         errors.email ? 'border-red-500' : 'border-gray-300'
//                       } focus:ring-2 focus:ring-[#005369] focus:border-transparent outline-none transition-all text-black`}
//                       placeholder="john@example.com"
//                     />
//                     {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
//                   </div>

//                   <div>
//                     <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
//                       Phone Number
//                     </label>
//                     <input
//                       type="tel"
//                       id="phone"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       className={`w-full px-4 py-3 rounded-lg border ${
//                         errors.phone ? 'border-red-500' : 'border-gray-300'
//                       } focus:ring-2 focus:ring-[#005369] focus:border-transparent outline-none transition-all text-black`}
//                       placeholder="+971 XX XXX XXXX"
//                     />
//                     {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
//                   </div>

//                   <div>
//                     <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
//                       Subject *
//                     </label>
//                     <input
//                       type="text"
//                       id="subject"
//                       name="subject"
//                       value={formData.subject}
//                       onChange={handleChange}
//                       className={`w-full px-4 py-3 rounded-lg border ${
//                         errors.subject ? 'border-red-500' : 'border-gray-300'
//                       } focus:ring-2 focus:ring-[#005369] focus:border-transparent outline-none transition-all text-black`}
//                       placeholder="Project Inquiry"
//                     />
//                     {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
//                   </div>

//                   <div>
//                     <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
//                       Message *
//                     </label>
//                     <textarea
//                       id="message"
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       required
//                       rows={5}
//                       className={`w-full px-4 py-3 rounded-lg border ${
//                         errors.message ? 'border-red-500' : 'border-gray-300'
//                       } focus:ring-2 focus:ring-[#005369] focus:border-transparent outline-none transition-all resize-none text-black`}
//                       placeholder="Tell us about your project..."
//                     />
//                     {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
//                   </div>

//                   <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="w-full bg-[#005369] text-white py-4 rounded-lg font-semibold hover:bg-[#003d4d] transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
//                   >
//                     {isSubmitting ? 'Sending...' : 'Send Message'}
//                   </button>
//                 </form>
//               </div>
//             </AnimatedSection>
//           </div>
//         </div>
//       </section>

//       <section className="py-0">
//         <AnimatedSection>
//           <div className="h-[500px] w-full">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.6828078812!2d54.947330799999995!3d25.0756994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
//               width="100%"
//               height="100%"
//               style={{ border: 0 }}
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               title="Evora Future Location"
//             />
//           </div>
//         </AnimatedSection>
//       </section>
//     </main>
//   );
// }


"use client";

import PageBanner from "@/utils/PageBanner";
import AnimatedSection from "@/utils/Animations";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    if (formData.phone && !/^\+?\d[\d\s-]{7,}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone format";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fill in all required fields correctly");
      return;
    }

    setIsSubmitting(true);

    try {
      console.log("Sending form data:", formData);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Response status:", res.status);

      const data = await res.json();

      if (res.ok && data.success) {
        toast.success(
          "Message sent successfully! We will get back to you soon.",
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error(data.error || "Failed to send message");
      }
    } catch (err) {
      console.error("Submission error:", err);
      toast.error(err.message || "Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <PageBanner
        title="Contact Us"
        subtitle="Get in touch with our team"
        image="/images/contact-banner.png"
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection animation="slideLeft">
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-bold text-[#005369] mb-4">
                    Let&apos;s Talk
                  </h2>
                  <p className="text-lg text-gray-700">
                    Have a project in mind? We&apos;d love to hear from you.
                    Send us a message and we&apos;ll respond as soon as
                    possible.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-[#005369] flex items-center justify-center flex-shrink-0">
                      <MapPin size={24} className="text-[#c2b790]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl text-[#005369] mb-1">
                        Our Office
                      </h3>
                      <p className="text-gray-600">
                        <span>
                          Youssef zahra building, Block B, <br />
                          Office No:102, Al Quoz 3,{" "}
                        </span>
                        Dubai, United Arab Emirates
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-[#005369] flex items-center justify-center flex-shrink-0">
                      <Mail size={24} className="text-[#c2b790]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl text-[#005369] mb-1">
                        Email Us
                      </h3>
                      <a
                        href="mailto:hello@evorafuture.com"
                        className="text-gray-600 hover:text-[#c2b790] transition-colors"
                      >
                        hello@evorafuture.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-[#005369] flex items-center justify-center flex-shrink-0">
                      <Phone size={24} className="text-[#c2b790]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl text-[#005369] mb-2">
                        Call Us
                      </h3>
                      <div className="space-y-2 text-gray-600">
                        <p>
                          <a
                            href="tel:+971542004993"
                            className="hover:text-[#c2b790] transition-colors"
                          >
                            +971 54 200 4993
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-[#005369] flex items-center justify-center flex-shrink-0">
                      <Clock size={24} className="text-[#c2b790]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl text-[#005369] mb-1">Working Hours</h3>
                      <p className="text-gray-600">Sunday - Thursday: 8:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Saturday: 9:00 AM - 3:00 PM</p>
                    </div>
                  </div> */}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideRight" delay={200}>
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-[#005369] mb-6">
                  Send Us a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      } focus:ring-2 focus:ring-[#005369] focus:border-transparent outline-none transition-all text-black`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      } focus:ring-2 focus:ring-[#005369] focus:border-transparent outline-none transition-all text-black`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                      } focus:ring-2 focus:ring-[#005369] focus:border-transparent outline-none transition-all text-black`}
                      placeholder="+971 XX XXX XXXX"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.subject ? "border-red-500" : "border-gray-300"
                      } focus:ring-2 focus:ring-[#005369] focus:border-transparent outline-none transition-all text-black`}
                      placeholder="Project Inquiry"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.message ? "border-red-500" : "border-gray-300"
                      } focus:ring-2 focus:ring-[#005369] focus:border-transparent outline-none transition-all resize-none text-black`}
                      placeholder="Tell us about your project..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#005369] text-white py-4 rounded-lg font-semibold hover:bg-[#003d4d] transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-0">
        <AnimatedSection>
          <div className="h-[500px] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.6828078812!2d54.947330799999995!3d25.0756994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Evora Future Location"
            />
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
}
