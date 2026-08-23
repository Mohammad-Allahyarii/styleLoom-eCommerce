import { Link } from 'react-router';

import FooterSectionTitle from '@/Layouts/MainAppLayou/components/FooterSectionTitle';
import DotDivider from '@/components/dotDivider/DotDivider';
import { Fragment } from 'react/jsx-runtime';

interface props {
  links: {
    title: string;
    href: string;
  }[];
  title: string;
}

const FooterPageLinks = ({ links, title }: props) => {
  return (
    <div className="flex flex-col items-start gap-6">
      <FooterSectionTitle title={title} />
      <div className="flex items-center justify-start gap-3 flex-wrap">
        {links.map((item, index) => (
          <Fragment key={item.title}>
            {index !== 0 && index < links.length && <DotDivider />}

            <Link
              to={item.href}
              className="font-roboto-mono-regular text-[16px] text-grey-40"
            >
              {item.title}
            </Link>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default FooterPageLinks;
