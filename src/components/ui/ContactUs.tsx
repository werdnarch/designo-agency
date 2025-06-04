import React from "react";

export default function ContactUs() {
  return (
    <section className="orange w-full flex flex-col lg:flex-row items-center py-6 lg:rounded-2xl">
      <div className="w-full text-white text-center lg:text-left lg:p-8">
        <h1 className="font-semibold text-3xl">Contact Us</h1>

        <p className="mt-4">
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line
        </p>
      </div>

      <form className="flex flex-col items-center w-full gap-4 my-6">
        <button
          type="submit"
          className="bg-white text-orange-500 w-[130px] transition-colors duration-300 ease-in-out hover:text-white hover:bg-[#ffac99] rounded-sm cursor-pointer p-3 uppercase"
        >
          SUBMIT
        </button>
      </form>
    </section>
  );
}
