import { Link } from 'react-router';

import { MoveUpRight } from 'lucide-react';

import Button from '@/components/button/Button';
import DashedLine from '@/components/dashedLine/DashedLine';
import useMediaQuery from '@/hooks/useMediaQuery';

interface Props_type {
  title: string;
  link: {
    text: string;
    url: string;
  };
}

const BetweenMainSectionTitle = ({ title, link }: Props_type) => {
  const isMobile = useMediaQuery('(max-width:420px)');

  return (
    <>
      <DashedLine />
      <div className="p-6 flex justify-between items-center">
        <h6 className="font-roboto-medium text-absolute-white text-[26px] uppercase">
          {title}
        </h6>

        {link && !isMobile && (
          <Button variant="cornerBordered">
            <Link
              to={link.url}
              className="flex items-center gap-1 font-roboto-regular text-[14px]"
            >
              <span>{link.text}</span>
              <MoveUpRight />
            </Link>
          </Button>
        )}
      </div>
      <DashedLine />
    </>
  );
};

export default BetweenMainSectionTitle;
