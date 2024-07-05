import React from "react";

const ContactForm = () => {
  return (
    <>
      <div className="font-extrabold text-left mx-20 my-6 rounded-lg">
        <h2 className="">LEAVE YOUR COMMENT</h2>
        <div className=" bg-zinc-900 mx-10 my-10 px-5 py-10 text-black rounded-lg">
          <form className=" rounded-lg grid grid-rows-6 grid-cols-1 mx-20 gap-5">
            <input
              type="text"
              value="Name *"
              className="rounded-lg w-full h-12 form-control bg-zinc-500 "
            />
            <input
              type="text"
              value="Email *"
              className="rounded-lg w-full h-12 form-control bg-zinc-500 "
            />
            <input
              type="text"
              value="Mobile Number *"
              className="rounded-lg w-full h-12 form-control bg-zinc-500 "
            />
            <input
              type="text"
              value="Company Name *"
              className="rounded-lg w-full h-12 form-control bg-zinc-500 "
            />
            <input
              type="text"
              value="Message *"
              className="rounded-lg w-full h-12 form-control bg-zinc-500 "
            />
            <input
              type="submit"
              value="SEND *"
              className="rounded-lg w-36 h-12 form-control bg-zinc-100 "
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
