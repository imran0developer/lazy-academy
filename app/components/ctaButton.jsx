"use client"
export default function CTAButton({ title, color }) {

    const hanldeJoinClick = () => {
        console.log("join clicked");
    }

    return (
        <button
            className={`text-white text-[12px] lg:text-[20px] font-black transition-colors duration-300 cursor-pointer relative ml-auto px-4 lg:px-8 py-2 rounded-md text-center isolation-auto z-10 border-2 border-lime-500 bg-orange overflow-hidden bg-${color} before:hover:duration-700 hover:bg-dark`}
            onClick={hanldeJoinClick}
        >
            {title}
        </button>
    );
}