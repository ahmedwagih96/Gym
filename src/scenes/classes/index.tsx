//Redux
import { useDispatch } from "react-redux";
import { selectPage, setSelectedPage } from "@/features/selectedPageSlice";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import { ourClasses } from "@/shared/classesData";
import Class from "./Class";
type Props = {};

function Classes({}: Props) {
  const dispatch = useDispatch();
  return (
    <section
      id={SelectedPage.OurClasses}
      className="w-full bg-primary-100 py-40"
    >
      <motion.div
        className="mx-auto w-5/6"
        onViewportEnter={() =>
          dispatch(setSelectedPage(SelectedPage.OurClasses))
        }
      >
        <motion.div
          initial="hidden"
          viewport={{ once: true, amount: 0.5 }}
          whileInView="visible"
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>our classes</HText>
            <p className="py-5">
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
              tellus quam porttitor. Mauris velit euismod elementum arcu neque
              facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
              enim mattis odio in risus nunc.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {ourClasses.map((classes, index) => (
              <Class key={index} classes={classes} />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}

export default Classes;
