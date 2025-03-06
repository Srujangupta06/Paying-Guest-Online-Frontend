import { useState } from "react";
import { faqList } from "../utils/utils";
import FaqCard from "./FaqCard";

const Faq = () => {
  const [activeFaqId, setActiveFaqId] = useState("");

  return (
    <section className="text-center w-full max-w-5xl min-h-[70vh] sm:min-h-[50vh] md:min-h-[70vh] mb-8">
      <h1 className="text-xl  md:text-2xl font-semibold mb-4 tracking-widest">FAQs</h1>
      <p className="mb-8 text-sm">
        Find answers to your questions about booking, payments, and our
        services.
      </p>

      <ul className="flex flex-col items-center gap-y-4">
        {faqList.map((eachFaq) => (
          <FaqCard
            key={eachFaq.id}
            faqInfo={eachFaq}
            activeFaqId={activeFaqId}
            setActiveFaqId={setActiveFaqId}
          />
        ))}
      </ul>
    </section>
  );
};

export default Faq;
