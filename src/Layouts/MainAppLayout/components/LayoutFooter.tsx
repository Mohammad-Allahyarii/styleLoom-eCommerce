import { useState } from 'react';

import { Link } from 'react-router';

import { Check, CornerDownRight } from 'lucide-react';

import FooterPageLinks from '@/Layouts/MainAppLayout/components/FooterPageLinks';
import FooterSectionTitle from '@/Layouts/MainAppLayout/components/FooterSectionTitle';
import star_footer from '@/assets/icons/star_footer.svg';
import main_logo from '@/assets/logos/Logo.svg';
import Container from '@/components/container/Container';
import DashedLine from '@/components/dashedLine/DashedLine';
import Ticker from '@/components/ticker/Ticker';
import {
  FOOTER_HOME_LINKS,
  FOOTER_ITEMS,
  FOOTER_PRODUCTS_LINKS,
  FOOTER_SOCIALS,
} from '@/constants/layoutConstant';

interface TickerItems {
  id: string | number;
  content: React.ReactNode;
}

const tickerItems: TickerItems[] = FOOTER_ITEMS.map((item) => ({
  id: item.id,
  content: (
    <span className="flex items-center gap-2">
      {' '}
      <img src={star_footer} className="max-w-8" alt="" /> <p>{item.title}</p>
    </span>
  ),
}));

const LayoutFooter = () => {
  const date = new Date();

  // no backend: submitting only flips a local confirmation state
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="">
      <DashedLine />
      <Ticker pauseOnHover={false} items={tickerItems} />
      <DashedLine />

      <Container
        as="div"
        className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-y-8 md:p-20 p-10 "
      >
        {/* left */}
        <div>
          <img
            src={main_logo}
            className="max-w-157.5 w-full"
            alt="style.loom"
          />
        </div>
        {/* right */}
        <div className="flex items-center justify-start md:justify-end">
          <div className="flex items-center justify-end gap-4">
            {FOOTER_SOCIALS.map((item) => (
              <Link
                key={item.id}
                className="p-3.5 w-14 aspect-square bg-brown-80 rounded-lg"
                to={item.link}
                target="_blank"
              >
                <img src={item.icon} alt={item.title} />
              </Link>
            ))}
          </div>
        </div>
      </Container>
      <DashedLine />
      <Container
        as={'div'}
        className="py-14.5 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-10"
      >
        {/* home links */}
        <FooterPageLinks links={FOOTER_HOME_LINKS} title="Home" />
        {/* products links */}
        <FooterPageLinks links={FOOTER_PRODUCTS_LINKS} title="Products" />
        {/* sub to newsletter */}
        <div className="flex flex-col items-start gap-6">
          <FooterSectionTitle title="Subscribe to Newsletter" />
          <form
            className="flex item-center bg-dark-10 rounded-lg py-4 px-3.5 w-full"
            onSubmit={(event) => {
              event.preventDefault();
              setSubscribed(true);
            }}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              className="placeholder:text-grey-40 placeholder:font-roboto-mono-regular text-absolute-white placeholder:text-sm w-full outline-none"
              placeholder="Your Email..."
            />
            <button
              type="submit"
              aria-label="Subscribe to newsletter"
              className="cursor-pointer"
            >
              {/* icon swap is the whole confirmation: no layout shift */}
              {subscribed ? (
                <Check className="text-brown-60" />
              ) : (
                <CornerDownRight className="text-brown-60 " />
              )}
            </button>
          </form>
          <p aria-live="polite" className="sr-only">
            {subscribed ? 'Subscribed successfully.' : ''}
          </p>
        </div>
      </Container>
      <DashedLine />
      <Container
        as="div"
        className="font-roboto-mono-regular text-grey-50 text-sm py-10 flex items-center justify-between flex-wrap gap-y-4"
      >
        <p>© {date.getFullYear()} StyleLoom. All rights reserved.</p>
        <div className="flex items-center gap-2">
          <p>Terms & Conditions</p>
          <span className="inline-block w-0.5 h-3.5  bg-dark-15"></span>
          <p>Privacy Policy</p>
        </div>
      </Container>
    </footer>
  );
};

export default LayoutFooter;
