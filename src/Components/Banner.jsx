
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-dvh my-16" style={{ backgroundImage: 'url(https://i.ibb.co/27cYfwx/banner.jpg)' }}>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-4xl">
                        <h1 className="mb-7 text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                        <p className="mb-7">The sauce is rich, flavorful and it pairs perfectly with the chicken. Marry Me Chicken is a great dish for a special occasion or for a weeknight meal when you want to impress your family and friends.</p>
                        <div className="space-x-5 mt-10">
                        <button className="btn rounded-full btn-primary">Explore Now</button>
                        <button className="btn rounded-full border">Our Feedback</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;