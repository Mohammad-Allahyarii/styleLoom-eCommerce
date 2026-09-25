import { Link } from 'react-router';

import { MoveUpRight } from 'lucide-react';

import Button from '@/components/button/Button';
import DashedLine from '@/components/dashedLine/DashedLine';

interface Props_type {
  title: string;
  link?: {
    text: string;
    url: string;
  };
}

const BetweenMainSectionTitle = ({ title, link }: Props_type) => {
  return (
    <>
      <DashedLine />
      <div className="p-6 flex justify-between items-center">
        <h6 className="font-roboto-medium text-absolute-white text-[26px] uppercase">
          {title}
        </h6>

        {/* md-breakpoint hiding instead of JS; the button is flex by default,
            so a plain block wrapper preserves its layout when shown */}
        {link && (
          <span className="hidden md:block">
            <Button variant="cornerBordered">
              <Link
                to={link.url}
                className="flex items-center gap-1 font-roboto-regular text-[14px]"
              >
                <span>{link.text}</span>
                <MoveUpRight />
              </Link>
            </Button>
          </span>
        )}
      </div>
      <DashedLine />
    </>
  );
};

export default BetweenMainSectionTitle;
