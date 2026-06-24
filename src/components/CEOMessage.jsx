import { Quote, BriefcaseBusiness } from "lucide-react";

const ceoMessage = {
  name: "Daniel A. Mensah",
  role: "Founder & CEO",
  image: "https://images.pexels.com/photos/8428066/pexels-photo-8428066.jpeg",
  message:
    "We built this company on a simple belief: people remember how you make them feel. Every decision we make is guided by care, clarity, and excellence. We built this company on a simple belief: people remember how you make them feel. Every decision we make is guided by care, clarity, and excellence. ",
};

const CEOMessage = () => {
  return (
    <section className="px-4 py-10 lg:px-10 lg:py-16">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative overflow-hidden rounded-[2rem]">
          <img
            src={ceoMessage.image}
            alt={ceoMessage.name}
            className="h-full min-h-[450px] w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs uppercase backdrop-blur-md">
              <BriefcaseBusiness size={14} />
              Message From CEO
            </div>

            <h3 className="mt-4 text-3xl font-semibold">{ceoMessage.name}</h3>

            <p className="text-white/70">{ceoMessage.role}</p>
          </div>
        </div>

        <div className="rounded-[2rem] border bg-white p-8 lg:p-10">
          <Quote className="h-12 w-12 text-slate-200" />

          <p className="mt-6 text-base lg:text-lg leading-8 text-slate-700">
            {ceoMessage.message}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CEOMessage;
