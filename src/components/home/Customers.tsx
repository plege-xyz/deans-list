const Customers = () => {
  const customers = [
    {
      image: "/images/customers/squads.jpg",
      twitter: "SquadsProtocol",
    },
    {
      image: "/images/customers/streamflow.jpg",
      twitter: "streamflow_fi",
    },
    {
      image: "/images/customers/unique-vcs.jpg",
      twitter: "uniquevcs",
    },
    {
      image: "/images/customers/guilder.jpg",
      twitter: "gilderxyz",
    },
    {
      image: "/images/customers/strata-protocol.jpg",
      twitter: "StrataProtocol",
    },
    {
      image: "/images/customers/everlend-finance.png",
      twitter: "EverlendFinance",
    },
  ];

  return (
    <div className="relative h-56 w-full border-y-4 border-white bg-[url('/images/customers/bg.png')] bg-cover">
      <div className="flex h-full w-full items-center justify-center gap-x-10">
        {customers.map((customer, key) => (
          <div className="flex flex-col items-center gap-y-3" key={key}>
            <img
              src={customer.image}
              alt=""
              className="h-24 rounded-full border-4 border-white"
            />
            <div className="space">@{customer.twitter}</div>
          </div>
        ))}
      </div>

      <div className="absolute -bottom-5 flex w-full items-center justify-center">
        <button className="space h-10 rounded-full bg-white px-8 text-black">
          Customers
        </button>
      </div>
    </div>
  );
};

export default Customers;
