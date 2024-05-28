import Image from "next/image";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-yellow-100 via-yellow-400 to-yellow-600 p-4">
      <div className="max-w-sm w-full bg-white rounded-lg shadow-lg p-6 text-center">
        <div className="mb-4">
          <Image
            src="/csPFP.jpg"
            alt="Profile Image"
            width={100}
            height={100}
            className="rounded-full mx-auto"
          />
        </div>
        <h1 className="text-2xl font-semibold mb-2 text-yellow-800">Lainey</h1>
        <p className="text-yellow-600 mb-4">Daughter of the King</p>

        <div className="space-y-4">
          <a
            href="#"
            className="block w-full py-2 px-4 bg-orange-500 text-white rounded-full hover:bg-orange-600"
          >
            Link 1
          </a>
          <a
            href="#"
            className="block w-full py-2 px-4 bg-orange-500 text-white rounded-full hover:bg-orange-600"
          >
            Link 2
          </a>
          <a
            href="#"
            className="block w-full py-2 px-4 bg-orange-500 text-white rounded-full hover:bg-orange-600"
          >
            Link 3
          </a>
        </div>

        <div className="flex justify-center space-x-4 mt-6">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-gray-900"
          >
            <FaTwitter className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-gray-900"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-gray-900"
          >
            <FaGithub className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
}
