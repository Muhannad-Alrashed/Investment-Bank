import HeroPage from "../assets/sustainability-hero.png";
import Chevron from "../assets/chevron.svg";

function Sustainability() {
  return (
    <div className="page-wrapper flex px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-28 py-4 sm:py-6 lg:py-8">
      <div className="space-y-6">
        {/* ===================================== Hero Section =====================================  */}

        <section className="s-hero">
          <img src={HeroPage} alt="hero-image" className="hero-img" />
          <h1 className="header text-3xl sm:text-5xl md:text-7xl lg:text-[100px]">
            Sustainability <br></br>Review
          </h1>
          <img src={Chevron} alt="animated-chevron" className="chevron" />
        </section>

        {/* ===================================== Feature Section =====================================  */}

        <div className="hero-base"></div>
        <section className="features">
          <div className="item">
            <h3>Our Sustainability Approach </h3>
            <p>
              Our sustainability approach aims to generate meaningful economic,
              social and environmental impact across how we operate, finance and
              engage with our Shareholders and Stakeholders, in line with
              international standards and best practices. We embed
              sustainability principles into our everyday decisions to create
              value, support both financial and non-financial growth, and
              contribute to Saudi National Vision 2030’s objectives. We are
              committed to building a sustainable future through responsible
              practices, community empowerment and innovative solutions.
            </p>
          </div>

          <div className="item">
            <h3>Our Sustainability Priorities</h3>
            <p>
              To fulfil our sustainability ambition and commitment, we have
              identified 18 materiality topics that take into consideration the
              priorities of both the internal and external Stakeholders,
              including regulatory bodies, peers and best practices. Out of
              these 18 material topics 13 sustainability priorities have been
              identified, including: 2 environmental, 7 social and 4 governance,
              as presented in the table below. These priorities are the
              cornerstone of our sustainability strategy and related initiatives
              and activities.
            </p>
          </div>

          <div className="item">
            <h3>Our Sustainability Priorities, Categories and Definitions</h3>
            <div>
              <div className="col">
                <div className="tab"></div>
                <div className="tab"></div>
                <div className="tab"></div>
              </div>
              <div className="col">
                <div className="item"></div>
                <div className="item"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Sustainability;
