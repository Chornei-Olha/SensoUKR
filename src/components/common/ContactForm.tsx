'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import emailjs from '@emailjs/browser';
import { FaPhone, FaWhatsapp, FaTelegramPlane, FaViber } from 'react-icons/fa';

export default function ContactForm() {
  const t = useTranslations('ContactForm');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comment: '',
    agreeProcessing: true,
    agreePolicy: true,
  });

  const [showThankYou, setShowThankYou] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    let newValue: string | boolean = value;

    if (type === 'checkbox' && 'checked' in e.target) {
      newValue = e.target.checked;
    }

    if (name === 'phone' && typeof newValue === 'string') {
      newValue = newValue.replace(/\D/g, ''); // только цифры
      if (newValue.length > 10) newValue = newValue.slice(0, 9);
    }

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await emailjs.send('service_mu7lkll', 'template_50n80zm', formData, 'ECFxdEwW_r86BmFTd');

      // показываем окно благодарности
      setShowThankYou(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        comment: '',
        agreeProcessing: false,
        agreePolicy: true,
      });

      // скрываем через 3 секунды
      setTimeout(() => {
        setShowThankYou(false);
      }, 3000);
    } catch (error) {
      console.error('Error:', error);
      alert('❌ Помилка при відправці. Спробуйте ще раз.');
    }
  };

  return (
    <section className="py-5 sm:py-16">
      <div className="mb-6 text-center font-semibold">
        <h2 className="text-lg md:text-2xl font-bold font-inter mb-6 text-gray-700">
          {t('title')}{' '}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 flex-wrap">
            <div className="flex items-center gap-1">
              <a
                href="tel:+380993413857"
                className="text-gray-700 hover:text-red-600 font-inter font-regular"
              >
                +38 (099) 341 38 57
              </a>
            </div>
            <div className="flex items-center gap-5 sm:gap-3 text-3xl sm:text-xl text-red-600">
              <a href="https://wa.me/380993413857" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="hover:text-green-500 transition-colors" />
              </a>
              <a href="https://t.me/U_P_H_I" target="_blank" rel="noopener noreferrer">
                <FaTelegramPlane className="hover:text-sky-500 transition-colors" />
              </a>
              <a href="viber://chat?number=+380993413857">
                <FaViber className="hover:text-purple-600 transition-colors" />
              </a>
            </div>
          </div>
        </h2>
        <h2 className="text-lg md:text-2xl font-bold font-inter mb-6 text-gray-700">
          {t('title2')}
        </h2>
      </div>

      <div
        className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden w-full"
        style={{
          backgroundImage: "url('/images/form.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <AnimatePresence mode="wait">
          {!showThankYou ? (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="relative z-10 text-white flex flex-col gap-6 p-5 sm:p-5"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-montserrat font-regular">
                <div>
                  <label className="block mb-1">{t('title1')}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('text1')}
                    className="w-full p-2 rounded-lg text-white bg-transparent border border-white placeholder-white/50"
                    required
                  />

                  <label className="block mt-4 mb-1">Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('text2')}
                    className="w-full p-2 rounded-lg text-white bg-transparent border border-white placeholder-white/50"
                  />

                  <label className="block mt-4 mb-1">{t('title4')}</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t('text4')}
                    className="w-full p-2 rounded-lg text-white bg-transparent border border-white placeholder-white/50"
                  />
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block mb-1">{t('title3')}</label>
                    <textarea
                      name="comment"
                      value={formData.comment}
                      onChange={handleChange}
                      placeholder={t('text3')}
                      className="w-full p-2 rounded-lg text-white h-20 bg-transparent border border-white placeholder-white/50"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-left sm:items-center gap-5 sm:gap-0 font-montserrat font-regular">
                <div className="items-left space-y-2 text-sm">
                  <label className="flex items-left gap-2">
                    <input
                      type="checkbox"
                      name="agreeProcessing"
                      checked={formData.agreeProcessing}
                      onChange={handleChange}
                      className="accent-[#C52233]"
                    />
                    {t('consent1')}
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="agreePolicy"
                      checked={formData.agreePolicy}
                      onChange={handleChange}
                      className="accent-[#C52233]"
                    />
                    {t('consent2')}
                  </label>
                </div>

                <div className="flex justify-center sm:justify-end">
                  <button
                    type="submit"
                    disabled={!formData.agreeProcessing || !formData.agreePolicy}
                    className={`px-6 py-2 rounded-full shadow-md font-inter font-bold
                      ${
                        !formData.agreeProcessing || !formData.agreePolicy
                          ? 'bg-gray-400 text-white cursor-not-allowed'
                          : 'bg-white hover:bg-red-600 text-[#C52233] hover:text-white'
                      }`}
                  >
                    {t('button')}
                  </button>
                </div>
              </div>
            </motion.form>
          ) : (
            <motion.div
              key="thankyou"
              className="bg-white rounded-3xl shadow-[0_0_40px_8px_rgba(197,34,51,0.6)] p-8 sm:p-10 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-[24px] sm:text-[26px] font-bold font-unbounded text-[#C52233] mb-4">
                {t('thanksTitle') || 'Дякуємо за заявку!'}
              </h3>
              <p className="text-[16px] sm:text-[18px] text-[#202020] leading-relaxed">
                {t('thanksText') || (
                  <>
                    Ми вже працюємо над нею — очікуйте дзвінка <strong>протягом 15 хвилин</strong>.
                  </>
                )}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
