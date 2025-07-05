const Writting_nav = ({link_nav, description_nav}) => {
  return (
    <>
      <div className="flex flex-col gap-3.5 mt-[9rem] ">
        <p className="text-3xl font-bold text-[var(--bold-text)]">
          {link_nav}
          {/* Writings! */}
          </p>
        <p className="text-[var(--text-color)]">
          {description_nav}
          {/* I share my thoughts on life, coding tricks, and whatever&apos;s on my
          mind. Come along for the ride and subscribe to keep up! */}
        </p>
      </div>
    </>
  );
};

export default Writting_nav;
