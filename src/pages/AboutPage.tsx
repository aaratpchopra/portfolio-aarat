import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import FetchImgComponent from "../components/FetchImgComponent";
import { APDescription, APGreeting } from "../Constants";

const AboutPage = () => {
  const [images, setImages] = useState<any>(null);
  let imageME: any;

  useEffect(() => {
    sanityClient.fetch(`*[_type == "images"]`).then((result) => {
      setImages(result);
    });
  }, []);

  if (images) {
    imageME = images.filter((value: any) => value.caption === "me");
  }

  return (
    <main className="relative">
      <FetchImgComponent
        name="MB"
        alt="Background Image!"
        className="absolute object-fill"
      />
      <div>
        <section>
          <div className="p-10 lg:pt-48 container mx-auto relative">
            <section className="bg-orange-800 rounded-lg shadow-2xl lg:flex p-20">
              <FetchImgComponent
                name="me"
                alt="Me :)"
                className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
              />
              <div className="text-lg flex flex-col justify-center">
                <h1 className="cursive text-6xl text-orange-300 mb-4">
                  {APGreeting}
                </h1>
                <div className="prose lg:prose-xl text-white">
                  {APDescription}
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;
