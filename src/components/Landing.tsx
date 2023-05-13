"use client"
import ImageCard from "@src/ui/ImageCard";
import CurvedText from "@src/ui/CurvedText";
import "../app/globals.css"


const Landing = () => {
    return (
        <>
            <div className="flex  w-full mt-14">
                <div className="w-[60%] ">
                    <ImageCard source="/images/first_girl.png" button="New Drops"
                               imgstyle="transform -scale-x-100 rounded-3xl h-[41rem] xl:h-[35rem]  w-[100%]"
                               styles={`max-h-[42rem]  object-top w-full`} width={500}/>
                </div>
                <div className="flex flex-col  w-[100%]">
                    <div className="  flex w-full">
                        <ImageCard source="/images/second_girl.jpg" button="Female Cloth"
                                   imgstyle="rounded-3xl   h-[100%] w-[100%]"
                                   styles={`ml-20 h-[22rem] xl:h-[20rem]  w-[45%]`} width={350}/>
                        <ImageCard source="/images/male_model.jpg" button="Male Cloth"
                                   imgstyle="rounded-3xl object-fill h-[100%] w-[100%]"
                                   styles={` ml-20 h-[22rem] xl:h-[20rem] w-[45%]`} width={350}/>
                    </div>
                    <div>
                        <p className="ml-20 mt-10 w-[60%]  text-5xl 3xl:text-4xl 2xl:text-3xl font-['Schibsted_Grotesk']">Each piece is
                            designed <span className="font-['Kurale'] italic underline underline-offset-4">to move with you</span>
                        </p>
                    </div>
                    <div className="ml-20 mt-28 flex">
                        <button
                            className="mr-10  rounded-xl  w-48 h-14 font-semibold bg-stone-800 text-xl text-[#F5F5F5] hover:bg-gray-700  ">SHOP
                            NOW
                        </button>
                        <p className="leading-5 font-['Schibsted_Grotesk'] w-[42%]">Our collection is designed for the urban dweller who wants to make a statement with their
                            wardrobe.</p>
                    </div>
                </div>
            </div>
            <div className="flex" >
            <hr className="border-black mt-20 w-[100%] "/>
                <div className="relative -mt-20" >
                <CurvedText/>
                    <div className="bg-black w-6 h-6 rounded-full absolute bottom-[8.6rem] left-[8.5rem]"/>
                </div>
            </div>
        </>

    )
}

export default Landing