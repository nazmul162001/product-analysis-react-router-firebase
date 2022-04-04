import React from 'react';

const Blogs = () => {
  return (
    <div>
      <div className="simantic-element pt-12 px-5">
        <h1 className="text-3xl font-mono">What is Simantic element?</h1>
        <p className='text-xl text-gray-500'>
          {' '}
          <li>
            Simantic Tag বলতে সাধারণত যেসকল ইলিমেন্ট বা ট্যাগ এর মিনিংফুল অর্থ
            আছে যা দেখে ব্রাউজার এবং ডেভেলপাররা সহজেই বুঝতে পারে যে এই ইলিমেন্ট
            এর ভিতরে কি থাকতে পারে। যেমন: form, table, article, aside, header,
            footer, nav, main, section এই ট্যাগ গুলো দেখে সহজেই কোড এর বিষয়
            বুঝতে পারা যায়। <br />
            অপরদিকে div , span এই ট্যাগ বা ইলিমেন্ট গুলো দেখে কোড সম্পর্কে বা
            কন্টেন্ট সম্পর্কে বুঝতে পারা যায় না। এজন্য এগুলোকে non-simantic
            ট্যাগ বলা হয়।
          </li>
        </p>
        <h1 className="text-3xl font-mono mt-5">What is inline, block & inline-block element?</h1>
        <p>
          <li>

          </li>
        </p>
      </div>
    </div>
  );
};

export default Blogs;
