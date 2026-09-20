interface PropsType {
  label: string;
  value: string;
}

const SummaryRow = ({ label, value }: PropsType) => {
  return (
    <div className="flex items-center justify-between">
      <p className="font-roboto-regular text-grey-50 text-[16px]">{label}</p>
      <p className="font-roboto-mono-medium text-absolute-white text-[16px]">
        {value}
      </p>
    </div>
  );
};

export default SummaryRow;
