import { useState, useEffect } from "react";
import sanityClient from "../client";
import { PRPHeading, PRPSubHeading } from "../Constants";

const ProjectsPage = () => {
  const [projects, setProjects] = useState<[] | null>(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"] {
        title,
        slug,
        projectType,
        link,
        author,
        body,
        date
    }`
      )
      .then((result: []) => {
        setProjects(result);
        // console.log(result);
      });
  }, []);

  return (
    <main className="bg-orange-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">{PRPHeading}</h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          {PRPSubHeading}
        </h2>
        <section className="grid grid-cols-2 gap-8">
          {projects
            ? projects.map((project: any) => (
                <article
                  className="relative rounded-lg shadow-xl bg-white p-16"
                  key={project.slug.current}
                >
                  <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-orange-700">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.title}
                    </a>
                  </h3>
                  <div className="text-gray-500 text-xs space-x-4">
                    <span className="font-bold">
                      Finished On:{" "}
                      {new Date(project.date).toLocaleString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="font-bold">
                      {project.projectType === "client"
                        ? `Company: ${project.organization}`
                        : ""}
                    </span>
                    <span className="font-bold">
                      Type: {project.projectType}
                    </span>
                    <p className="my-6 text-lg text-gray-700 leading-relaxed">
                      {project.body[0].children[0].text}
                    </p>
                    <a
                      href={project.link}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="text-orange-500 font-bold hover:underline hover:text-orange-400 text-xl"
                    >
                      View Project{" "}
                      <span role="img" aria-label="right pointer">
                        👉🏻
                      </span>
                    </a>
                    <span></span>
                  </div>
                </article>
              ))
            : null}
        </section>
      </section>
    </main>
  );
};

export default ProjectsPage;
