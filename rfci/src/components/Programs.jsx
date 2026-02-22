import { Sprout, Hospital, BookOpenCheck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PROGRAMS = [
  {
    title: "Health Care (HC)",
    desc: "The Health Care provides mobile health care services by running Blood Pressure, Glucose, Hepatitis etc. tests on its clients particularly rural underserved populations. Most underserved populations do not prioritize their health due to certain reasons. They are counselled to seek further medical attention when the need arises.",
    icon: <Hospital className="w-8 h-8 text-green-600" />,
  },
  {
    title: "Disability Support Initiative",
    desc: "The Disability Assistance Fund supports people living with various forms of disabilities to pursue their dreams to make it a reality. This is to embrace diversity, equity and inclusivity (DEI). DAF seeks to ensure that no one is left out in any decision making process.",
    icon: <BookOpenCheck className="w-8 h-8 text-green-600" />,
  },
  {
    title: "Plant Today For Tomorrow (PTFT)",
    desc: "The Plant Today for Tomorrow is RFCI's agriculture component. Under this program, youths, women in agriculture, etc. are trained on Good Agronomic Practices (GAPs) and are supported in kind to ‘dirty their hand, soil their mouths and fatten their pockets’.",
    icon: <Sprout className="w-8 h-8 text-green-600" />,
  },
  {
    title: "Free NHIS (F-NHIS)",
    desc: "It is established that most children in rural communities do not have access to basic insurance health cover. Hence, this puts both parents and children in an emotional trauma when any uncertainty sets in. This initiative registers pupils under the National Health Insurance Policy (NHIS).",
    icon: <Hospital className="w-8 h-8 text-green-600" />,
  },
  {
    title: "Vision Care (VC)",
    desc: "The Vision Care targets the vision of underserved populations since most are denied this essential service due to proximity, cost, etc. As a result, RFCI raises awareness on poor vision, provides free eye examination, and affordable eyeglasses for those in need. The Vision Care is a key foundation of RFCI's establishment.",
    icon: <BookOpenCheck className="w-8 h-8 text-green-600" />,
  },
  {
    title: "Lady Care (LC)",
    desc: "The Lady Care Project targets particularly girls and adolescent girls in schools. Due to period poverty and other factors, most girls struggle to access menstrual sanitary products resulting in some negative consequences. The Lady Care provides girls with sanitary products to enable them to keep clean, safe, and focus on their education.",
    icon: <Sprout className="w-8 h-8 text-green-600" />,
  },
];

export default function Programs() {
  return (
    <section className="py-20 bg-white font-sans">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800">Our Core Programmes</h2>
          <div className="h-1 w-20 bg-green-500 mx-auto mt-4"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {PROGRAMS.map((p, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl border border-slate-100 hover:border-green-200 hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-6">
                {p.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">{p.title}</h3>
              <p className="text-slate-600 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}