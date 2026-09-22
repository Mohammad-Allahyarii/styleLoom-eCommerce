import { type ReactNode } from 'react';

import useMediaQuery from '@/hooks/useMediaQuery';

interface PropsType {
  title: ReactNode;
  description?: ReactNode;
  otherNodes?: ReactNode;
  imgAdress?: string | undefined;
}

const HeaderMainSectionTemplate = ({
  title,
  description,
  otherNodes,
  imgAdress,
}: PropsType) => {
  const isMobile = useMediaQuery('(max-width: 420px)');

  return (
    <div className="py-10 md:py-15 px-4 md:px-12 flex flex-col gap-6 relative overflow-hidden rounded-tr-2xl">
      <h4 className="text-[28px] text-absolute-white font-roboto-medium uppercase">
        {title}
      </h4>
      <p className="font-roboto-regular text-grey-40 text-[14px]">
        {description}
      </p>

      {otherNodes}

      {imgAdress && !isMobile && (
        <div className="md:max-w-80 absolute -right-20 -top-10">
          <img src={imgAdress} alt="header image" className="w-full h-auto" />
        </div>
      )}
    </div>
  );
};

export default HeaderMainSectionTemplate;
