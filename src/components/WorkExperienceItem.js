function WorkExperienceItem({icon, workExpInfo}){
    return(
        <div className="text-secondary">
      <div className="flex flex-row items-center text-info">
        <i className={`${icon} me-2`}></i>
        <h5 className="text-lg font-bold">
          {workExpInfo.company} {workExpInfo.years}
        </h5>
      </div>
      <div className="ms-7">
        <i>{workExpInfo.title}</i>
        <p>{workExpInfo.text}</p>
      </div>
    </div>
    );
}

export default WorkExperienceItem;