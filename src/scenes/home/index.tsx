import useMediaQuery from "@/hooks/useMediaQuery";
//TypeScript
import { SelectedPage } from "@/shared/types";
// Components
import ActionButton from "@/shared/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Sponsors from "@/scenes/home/Sponsors";
//Utils
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
//Motion
import { motion } from "framer-motion";
//Redux
import useStore from "@/hooks/useStore";

function Home() {
  const { setPage } = useStore();
  const isAboveMediumScreens = useMediaQuery("(min-width: 1080px");
  return (
    <section
      id={SelectedPage.Home}
      className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
    >
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        onViewportEnter={() => setPage(SelectedPage.Home)}
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
      >
        {/* MAIN HEADER */}
        <div>
          {/* HEADINGS */}
          <motion.div
            initial="hidden"
            viewport={{ once: true, amount: 0.5 }}
            whileInView="visible"
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="z-10 mt-32 md:basis-3/5"
          >
            <div className="md:-mt-20">
              <div className="relative">
                <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                  <img alt="home-page-text" src={HomePageText} />
                </div>
              </div>
            </div>
            <p className="mt-8 text-sm">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </motion.div>
          {/* ACTIONS */}
          <motion.div
            initial="hidden"
            viewport={{ once: true, amount: 0.5 }}
            whileInView="visible"
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="mt-8 flex items-center gap-8"
          >
            <ActionButton>Join Now</ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              Learn More
            </AnchorLink>
          </motion.div>
        </div>
        {/* IMAGE */}
        <motion.div
          initial="hidden"
          viewport={{ once: true, amount: 1 }}
          whileInView="visible"
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end"
        >
          <img src={HomePageGraphic} alt="Homepage-Graphic" />
        </motion.div>
      </motion.div>
      {/* SPONSORS */}
      {isAboveMediumScreens && <Sponsors />}
    </section>
  );
}

export default Home;
