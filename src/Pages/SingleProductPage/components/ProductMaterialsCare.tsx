import DashedLine from '@/components/dashedLine/DashedLine';
import MATERIAL_IMAGE from '@/assets/images/single-product/material.jpg';

/**
 * Generic materials/care/origin information block.
 * No props: the copy and image are not product-specific in the current design.
 */
const ProductMaterialsCare = () => {
  return (
    <div className="">
      <h6 className="font-roboto-medium text-[24px] text-absolute-white p-7.5 md:px-15 md:py-10">
        Materials, Care and origin
      </h6>

      <DashedLine />

      <div className="p-7.5 md:px-15 md:py-10">
        <p className="font-roboto-medium text-[18px] text-absolute-white mb-3">Join Life</p>
        <p className="font-roboto-regular text-[16px] text-grey-40">
          Tracing its roots back to ancient Greek draped garments, has evolved through centuries,
          often crafted from luxurious fabrics like silks, satins, and velvets.
        </p>
      </div>

      <DashedLine />

      <div className="p-7.5 md:px-15 md:py-10">
        <p className="font-roboto-medium text-[18px] text-absolute-white mb-3">Materials</p>
        <p className="font-roboto-regular text-[16px] text-grey-40 mb-3">
          Flowing from Grecian folds to glittering silks, the evening gown has graced centuries in
          luxury.
        </p>

        <img className="w-full" src={MATERIAL_IMAGE} alt="" />
      </div>

      <DashedLine />
    </div>
  );
};

export default ProductMaterialsCare;