type props = {
  title: string;
} & React.ComponentProps<'h6'>;

const FooterSectionTitle = ({ title, ...rest }: props) => {
  return (
    <h6
      className="text-absolute-white font-roboto-medium text-[18px]"
      {...rest}
    >
      {title}
    </h6>
  );
};

export default FooterSectionTitle;
