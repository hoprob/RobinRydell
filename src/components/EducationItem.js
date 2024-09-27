function EducationItem({icon, educationInfo}){
    return(
        <div className="text-secondary">
                        <div className="flex flex-row items-center text-info">
                            <i className={`${icon} me-2`}></i><h5 className="text-lg font-bold">{educationInfo.title} {educationInfo.years}</h5>
                        </div>
                        <div className="ms-7">
                        <i>{educationInfo.institution}</i>
                        <p>{educationInfo.text}</p>
                        </div>
                        
                    </div>
    );
}

export default EducationItem;