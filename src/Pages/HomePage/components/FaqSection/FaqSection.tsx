import { useMemo, useState } from 'react';

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

  // memoized because getRandomItems is random: a plain derive would reshuffle on every re-render
  const filteredFAQs = useMemo(() => {
    if (currentQuestionType === 'all') {
      return getRandomItems<FAQ_TYPE>(FAQS, 6);
    }
    return FAQS.filter((faq) => faq.questionType === currentQuestionType);
  }, [currentQuestionType]);

  const faqElements = filteredFAQs.slice(0, 6).map((faq) => {
    return <FaqCard key={faq.id} faq={faq} />;
  });

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
