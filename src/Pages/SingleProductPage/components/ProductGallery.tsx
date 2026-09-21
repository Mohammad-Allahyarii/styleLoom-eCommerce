import DashedLine from '@/components/dashedLine/DashedLine';

export interface ProductGalleryProps {
  images: string[];
  alt: string;
}

const ProductGallery = ({ images, alt }: ProductGalleryProps) => {
  const [mainImage, ...sideImages] = images;

  return (
    <section className="grid grid-cols-3 gap-2 md:gap-y-2 gap-y-0">
      {/* main image */}
      <div className="overflow-hidden relative col-span-3 md:col-span-2 max-h-150 max-w-247.5 p-2.5 md:py-12.5 md:px-12.5">
        <img className="w-full h-full " src={mainImage} alt={alt} />
        <DashedLine
          axis="horizontal"
          className="absolute md:hidden block bottom-0 left-0"
        />
      </div>

      {/* side product imaged */}
      <div className="grid grid-cols-2 md:flex md:flex-col items-center justify-between md:col-span-1 col-span-3 relative p-2.5 md:py-12.5 md:px-7.5 gap-2.5 md:gap-7.5 h-full ">
        <DashedLine
          axis="vertical"
          className="absolute md:block hidden left-0 top-0"
        />
        {sideImages.map((src, index) => (
          <img
            key={index}
            className="aspect-518/335 w-full"
            src={src}
            alt={alt}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductGallery;
