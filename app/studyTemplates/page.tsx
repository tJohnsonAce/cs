import Image from "next/image";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function BibleStudyTemplates() {
  const templates = [
    {
      title: "Template 1",
      description: "asdj;kfh asdkasdkjh",
      link: "/template1",
      image: "/template1.jpg",
    },
    {
      title: "Template 2",
      description: "asdj;kfh asdkasdkjh",
      link: "/template1",
      image: "/template1.jpg",
    },
    {
      title: "Template 3",
      description: "asdj;kfh asdkasdkjh",
      link: "/template1",
      image: "/template1.jpg",
    },
    // Add more templates as needed
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-yellow-100 via-yellow-400 to-yellow-600 p-4">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-semibold mb-4 text-yellow-800 text-center">
          Bible Study Templates
        </h1>
        <p className="text-yellow-600 mb-6 text-center">
          Click on a template to start your study
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {templates.map((template, index) => (
            <a
              key={index}
              href={template.link}
              className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={template.image}
                alt={template.title}
                width={400}
                height={300}
                className="object-cover w-full h-48"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-yellow-800">
                  {template.title}
                </h2>
                <p className="text-yellow-600">{template.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
