import { useState } from "react";
import { faqList } from "../utils/utils";
import FaqCard from "./FaqCard";

const Faq = () => {
  const [activeFaqId, setActiveFaqId] = useState("");

  return (
    <section className="text-center w-full max-w-5xl md:min-h-[80vh] mb-8">
      <h1 className="text-xl  md:text-2xl font-semibold mb-4">FAQs</h1>
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
