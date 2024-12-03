import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "components/ui/accordion";
//components
import Impressum from "app/impressum/page";
import AGB from "AGB/agb";

export default function Legal() {
  return (
    <div
      className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
      style={{ paddingTop: "264px" }}
    >
      {" "}
      <main>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-2xl border-2 border-black "
        >
          {/* Impressum Section */}
          <AccordionItem
            value="impressum"
            className="border-b-2 border-black  mb-2 px-4"
          >
            <AccordionTrigger className="text-black flex justify-between items-center hover:no-underline">
              Impressum
            </AccordionTrigger>
            <AccordionContent className="overflow-hidden transition-all duration-500 ease-in-out">
              {/* Display Impressum component when this accordion is clicked */}
              <Impressum />
            </AccordionContent>
          </AccordionItem>

          {/* AGB Section */}
          <AccordionItem
            value="agb"
            className="border-b-2 border-black  mb-2 px-4"
          >
            <AccordionTrigger className="text-black flex justify-between items-center hover:no-underline">
              AGB (Terms and Conditions)
            </AccordionTrigger>
            <AccordionContent className="overflow-hidden transition-all duration-500 ease-in-out">
              {/* Display Impressum component when this accordion is clicked */}
              <AGB />
            </AccordionContent>
          </AccordionItem>

          {/* Datenschutz Section */}
          <AccordionItem
            value="datenschutz"
            className="border-b-60 border-black  px-4"
          >
            <AccordionTrigger className="text-black flex justify-between items-center hover:no-underline">
              Datenschutz (Privacy Policy)
            </AccordionTrigger>
            <AccordionContent className="overflow-hidden transition-all duration-500 ease-in-out">
              <p>
                Your privacy is important to us. This section outlines how we
                handle your data.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </main>
    </div>
  );
}
