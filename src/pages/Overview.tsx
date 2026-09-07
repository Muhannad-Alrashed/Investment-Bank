import HeroImage from "../assets/overview-hero.jpg";
import ChevronGray from "../assets/chevron-gray.svg";
import AwardIcon from "../assets/icons/award.svg";
import CertificateIcon from "../assets/icons/certificate.svg";
import Chevron from "../assets/chevron.svg";

const Overview = () => {
  const overviewTabs = [
    { id: "at-a-glance", label: "At a Glance" },
    { id: "year-in-review", label: "Year in Review" },
    { id: "investment-case", label: "Investment Case" },
  ];

  const awardsArray = [
    "Product of the Year 2025 in Saudi Arabia for the Travel Card and Travel Account.",
    "Most Innovative Retail Banking Product in Saudi Arabia, International Finance Awards 2025.",
    "Best Mobile Banking App in Saudi Arabia for the new retail app, International Finance Awards 2025.",
    "Ranked fourth among the top 10 most influential banking and finance brands in Saudi Arabia by IPSOS.",
    "Straight Through Processing excellence award from Citi, achieving over 99% STP in commercial payments.",
    "Named among the world’s greenest companies by Newsweek.",
    "Recognized as one of the most innovative financial services companies in the Middle East by Fast Company.",
  ];

  const certifications = [
    "ISO 37301 Compliance Management System certification",
    "ISO/IEC 27001:2022 Information Security certification",
    "PCI DSS v4.0 certification for payment card data security",
  ];

  const stats = [
    { label: "Total assets", value: "173 bn", prev: "157 BN" },
    { label: "Total equity", value: "22.43 bn", prev: "21.13 BN" },
    { label: "Total investment portfolio", value: "47.2 bn", prev: "41 BN" },
    { label: "Net income", value: "2,431 MN", prev: "1,957 MN" },
    { label: "Total income", value: "4,794 MN", prev: "4,178 MN" },
    {
      label: "Return on Equity (ROE)",
      value: "14.76 %",
      prev: "12.75%",
      symbol: false,
    },
  ];

  return (
    <div className="page-wrapper flex px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-28 py-4 sm:py-6 lg:py-8">
      <div className="flex-1 min-w-0">
        {/* ===================================== Hero Section =====================================  */}

        <section className="o-hero">
          <img
            src={HeroImage}
            alt="SAIB building interior"
            className="absolute -top-1 h-[calc(100%+4px)] w-full object-cover"
          />
          <div className="absolute bg-gradient-to-r from-black/50 via-black/10 to-transparent" />
          <div
            className="relative h-full flex flex-col items-start justify-center gap-5 sm:gap-6
                      px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-28"
          >
            <h1
              className="text-white font-bold leading-none tracking-wide
                        text-5xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-[120px]  z-1"
            >
              Overview
            </h1>
            <button
              type="button"
              className="bg-[var(--color-gray-800)] text-white font-bold rounded-2xl
                      text-lg sm:text-xl md:text-2xl px-8 sm:px-10 py-2.5 sm:py-3
                      transition-all duration-100 hover:-translate-y-0.5 hover:shadow-lg z-1"
            >
              Download PDF
            </button>
          </div>
          <img src={Chevron} alt="animated-chevron" className="chevron" />
        </section>

        {/* ===================================== background Section =====================================  */}

        <div className="relative -mx-4 sm:-mx-6 lg:-mx-12 xl:-mx-20 2xl:-mx-28 overflow-hidden bg-white">
          <img
            src={ChevronGray}
            alt=""
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-20 w-[150vw] max-w-none -translate-x-1/2 select-none"
          />
          <div className="relative px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-28 py-10 sm:py-14 lg:py-16">
            {/* ===================================== Tabs Section =====================================  */}

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
              {overviewTabs.map((tab) => {
                const isActive = tab.id === "at-a-glance";
                return (
                  <button
                    key={tab.id}
                    type="button"
                    aria-pressed={isActive}
                    className={`w-60 rounded-2xl border px-6 sm:px-8 py-2.5 sm:py-3
              text-base sm:text-lg lg:text-2xl font-[900] transition-colors duration-150
              ${
                isActive
                  ? "bg-primary border text-white"
                  : "st-primary text-black hover:text-white hover:bg-[var(--color-primary)]"
              }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
            <div className="mt-12 space-y-16 lg:mt-20 lg:space-y-28">
              {/* ===================================== Intro Section =====================================  */}

              <section className="max-w-[1400px]">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl pb-4 font-bold text-[var(--color-text-primary)]">
                  Performance, recognition and momentum
                </h2>
                <p
                  className="mt-4 text-base sm:text-md lg:text-lg font-light
                leading-[1.2] text-[var(--color-text-secondary)] lg:pr-24"
                >
                  In 2025, SAIB delivered tangible progress across products,
                  funding, digital capability and external recognition. Strong
                  execution, disciplined innovation and continued focus on
                  governance translated into measurable outcomes that
                  strengthened the Bank&rsquo;s market position, diversified its
                  funding base and reinforced trust among customers, partners
                  and regulators. The highlights below capture the milestones
                  that defined the year and signal the Bank&rsquo;s readiness
                  for the next phase of growth.
                </p>
              </section>
              {/* ===================================== Awards Section =====================================  */}

              <div className="carousel-background h-76 sm:h-84 xl:h-88 relative">
                <section
                  className="absolute -left-4 sm:-left-6 lg:-left-12 xl:-left-28
                          bg-[#474b55] py-10 sm:py-12 lg:py-14"
                >
                  <div className="">
                    <h2
                      className="text-2xl md:text-3xl font-bold text-[#ffd400] sm:text-4xl lg:text-[40px]
                    px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-28"
                    >
                      Awards and Recognition
                    </h2>
                    <div className="carousel-wrapper">
                      <div className="carousel-track">
                        {awardsArray.map((text, i) => (
                          <article key={i} className="award info-card shrink-0">
                            <img
                              src={AwardIcon}
                              alt=""
                              aria-hidden
                              className="h-16 w-auto shrink-0 lg:h-20"
                            />
                            <p className="text-sm md:text-md lg:text-lg font-thin leading-[1.2] text-white">
                              {text}
                            </p>
                          </article>
                        ))}
                      </div>
                      <div className="carousel-track">
                        {awardsArray.map((text, i) => (
                          <article key={i} className="award info-card shrink-0">
                            <img
                              src={AwardIcon}
                              alt=""
                              aria-hidden
                              className="h-16 w-auto shrink-0 lg:h-20"
                            />
                            <p className="text-sm md:text-md lg:text-lg font-thin leading-[1.2] text-white">
                              {text}
                            </p>
                          </article>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              {/* ===================================== Certifications Section =====================================  */}

              <section>
                <h2 className="text-3xl font-bold text-[#ffd400] sm:text-4xl lg:text-[40px]">
                  Certifications and Standards
                </h2>
                <ul className="mt-8 grid grid-cols-1 justify-items-center gap-8 md:grid-cols-3 lg:mt-12 lg:gap-12">
                  {certifications.map((text, i) => (
                    <li key={i}>
                      <article className="certificate info-card ">
                        <img
                          src={CertificateIcon}
                          alt=""
                          aria-hidden
                          className="w-auto shrink-0 h-12 lg:h-14 ${iconClassName}"
                        />
                        <p className="text-[16px] font-light leading-[1.3] text-white sm:text-[17px] lg:text-[19px]">
                          {text}
                        </p>
                      </article>
                    </li>
                  ))}
                </ul>
              </section>

              {/* ===================================== Financial Section =====================================  */}

              <section>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text-primary)]">
                  Financial Highlights
                </h2>

                <div className="mt-8 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10">
                  {stats.map((stat, i) => {
                    const showSymbol = stat.symbol !== false;
                    return (
                      <div
                        key={i}
                        className="md:border-l md:border-[#cbc2ba] md:pl-8
                          md:[&:nth-child(3n+1)]:border-l-0 md:[&:nth-child(3n+1)]:pl-0"
                      >
                        <h3 className="c pb-2 font-semibold text-[var(--text-primary)]">
                          {stat.label}
                        </h3>
                        <p className="mt-3 flex items-center gap-2 text-3xl sm:text-4xl lg:text-5xl font-bold fl-primary">
                          {showSymbol && (
                            <svg
                              viewBox="0 0 24 24"
                              className="h-7 w-7 lg:h-9 lg:w-9 shrink-0"
                              role="img"
                              aria-label="Saudi Riyal"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M8 3.5v9.5a5 5 0 0 1-4.5 5" />
                              <path d="M15 3.5V12" />
                              <path d="M3.5 12.5 20 10" />
                              <path d="M3.5 16.5 20 14" />
                            </svg>
                          )}
                          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                            {stat.value}
                          </span>
                        </p>
                        <p className="mt-3 flex items-center gap-1 text-base font-light text-[var(--color-text-primary)]">
                          <span>(2026:</span>
                          {showSymbol && (
                            <svg
                              viewBox="0 0 24 24"
                              className="h-4 w-4 shrink-0"
                              role="img"
                              aria-label="Saudi Riyal"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M8 3.5v9.5a5 5 0 0 1-4.5 5" />
                              <path d="M15 3.5V12" />
                              <path d="M3.5 12.5 20 10" />
                              <path d="M3.5 16.5 20 14" />
                            </svg>
                          )}
                          <span>{stat.prev})</span>
                        </p>
                      </div>
                    );
                  })}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
