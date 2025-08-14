import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const AssistantSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start('visible');
  }, [isInView, controls]);

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const fadeUp = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const float = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      ref={ref}
      className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100"
    >
      {/* soft background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-cyan-200/40 blur-3xl" />
      </div>

      <motion.div
        className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 px-8 py-24 items-center"
        variants={container}
        initial="hidden"
        animate={controls}
      >
        {/* Left copy */}
        <div className="space-y-8">
          <motion.div variants={fadeUp} className="text-sm font-semibold tracking-wide text-sky-600">
            Powered by PharmaGPT
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900"
          >
            The Only AI That Responds
            <br />
            To Your Clinical Messages
          </motion.h2>

          <motion.p variants={fadeUp} className="text-slate-600 text-lg leading-relaxed max-w-xl">
            Read and reply to physician and patient queries automatically, or let our
            PharmaGPT assist your team. Improve response times, increase adherence, and
            scale medical communications without spam—securely and compliantly.
          </motion.p>

          <motion.div variants={fadeUp} className="pt-2">
            <button
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-600 to-cyan-600 text-white px-6 py-3 text-sm font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              See our plans
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/10 border border-white/20">
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </motion.div>
        </div>

        {/* Right cards cluster */}
        <div className="relative min-h-[420px] w-full max-w-2xl mx-auto lg:mx-0">
          {/* Back window mock */}
          <motion.div
            variants={float}
            transition={{ delay: 0.1 }}
            className="absolute -top-8 lg:-top-6 left-2 lg:left-6 w-[350px] lg:w-[420px] h-[200px] lg:h-[240px] rounded-2xl bg-white/80 backdrop-blur border border-gray-200 shadow-xl"
          >
            <div className="h-8 flex items-center px-4 border-b border-gray-100">
              <div className="w-2.5 h-2.5 bg-red-400 rounded-full mr-2" />
              <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full mr-2" />
              <div className="w-2.5 h-2.5 bg-green-400 rounded-full" />
            </div>
            <div className="p-4 grid grid-cols-3 gap-3">
              <div className="col-span-2 h-20 rounded-xl bg-gray-100" />
              <div className="h-20 rounded-xl bg-gray-100" />
              <div className="h-16 rounded-xl bg-gray-100 col-span-3" />
            </div>
          </motion.div>

          {/* Notification card top-right */}
          <motion.div
            variants={float}
            transition={{ delay: 0.25 }}
            className="absolute -top-4 right-0 lg:right-4 w-[300px] lg:w-[360px] rounded-3xl bg-white shadow-2xl border border-gray-100 p-4 lg:p-5"
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-sky-600 text-white flex items-center justify-center text-sm font-bold">Z</div>
              <div className="flex-1">
                <div className="font-semibold text-slate-900">Zablott Oncology</div>
                <div className="text-sm text-slate-500">How are we tracking patient responses?</div>
                <div className="mt-3 bg-gradient-to-r from-sky-600 to-cyan-600 text-white text-xs px-3 py-2 rounded-xl inline-flex">
                  AI answered 40 messages this week 🎉
                </div>
              </div>
            </div>
          </motion.div>

          {/* Primary chat card */}
          <motion.div
            variants={float}
            transition={{ delay: 0.35 }}
            className="absolute top-20 lg:top-28 -right-4 lg:right-0 w-[440px] lg:w-[520px] rounded-3xl bg-white shadow-2xl border border-gray-100 overflow-hidden"
          >
            <div className="flex">
              <img
                src="https://t4.ftcdn.net/jpg/09/07/57/97/360_F_907579755_uz2yrg9Z26CLqxxkSDLVOD5Gh3bKGJu0.jpg"
                alt="Clinical communication"
                className="w-36 h-36 object-cover"
                loading="lazy"
              />
              <div className="flex-1 p-5">
                <div className="font-semibold text-slate-900 text-lg">Ben Timona</div>
                <div className="text-sm text-slate-600">Hey there! Can we schedule a follow‑up on the latest trial results?</div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-xs text-slate-500">1 Message · 09 Jun 2024</div>
                  <button className="px-4 py-2 rounded-full bg-sky-600 text-white text-sm font-semibold shadow hover:shadow-md">Answer</button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Small praise bubble */}
          <motion.div
            variants={float}
            transition={{ delay: 0.45 }}
            className="absolute top-32 lg:top-40 left-4 lg:left-10 bg-white rounded-2xl shadow-lg border border-gray-100 px-4 py-2 text-xs text-slate-700 max-w-[200px]"
          >
            That was super fast, thank you so much!
          </motion.div>

          {/* Bottom banner bubble */}
          <motion.div
            variants={float}
            transition={{ delay: 0.55 }}
            className="absolute -bottom-8 lg:-bottom-6 left-4 right-4 lg:left-10 lg:right-10 mx-auto max-w-[350px] lg:w-[420px] bg-white/80 backdrop-blur border border-gray-200 rounded-full shadow-xl px-4 lg:px-6 py-3 text-center text-sm text-slate-700"
          >
            Answered to 12 private messages!
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AssistantSection;
