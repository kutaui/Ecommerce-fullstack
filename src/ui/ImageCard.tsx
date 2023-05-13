import Image from "next/image";

interface ImageCardProps {
    source: unknown
}

const ImageCard = (props: any) => {
    return <>
        <div className={`${props.styles} relative`}>
            <Image src={props.source} alt="Girl model eating lollipop" width={props.width} height={300} className={props.imgstyle}
            />
            <button className="absolute bottom-5  right-5 rounded-3xl bg-white w-32 h-10 font-semibold hover:bg-stone-800 hover:text-white ">{props.button}</button>
        </div>
    </>
}

export default ImageCard