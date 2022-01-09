import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client";
import { PPSHeading, PPSSubHeading } from "../Constants";

const ProblemsPage = () => {
  const [problems, setProblems] = useState<[] | null>(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "problem"]{
      title,
      slug,
      author,
      categories,
      tags,
      publishedAt,
      body
    }`
      )
      .then((result) => {
        setProblems(result);
      })
      .catch(console.error);
  }, []);

  return (
    <main className="bg-orange-200 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">{PPSHeading}</h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          {PPSSubHeading}
        </h2>
        <div>
          {problems
            ? problems.map((problem: any, index) => {
                return (
                  <article
                    key={problem.slug.current}
                    className="relative rounded-lg shadow-xl bg-white p-16"
                  >
                    <Link
                      to={"/problems/" + problem.slug.current}
                      key={problem.slug.current}
                    >
                      <h1 className="text-gray-800 text-lg text-center font-bold px-3 py-4 bg-orange-600 text-orange-100 bg-opacity-75 rounded">
                        {problem.title}
                      </h1>
                    </Link>
                  </article>
                );
              })
            : null}
        </div>
      </section>
    </main>
  );
};

export default ProblemsPage;
