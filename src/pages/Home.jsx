import girl from "../assets/girl-desktop.jpg";
import bg_desktop from "../assets/bg-pattern-desktop.svg"
import { Logo } from "../components/Logo";

export const Home = () => {
    return <>
        <div className="grid grid-cols-10 h-screen w-full">
            <div style={{backgroundImage: `url(${bg_desktop})`}} className="col-span-6 bg-no-repeat w-full h-screen bg-cover">
                <div className="ml-36 mt-20">
                    <Logo />
                </div>
                <div className="ml-36 mt-28">
                    <div className="font-josefinSans bg-gradient-to-r from-red-200 to-rose-400 bg-clip-text text-transparent text-8xl font-light tracking-widest">
                        WE'RE
                    </div>
                <div className="text-stone-700 text-8xl font-normal tracking-widest flex-col font-josefinSans">
                    COMING
                </div>
                <div className="text-stone-700 text-8xl font-normal tracking-widest flex-col font-josefinSans">
                    SOON
                </div>

                    <div className="flex flex-col w-3/5">
                    <p className="font-josefinSans mt-6 bg-gradient-to-r from-red-300 to-rose-400 bg-clip-text text-transparent">
                    Hello fellow shoppers! We're currently building our new fashion store. 
                    Add your email below to stay up-to-date with announcements and our launch deals.
                </p>
                
                <div className="mt-6 flex items-center justify-center">
                <input className="w-full text-xl font-josefinSans p-2 placeholder:p-12 bg-transparent border-2 rounded-full border-red-300 flex items-center justify-center"
                placeholder="Email Address"/>
                {/* Need to stylize the button */}
                <button className="bg-gradient-to-r from-red-200 to-rose-300 px-8 p-3 rounded-full relative right-20 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
                </button>
                </div>
                    </div>

                </div>
            </div>
            <div className="col-span-4">
                <img src={girl} className="h-screen w-full"/>
            </div>
        </div>
    </>
}