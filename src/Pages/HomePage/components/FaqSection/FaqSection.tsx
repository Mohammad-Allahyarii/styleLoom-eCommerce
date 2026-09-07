import { useEffect, useState } from 'react';

import FaqCard from '@/Pages/HomePage/components/FaqSection/FaqCard';
import HEADER_IMAGE from '@/assets/images/faqs/Vector.svg';
import FilterButtons from '@/components/FilterButtons/FilterButtons';
import MainSectionTemplate from '@/components/MainSectionTelmplate/MainSectionTemplate';
import {
  type CategoriesType,
  FAQS,
  FAQ_CATEGORIES,
  type FAQ_TYPE,
} from '@/constants/constants';
import { getRandomItems } from '@/utils/utils';

const FaqSection = () => {
  const [currentQuestionType, setCurrentQuestionType] =
    useState<CategoriesType>('shipping');

  const [filteredFAQs, setFilteredFAQs] = useState(() => {
    return FAQS.filter((faq) => faq.questionType === currentQuestionType);
  });

  const faqElements = filteredFAQs.slice(0, 6).map((faq) => {
    return <FaqCard key={faq.id} faq={faq} />;
  });

  useEffect(() => {
    if (currentQuestionType == 'all') {
      setFilteredFAQs(getRandomItems<FAQ_TYPE>(FAQS, 6));
    } else {
      const filteredFAQs = FAQS.filter(
        (faq) => faq.questionType === currentQuestionType,
      );
      setFilteredFAQs(filteredFAQs);
    }
  }, [currentQuestionType]);

  return (
    <MainSectionTemplate
      itemsElement={faqElements}
      headerInfo={{
        title: 'Have Questions? We Have Answers.',
        description:
          'Ease into the world of StyleLoom with clarity. Our FAQs cover a spectrum of topics.',
      }}
      itemsPerRow={2}
      rowsCount={3}
      HeaderMainSectionTemplateImage={HEADER_IMAGE}
      otherHeaderNodes={
        <FilterButtons
          value={currentQuestionType}
          onChange={setCurrentQuestionType}
          options={[...FAQ_CATEGORIES]}
          getLabel={(option) => option}
        />
      }
    />
  );
};

export default FaqSection;
