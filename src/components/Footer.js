import ContactIcons from "./ContactIcons";

function Footer(){
    return (
      <div className="w-full flex justify-center mb-5">
        <div className="w-10/12 md:w-9/12 lg:w-4/6 xl:w-7/12">
          <hr className="text-secondary my-3"></hr>
          <div className="grid grid-cols-3">
            <div className="col-1 text-secondary">
              <p className="font-semibold">
                Design + kod av: <br/>
                <span className="font-bold text-info">Robin Rydell</span>
              </p>
              <p>© {new Date().getFullYear()}</p>
            </div>
            <div>
              <ContactIcons
                textSizeClass="text-lg"
                spaceXClass="space-x-5"
              ></ContactIcons>
            </div>
            <div className="flex justify-center items-center">
                <p className="text-secondary">Built with <a href="https://react.dev/" target="_blank"><i className="fa-brands fa-react text-info"></i></a></p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Footer;