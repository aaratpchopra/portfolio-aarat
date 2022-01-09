import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client";
import BlockContent from "@sanity/block-content-to-react";
import ImageComponent from "../components/ImageComponent";
import FetchImgComponent from "../components/FetchImgComponent";

const ProblemPage = () => {
  const [problem, setProblem] = useState<any | null>(null);

  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"] {
      title, _id, slug, body, "name": author->name, "authorImage": author->image
    }`
      )
      .then((result) => {
        // console.log(result);
        setProblem(result);
      })
      .catch(console.error);
  }, []);

  if (!problem) return <div>LOADING .....</div>;

  return (
    <main className="bg-gray-200 min-h-screen p-12">
      <article className="container shadow-lg mx-auto bg-orange-200 rounded-lg">
        <header className="relative">
          <div className="absolute h-full w-full flex items-center justify-center p-8">
            <div className="bg-white bg-opacity-75 rounded p-12">
              <h1 className="cursive text-3xl lg:text-6xl mb4">
                {problem[0].title}
              </h1>
              <div className="flex justify-center text-gray-800">
                <ImageComponent
                  img={problem[0] ? problem[0].authorImage : ""}
                  alt="Img"
                  className="w-10 h-10 rounded-full"
                />
                <p className="cursive flex items-center pl-2 text-2xl">
                  {problem[0].name}
                </p>
              </div>
            </div>
          </div>
          <FetchImgComponent
            name="MB"
            className="w-full object-cover rounded-t"
            alt="Me Image :)"
          />
        </header>
        <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
          <BlockContent
            blocks={problem[0].body}
            projectId="gaeh25y7"
            dataset="production"
          />
        </div>
      </article>
    </main>
  );
};

export default ProblemPage;
