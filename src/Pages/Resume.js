import Education from "../components/Education";
import WorkExperience from "../components/WorkExperience";

function Resume() {
  return (
    <div className="w-100 flex justify-center">
      <div className="px-14 w-10/12 md:w-9/12 lg:w-4/6 xl:w-7/12">
        <Education></Education>

        <hr className="text-info my-8"></hr>
        <WorkExperience></WorkExperience>
      </div>
    </div>
  );
}

export default Resume;
