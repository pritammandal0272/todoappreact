const Container = (props) => {
    return <>
        <div className="h-[100vh] bg-black flex items-center justify-center">
            <div className="w-[95%] md:w-[40%] h-[fit-content] p-4 bg-white rounded-xl flex items-center justify-center flex-col gap-2">
                {
                props.children
                }
            </div>
        </div>
    </>
}
export default Container;