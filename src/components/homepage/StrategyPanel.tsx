import { FiX } from "react-icons/fi";
import ChevronGray from "../../assets/chevron-gray.svg";

const StrategyPanel = ({
  isOpen,
  onCancel,
}: {
  isOpen: boolean;
  onCancel: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <div className="page-wrapper flex px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-28 py-4 sm:py-6 lg:py-8">
      <div
        className={` module-base fixed top-0 right-0 z-50 bg-black
        transition-transform duration-700 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="background absolute w-[100vw] h-[70vh] -z-1">
          <img src={ChevronGray} alt="chevron-gray" />
        </div>
        <div
          className="panel-wrraper flex flex-col items-start justify-strech
      py-8 px-2 sm:px-4 md:px-8 lg:px-16 xl:px-32"
        >
          <button className="flex-1 self-end" onClick={onCancel}>
            <FiX
              size={28}
              className="hover-primary text-white close-icon-wrapper"
            />
          </button>
          <section className="flex-1 w-full mt-16">
            <div className="header">
              <h1
                className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-light
                        text-black md:pt-4 tracking-widest"
              >
                Disciplined Growth.
              </h1>
              <h1
                className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold 
                    text-black md:pt-4 pb-1 md:pb-4 lg:pb-6 sm:tracking-wider"
              >
                Diversified Returns.
              </h1>
            </div>
            <div
              className="title w-fit sm:w-[45ch] xl:[w-50ch] text-white font-light my-2 
            text-md md:text-lg lg:text-xl xl:text-2xl"
            >
              <h3>
                SAIB’s progress reflects a deliberate commitment to building
                strength with purpose.
              </h3>
            </div>
            <div
              className="flex flex-col gap-2 md:gap-4  overflow-y-auto 
          paragraphs text-white font-light text-sm md:text-lg lg:text-lg
          h-[450px] md:h-[400px] lg:h-[380px]"
            >
              <p>
                The Bank’s growth is shaped by discipline in how capital is
                deployed, how risk is managed and how opportunities are
                selected. Rather than pursuing scale for its own sake, the Bank
                focuses on expanding in ways that reinforce resilience, enhance
                profitability quality and deepen the durability of its operating
                model. This measured approach allows performance to strengthen
                while preserving the flexibility required to navigate evolving
                market conditions.
              </p>
              <p>
                At the same time, SAIB continues to broaden the sources and
                drivers of value creation across the franchise. Its business
                model is becoming increasingly balanced, supported by a wider
                mix of revenue streams, client segments and financial
                capabilities. This diversification strengthens stability across
                cycles, reduces concentration risk and enhances the consistency
                of earnings over time. As the Bank evolves, growth is
                accompanied by greater structural balance, positioning it to
                generate returns that are both sustainable and increasingly
                resilient.
              </p>
              <p>
                Underlying this trajectory is a strong institutional foundation.
                Capital strength, liquidity depth and robust governance provide
                the stability required to support expansion while maintaining
                prudent risk parameters. These structural anchors enable SAIB to
                invest with confidence, support clients across changing economic
                conditions and pursue long-term strategic priorities without
                compromising financial integrity. Growth is therefore supported
                by the strength of the framework within which it occurs.
              </p>
              <p>
                Taken together, these elements define a banking franchise that
                is advancing with control, balance and long-term perspective.
                SAIB continues to shape its future through careful allocation of
                resources, thoughtful diversification of value creation and
                disciplined strengthening of its financial foundations, ensuring
                that progress today contributes directly to enduring performance
                in the years ahead.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default StrategyPanel;
