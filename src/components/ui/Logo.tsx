const Logo = () => {
  return (
    <div className="flex-1 flex justify-center">
      <div className="logo-shape">
        <div>
          <div className="logo-top"></div>
          <div className="logo-top-trans"></div>
        </div>
        <div className="logo-circle"></div>
        <div>
          <div className="logo-bottom-trans"></div>
          <div className="logo-bottom"></div>
        </div>
      </div>

      <div className="max-[440px]:hidden text-black">
        <h3 className="font-semibold">البنك السعودي للإستثمار</h3>
        <h5 className="text-xs font-serif">The Saudi Investment Bank</h5>
      </div>
    </div>
  );
};

export default Logo;
