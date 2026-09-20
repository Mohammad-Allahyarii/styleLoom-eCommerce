interface PropsType {
  value: string;
}

const TotalRow = ({ value }: PropsType) => {
  return (
    <div className="flex items-center justify-between">
      <p className="font-roboto-medium text-absolute-white text-[18px]">
        Total
      </p>
      <p className="font-roboto-mono-medium text-absolute-white text-[24px]">
        {value}
      </p>
    </div>
  );
};

export default TotalRow;
