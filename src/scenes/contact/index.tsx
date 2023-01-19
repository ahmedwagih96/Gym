import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { setSelectedPage } from "@/features/selectedPageSlice";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import Form from "./Form";

function Contact() {
  const dispatch = useDispatch();
  return (
    <section id={SelectedPage.ContactUs} className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        onViewportEnter={() =>
          dispatch(setSelectedPage(SelectedPage.ContactUs))
        }
      >
        {/* HEADING */}
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
          <HText>
            <span className="text-primary-500">join now</span> get in shape
          </HText>
          <p className="my-5"></p>
        </motion.div>

        {/* FORM AND DIV */}
        <div className="mt-10 justify-between gap-8 md:flex">
          {/* FORM */}
          <motion.div
            initial="hidden"
            viewport={{ once: true, amount: 0.5 }}
            whileInView="visible"
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-10 basis-3/5 md:mt-0"
          >
            <Form />
          </motion.div>
          {/* IMAGE */}
          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            viewport={{ once: true, amount: 0.5 }}
            whileInView="visible"
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
              <img
                src={ContactUsPageGraphic}
                alt="contact-us-page-graphic"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
