import Image from 'next/image';
import heroImg from "../../public/vec.jpg"
const Hero2 = () => {
    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-10 lg:flex-row lg:justify-between">
                {/* Text Content */}
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl">
                        NextGen Appliance Repair NY
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">
                        Professional appliance repair services you can trust
                        <br className="hidden md:inline lg:hidden" />
                        Schedule a Repair
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <a
                            href="#schedule"
                            className="px-8 py-3 text-lg font-semibold bg-[#FFD700] rounded dark:bg-violet-600 dark:text-gray-50"
                        >
                            Schedule Now
                        </a>
                        <a
                            href="#learn-more"
                            className="px-8 py-3 text-lg font-semibold bg-black text-white border rounded dark:border-gray-800"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
                {/* Image Section */}

                <Image
                    // src="https://cdn.prod.website-files.com/642459614fc351e33df0ab06/646be3adce622fc3c2d0b54a_62a3614cf23bdd729af9ff43_Tekmetric-Auto-Repair-Shop%25201-min.jpeg"
                    src={heroImg}
                    alt="Professional Appliance Repair"
                    className="object-contain h-72 sm:h-80 lg:h-[35rem]    "
                    width={800}
                    height={600}
                />

            </div>
        </section>
    );
};

export default Hero2;
