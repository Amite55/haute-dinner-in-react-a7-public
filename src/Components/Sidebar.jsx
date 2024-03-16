/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

const Sidebar = ({ recipeSidebar }) => {
   
    return (
        <div className="w-2/5 text-center  rounded-xl bg-base-200 p-5">
            <h1 className="text-4xl font-bold py-6">Want to cook: {recipeSidebar.length}</h1>
            <div className="divider px-8"></div>

            <div className="flex justify-around mr-12">
                <p>Name</p>
                <p>Time</p>
                <p>Calories</p>
            </div>
            <div>
                {
                    recipeSidebar.map(items =>
                        <div className="flex justify-around mt-4">
                        <p>{items.pname}</p>
                        <p>{items.time}</p>
                        <p>{items.calories}</p>
                        <button className="btn rounded-full bg-primary text-white">Preparing</button>
                    </div>
                    )
                }
            </div>
            <div className="divider"></div>
            <div>
                <h2 className="text-4xl font-bold py-6">Currently cooking: 02</h2>
                <div className="divider px-8"></div>
                <div className="flex justify-around mr-12 mt-5">
                <p>Name</p>
                <p>Time</p>
                <p>Calories</p>
            </div>
            </div>
   
        </div>
    );
};

export default Sidebar;