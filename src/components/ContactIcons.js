function ContactIcons({textSizeClass = 'text-4xl', spaceXClass = 'space-x-10'}){
    return(
        <div className={`h-12 flex justify-center items-center ${textSizeClass} ${spaceXClass} text-secondary`}>
            <a target="_blank" href="https://www.linkedin.com/in/robin-svensson2"><i className="fa-brands fa-linkedin"></i></a>
            <a target="_blank" href="https://github.com/hoprob"><i className="fa-brands fa-github"></i></a>
            {/* <a target="_blank" href="https://discordapp.com/users/884740341754904606"><i className="fa-brands fa-discord"></i></a> */}
            <a target="_blank" href="mailto:robinehrydell@gmail.com"><i className="fa-solid fa-envelope"></i></a>
        </div>
    );
}

export default ContactIcons;