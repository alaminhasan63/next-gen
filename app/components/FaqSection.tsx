import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How quickly can you respond to service calls?",
    answer: "We offer same-day service in most cases. For emergencies, we have technicians available 24/7 to assist you promptly."
  },
  {
    question: "Do you offer warranties on your repairs?",
    answer: "Yes, we provide a 90-day warranty on all parts and labor for our appliance repairs. This ensures your peace of mind after our service."
  },
  {
    question: "What brands do you service?",
    answer: "We service all major appliance brands including but not limited to Whirlpool, GE, Samsung, LG, Maytag, Frigidaire, and KitchenAid."
  },
  {
    question: "How do I know if I should repair or replace my appliance?",
    answer: "Our technicians can provide an expert assessment. Generally, if the repair cost is less than 50% of the cost of a new appliance and the appliance is not too old, repairing is often the best option."
  },
  {
    question: "Do you offer any discounts?",
    answer: "Yes, we offer discounts for seniors, military personnel, and first-time customers. We also run seasonal promotions, so be sure to ask about current offers when you call."
  }
]

export function FAQSection() {
  return (
    <div className="w-full max-w-7xl mx-auto my-5">
      <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left text-base">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-gray-400 text-base">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
