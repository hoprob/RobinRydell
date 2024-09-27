
function ScrollDownChevron({chevronExpanded = true}){
    return(
        <div className="w-full flex flex-col justify-center text-secondary">
            <p className="text-center font-semibold">Mer om mig</p>
            <div className={`flex h-12 justify-center ${chevronExpanded ? 'pt-6' : 'pt-0'} -space-x-[14.4px] transition-transform transform`}>
                <span className={`w-14 h-1 border-b-2 ${chevronExpanded ? 'rotate-[38deg]' : ''} transition-transform transform`}></span>
                <span className={`w-14 h-1 border-b-2 ${chevronExpanded ? '-rotate-[38deg]' : ''} transition-transform transform`}></span>
            </div>
        </div>
    )
}

export default ScrollDownChevron;