import { BenefitType, SelectedPage } from "@/shared/types";
import { useDispatch } from "react-redux";
import { setSelectedPage } from "@/features/selectedPageSlice";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
type Props = {
  benefit: BenefitType;
};

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

function Benefit({ benefit: { title, icon: Icon, description } }: Props) {
  const dispatch = useDispatch();
  return (
    <motion.div
      variants={childVariant}
      className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          {Icon}
        </div>
      </div>
      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
      <AnchorLink
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
        onClick={() => dispatch(setSelectedPage(SelectedPage.ContactUs))}
        href={`#${SelectedPage.ContactUs}`}
      >
        Learn More
      </AnchorLink>
    </motion.div>
  );
}

export default Benefit;
