import { type ReactNode } from 'react';

interface PropsType {
  title: ReactNode;
  description?: ReactNode;
  otherNodes?: ReactNode[];
  imgAdress?: string;
}

const HeaderHomeSection = ({
  title,
  description,
  otherNodes,
  imgAdress,
}: PropsType) => {
  return (
    <div className="py-10 md:py-15 px-4 md:px-12 flex flex-col gap-2 relative overflow-hidden">
        <h4 className="text-[28px] text-absolute-white font-roboto-medium uppercase">
          {title}
        </h4>
        <p className="font-roboto-regular text-grey-40 text-[14px]">
          {description}
        </p>
        {otherNodes?.map((item) => item)}

      {imgAdress && (
        <div className='max-w-80 absolute -right-20 -top-10'>
          <img src={imgAdress} alt="header image" className="w-full h-auto" />
        </div>
      )}
    </div>
  );
};

export default HeaderHomeSection;
