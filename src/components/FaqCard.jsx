import { GoPlus } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
const FaqCard = (props) => {
  const { faqInfo, activeFaqId, setActiveFaqId } = props;
  const { id, question, answer } = faqInfo;
  const isOpen = activeFaqId === id;
  const onHandleToggleFaqCard = () => {
    setActiveFaqId(isOpen ? "" : id);
  };
  return (
    <li className="list-none border w-full md:w-[60%] px-4 py-4  border-gray-300 rounded-sm">
      {/*Question Container */}
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={onHandleToggleFaqCard}
      >
        <h3 className="font-semibold text-sm">{question}</h3>
        <button className="cursor-pointer border-none outline-none" aria-label="toggle">
          {isOpen ? <RxCross2 /> : <GoPlus />}
        </button>
      </div>
      {/*Answer Container */}
      {isOpen && (
        <>
          <hr className="border-gray-300 my-4" />
          <div className="text-left">
            <p className="text-sm text-gray-700">{answer}</p>
          </div>
        </>
      )}
    </li>
  );
};

export default FaqCard;
