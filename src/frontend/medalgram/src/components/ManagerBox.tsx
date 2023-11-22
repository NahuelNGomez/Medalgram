export default function ManagerBox({ description, action }: any) {
    const handleClick = () => {
        action();
    }
    return (
        <div className="flex flex-wrap justify-center">
            <div className="items-center align-items p-3">
                <div className="bg-gray-900 border border-gray-800 rounded shadow p-2">
                    <div className="flex flex-row items-center">
                        <button onClick={handleClick}>
                            <div className="flex-1 text-right md:text-center">
                                <h5 className="font-bold uppercase text-gray-400">{description}</h5>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}