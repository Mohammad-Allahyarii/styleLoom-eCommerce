import { Link } from 'react-router';

import { SearchX } from 'lucide-react';

import Button from '@/components/button/Button';
import SectionContainer from '@/components/sectionContainer/SectionContainer';

interface PropsType {
  title?: string;
  message?: string;
}

const NotFoundPage = ({
  title = 'Page not found',
  message = "The page you're looking for doesn't exist or may have moved.",
}: PropsType) => {
  return (
    <SectionContainer className="py-20 px-6 flex flex-col items-center gap-6">
      <span className="p-6 rounded-full bg-dark-10 text-brown-60">
        <SearchX size={40} strokeWidth={1.5} />
      </span>

      <p className="font-roboto-mono-medium text-brown-60 text-[40px] leading-none">
        404
      </p>

      <h6 className="font-roboto-medium text-absolute-white text-[24px] uppercase text-center">
        {title}
      </h6>

      <p className="font-roboto-regular text-grey-40 text-[14px] text-center max-w-md">
        {message}
      </p>

      <div className="flex gap-4">
        <Link to="/">
          <Button variant="cornerBordered">
            <span className="font-roboto-regular text-[14px]">
              Back to Home
            </span>
          </Button>
        </Link>

        <Link to="/products">
          <Button variant="cornerBordered">
            <span className="font-roboto-regular text-[14px]">
              Browse Products
            </span>
          </Button>
        </Link>
      </div>
    </SectionContainer>
  );
};

export default NotFoundPage;
