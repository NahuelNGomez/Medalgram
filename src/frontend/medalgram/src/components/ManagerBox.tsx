export default function ManagerBox({ description, action, token }: any) {
    const handleClick = () => {
        action(token);
    }
    return (
        <div className="flex flex-wrap justify-center">
            <div className="items-center align-items p-3">
                <div className="bg-gray-900 border border-gray-800 text-gray-400 rounded shadow p-3 hover:bg-black transition duration-500 hover:text-gray-100">
                    <div className="flex flex-row items-center">
                        <button onClick={handleClick}>
                            <div className="flex-1 text-right md:text-center">
                                <h5 className="font-bold uppercase">{description}</h5>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}