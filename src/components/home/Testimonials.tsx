const Testimonials = () => {
  const testimonials = [
    {
      message:
        "Shout out to @GrapeDeansList for creating a fantastic service, great output so far! Thank you all for the amazing review!",
      author: "streamflow_fi",
    },
    {
      message:
        "Impressed with the amount of feedback there and in this channel. We have either fixed or planning to fix most of these issues reported, and incorporating your feedback in our future roadmap",
      author: "Restuta",
    },
    {
      message:
        "Better link now. Don't sleep on @grapeprotocol and @GrapeDeansList",
      author: "redacted_noah",
    },
  ];

  return (
    <div className="flex w-full flex-col items-center bg-[url('/images/testimonials/bg.png')] bg-cover pt-40">
      <div className="TT text-center text-7xl ">
        SOLANA FEEDBACK <br /> SESSIONS
      </div>
      <div className="space mt-10 text-center text-xl">
        Dean&apos;s List is a Service DAO consisting of Web3 power users, <br />{" "}
        who provide valuable feedback sessions to projects
      </div>

      <div className="space grid grid-cols-3 gap-5 py-20">
        {testimonials.map((testimonial, key) => (
          <div
            key={key}
            className="border-[rgba(255,255,255, 0.5)] flex max-w-xs flex-col justify-between rounded border-[1px] bg-[rgba(255,255,255,0.1)] p-5 text-gray-200"
          >
            {testimonial.message}

            <div className="pt-5 text-white">@{testimonial.author}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
