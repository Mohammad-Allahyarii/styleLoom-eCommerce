import Button from '@/components/button/Button';
import type { CategoriesType } from '@/constants/constants';

interface propsType {
  currentQuestionType: CategoriesType;
  setCurrentQuestionType: React.Dispatch<React.SetStateAction<CategoriesType>>;
  categories: CategoriesType[];
}

const FAQSCetegoiesButtons = ({
  currentQuestionType,
  setCurrentQuestionType,
  categories,
}: propsType) => {
  return (
    <div
      className={`flex items-center justify-start flex-nowrap overflow-x-auto gap-3.5`}
    >
      {categories.map((category) => (
        <Button
          key={category}
          onClick={() => setCurrentQuestionType(category)}
          variant={currentQuestionType === category ? 'primary' : 'bordered'}
          className="font-roboto-regular! shrink-0"
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default FAQSCetegoiesButtons;
