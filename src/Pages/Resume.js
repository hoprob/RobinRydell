import LanguagesAndTechnologies from "../components/LanguagesAndTechnologies";
import Education from "../components/Education";
import WorkExperience from "../components/WorkExperience";
import Competences from "../components/Competences";
import Hobbies from "../components/Hobbies";

function Resume() {
  return (
    <div className="w-100 flex justify-center">
      <div className="px-8 space-y-5 w-full md:w-9/12 lg:w-4/6 xl:w-7/12">
        <div className="border border-info border-opacity-50 rounded-md p-5 flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-3">
          <div className="sm:w-1/3">
            <LanguagesAndTechnologies />
          </div>
          <div className="sm:w-1/3">
            <Competences />
          </div>
          <div className="sm:w-1/3">
            <Hobbies />
          </div>
        </div>
        <Education></Education>
        <hr className="text-info my-8"></hr>
        <WorkExperience></WorkExperience>
      </div>
    </div>
  );
}

export default Resume;
