function NoMatch(){
    return(
        <div className="w-full h-[calc(100vh-210px)] flex flex-col justify-center items-center">
            <div className="text-8xl font-bold text-info">404</div>
            <div className="text-2xl font-bold text-info">Oops.. this page is empty</div>
            <div className="text-5xl">🤷</div>
        </div>
    );
}

export default NoMatch;