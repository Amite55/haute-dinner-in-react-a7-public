/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

const Sidebar = ({ recipeSidebar, handleParingBtn, preparingAdd }) => {

    return (
        <div className="w-2/5 text-center  rounded-xl bg-base-200 p-5">
            <h1 className="text-4xl font-bold py-6">Want to cook: {recipeSidebar.length}</h1>
            <div className="divider px-8"></div>

            <div className="flex justify-around lg:mr-12">
                <p className="lg:text-xl lg:font-bold">Name</p>
                <p className="lg:text-xl lg:font-bold">Time</p>
                <p className="lg:text-xl lg:font-bold">Calories</p>
            </div>
            <div>
                {
                    recipeSidebar.map((items, index) =>
                        <div className="flex justify-around mt-4">
                            <p>{index + 1}</p>
                            <p>{items.pname}</p>
                            <p>{items.time} minute</p>
                            <p>{items.calories}</p>
                            <button onClick={() => handleParingBtn(items)} className="btn rounded-full bg-primary text-white">Preparing</button>
                        </div>
                    )
                }
            </div>
            <div className="divider"></div>
            <div>
                <h2 className="sm:text-2xl lg:text-4xl font-bold py-6">Currently cooking: {preparingAdd.length}</h2>
                <div className="divider px-8"></div>
                <div className="flex justify-around mt-8">
                    <p className="lg:text-xl lg:font-bold">Name</p>
                    <p className="lg:text-xl lg:font-bold">Time</p>
                    <p className="lg:text-xl lg:font-bold">Calories</p>
                </div>
                <div>
                {
                    preparingAdd.map((per,index) =>
                        <div className="flex justify-around mt-8">
                            <p>{index + 1}</p>
                            <p>{per.pname}</p>
                            <p>{per.time} minute</p>
                            <p>{per.calories}</p>
                        </div>
                    )
                }
                </div>
            </div>
            <div className="divider"></div>
            <div className="flex justify-around">
                <h2 className="font-bold text-xl">Total Time : {preparingAdd.reduce((p, c) => p + c.time,0)} minute</h2>
                <h2 className="font-bold text-xl">Total Calories : {preparingAdd.reduce((p,c) => p + c.calories, 0)} </h2>
            </div>

        </div>
    );
};

export default Sidebar;