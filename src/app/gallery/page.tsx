import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "components/ui/accordion";
import Oils from "app/oils/page";

export default function Gallery() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-2xl border-2 border-black m-0"
        >
          {/* Oil Section */}
          <AccordionItem
            value="Oil"
            className="border-b-2 border-black  mb-2 px-4"
          >
            <AccordionTrigger className="text-black flex justify-between items-center hover:no-underline">
              Oil
            </AccordionTrigger>
            <AccordionContent className=" transition-all duration-500 ease-in-out">
              <Oils />
            </AccordionContent>
          </AccordionItem>

          {/* Acrylic Section */}
          <AccordionItem
            value="Acrylic"
            className="border-b-2 border-black  mb-2 px-4"
          >
            <AccordionTrigger className="text-black flex justify-between items-center hover:no-underline">
              Acrylic
            </AccordionTrigger>
            <AccordionContent className=" transition-all duration-500 ease-in-out"></AccordionContent>
          </AccordionItem>

          {/* Watercolour Section */}
          <AccordionItem
            value="Watercolour"
            className="border-b-60 border-black  px-4"
          >
            <AccordionTrigger className="text-black flex justify-between items-center hover:no-underline">
              Watercolour
            </AccordionTrigger>
            <AccordionContent className=" transition-all duration-500 ease-in-out"></AccordionContent>
          </AccordionItem>
        </Accordion>
      </main>
    </div>
  );
}
