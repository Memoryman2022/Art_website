import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "components/ui/accordion";

export default function Legal() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-lg border-2 border-black rounded-lg"
        >
          {/* Impressum Section */}
          <AccordionItem
            value="impressum"
            className="border-b-0 border-black px-4"
          >
            <AccordionTrigger className="text-black flex justify-between items-center">
              Impressum
            </AccordionTrigger>
            <AccordionContent>
              <p>Website Owner: Katja Stadel</p>
              <p>Lappenbergsallee 8A, 20257, Hamburg, Germany</p>
              <p>Email: Stadel.Katja@gmx.de</p>
              <p>Phone: +49 (0) 151 28917913</p>
            </AccordionContent>
          </AccordionItem>

          {/* AGB Section */}
          <AccordionItem value="agb" className="border-b-0 border-black px-4">
            <AccordionTrigger className="text-black flex justify-between items-center">
              AGB (Terms and Conditions)
            </AccordionTrigger>
            <AccordionContent>
              <p>
                These are the general terms and conditions of Peas of Art. By
                using this website, you agree to these terms.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* Datenschutz Section */}
          <AccordionItem value="datenschutz" className="border-black px-4">
            <AccordionTrigger className="text-black flex justify-between items-center">
              Datenschutz (Privacy Policy)
            </AccordionTrigger>
            <AccordionContent>
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
