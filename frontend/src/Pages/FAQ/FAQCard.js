import { AiOutlineQuestionCircle } from "react-icons/ai";
import { LinkButton } from "../../global-components/LinkButton/Link-Button";

export function FAQCard() {
    return <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <AiOutlineQuestionCircle className="text-[5rem] pt-2 pl-2" />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Frequently Asked Questions</div>
            <p className="text-gray-700 text-base">
            Click below to access pages of continually requested questions 
            </p>
        </div>
        <LinkButton pathName="/faq" text="FAQ" />
    </div>
}
