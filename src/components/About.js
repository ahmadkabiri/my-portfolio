import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <p className="text-xl mt-20 ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
          impedit molestiae officia esse debitis non consequuntur, est tenetur
          harum totam illo similique quam magni optio adipisci earum praesentium
          reiciendis vel. Molestias enim doloribus, temporibus ipsum ut magni,
          nobis porro quaerat exercitationem eos ad. Sit perspiciatis explicabo
          at ullam beatae reiciendis.

        </p>



        <p className="text-xl mt-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
          autem animi neque eos adipisci ratione iusto eaque dolor consectetur
          quaerat in, eius sit officia pariatur ipsa, similique provident.
          Praesentium quis, voluptatibus, dicta ut voluptatum voluptate odio
          autem veniam provident rem soluta eum beatae ea amet architecto error
          eligendi sint enim.
        </p>
      </div>
    </div>
  );
}

export default About;
