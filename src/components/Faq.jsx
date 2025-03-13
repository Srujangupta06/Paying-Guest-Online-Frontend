import { useState } from "react";
import { faqList } from "../utils/utils";
import FaqCard from "./FaqCard";

const Faq = () => {
  const [activeFaqId, setActiveFaqId] = useState("");

  return (
    <section className="px-6 sm:px-10 md:px-32 text-center w-full flex flex-col items-center min-h-[50vh] sm:min-h-[50vh] md:min-h-[70vh]  mb-6 sm:mb-12  sm:py-0">
      <h1 className="mb-6 text-xl  md:text-2xl font-semibold tracking-widest">
        FAQs
      </h1>
      <p className="text-sm mb-6">
        Find answers to your questions about booking, payments, and our
        services.
      </p>

      <ul className="w-full flex flex-col items-center gap-y-4">
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
