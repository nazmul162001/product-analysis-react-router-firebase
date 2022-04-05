import React from 'react';

const Blogs = () => {
  return (
    <div>
      <div className="simantic-element pt-12 px-5">
        <h1 className="text-3xl font-mono">Q1.What is Simantic element?</h1>
        <p className="text-xl text-gray-500 md:pl-10">
          * Simantic Tag বলতে সাধারণত যেসকল ইলিমেন্ট বা ট্যাগ এর মিনিংফুল অর্থ
          আছে যা দেখে ব্রাউজার এবং ডেভেলপাররা সহজেই বুঝতে পারে যে এই ইলিমেন্ট এর
          ভিতরে কি থাকতে পারে। যেমন: form, table, article, aside, header,
          footer, nav, main, section এই ট্যাগ গুলো দেখে সহজেই কন্টেন্ট এর বিষয়
          বুঝতে পারা যায়। <br />
          অপরদিকে div , span এই ট্যাগ বা ইলিমেন্ট গুলো দেখে কোড সম্পর্কে বা
          কন্টেন্ট সম্পর্কে বুঝতে পারা যায় না। এজন্য এগুলোকে non-simantic ট্যাগ
          বলা হয়।
        </p>
        <h1 className="text-3xl font-mono mt-5">
          Q2.What is inline, block & inline-block element?
        </h1>
        <p className="text-xl text-gray-500 md:pl-10">
          <span className="font-bold">Block:</span> Block-level element সর্বদা
          নতুন লাইন থেকে শুরু হয়, এবং ব্রাউজার Default ভাবে কিছু যায়গা দখল করে
          রাখে। Block-level element সর্বদা সম্পূর্ণ width নেয় Available space এর
          মধ্যে। যেমন: div, p, h1-h6, header, footer, article, address, form,
          nav, main, ul, li etc এগুলো সব block-level element.
          <br />
          <br />
          <span className="font-bold">Inline:</span> Inline-element স্বাভাবিক
          ভাবে সম্পূর্ণ width না নিয়ে শুধুমাত্র যতটুকু দরকার ততটুকুই নেয় অর্থাৎ
          কন্টেন্ট যতটুকু ততটুকু্ই width নেয়। এবং inline-element এ width, height
          কাজ করে না। যেমন: span, strong, button, img, label, input, a, abbr,
          small, br etc এগুলো সব inline-element
          <br />
          <br />
          <span className="font-bold">Inline-Block:</span>
          Inline-block element এবং inline-element দুইটার মধ্যে মেইন পার্থক্য হল
          inline-element এ কোন width , height কাজ করে না কিন্তু inlile-block
          element এ width , height , padding, margin সব কিছুই ব্যাবহার করা যায়।
          আর block-element এবং inline-block element এর মধ্যে মেইন পার্থক্য হল
          block-element সম্পূর্ণ width দখল করে এবং প্রতিবার নতুন লাইন তৈরি করে
          কিন্তু inline-block element নতুন লাইন তৈরি করে না।
        </p>

        <h1 className="text-3xl font-mono mt-5">
          Q3.What is the purpose of Context API?
          <p className="text-xl text-gray-500 md:pl-10">
            React contex api is a way for a react app to effectively produce
            global variables that can be passed around. Contex api is the
            alternative to props drilling and moving props from parent to child
            and child to parent,and so on. Contex Api is a best way to share
            values between our component without using props every time.When
            some value needed different levels of the components tree and for
            many elements, then context api will be a good idea to use.
          </p>
        </h1>
      </div>
    </div>
  );
};

export default Blogs;
