/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */


const Recipe = ({ recipe, handleCookBtn }) => {
    const { img, description, pname, time, calories,ingredients } = recipe;
    return (
        <div>
            <div className="card bg-base-200 drop-shadow-xl lg:min-h-dvh p-6 shadow-xl">
                <img className="rounded-xl" src={img} alt="Shoes" />
                <div className="card-body">
                    <h2 className="card-title text-white font-bold text-xl">{pname}</h2>
                    <p>{description}</p>
                    <div className="divider"></div>
                    <div className="flex">
                        <p className="flex gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            {time}
                        </p>
                        <p className="flex gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                            </svg>
                            {calories}
                        </p>
                    </div>
                    <div className="divider"></div>
                    <div>
                        <h3 className="text-xl">Ingredients : {ingredients.length}</h3>
                        <ul className="list-disc list-inside">
                            {
                                ingredients.map(ingredients => <li>{ingredients}</li>)
                            }
                        </ul>
                    </div>
                    <div className="divider"></div>
                    <div className="card-actions  justify-center">

                        <button onClick={() =>handleCookBtn(recipe)} className="btn w-full rounded-full btn-primary">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;