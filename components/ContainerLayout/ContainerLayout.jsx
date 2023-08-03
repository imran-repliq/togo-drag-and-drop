const ContainerLayout = ({ children }) => {
  return (
    <main className="lg:mx-auto lg:px-0 px-3 bg-[#ECF9FF]">
      <div className="container min-h-screen max-w-screen-xl flex items-center ">
        {children}
      </div>
    </main>
  );
};

export default ContainerLayout;
