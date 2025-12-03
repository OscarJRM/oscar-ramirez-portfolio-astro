
import AccordionComponent from "../components/accordionComponent";
import { HERO_QUESTIONS } from "../../../../constants/questions/hero_questions";

export default function FrequentlyQuestions() {
 
  return (
    <>
      <AccordionComponent 
        questions={HERO_QUESTIONS}
        title="Frequently"
        subtitle="Questions"
      />
    </>
  );
}