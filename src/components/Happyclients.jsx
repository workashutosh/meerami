import our from '../images/our_clients.webp';
import c1 from '../images/c1.webp';
import c2 from '../images/c2.webp';
import c3 from '../images/c3.webp';
import c4 from '../images/c4.webp';
import c5 from '../images/c5.webp';
import c6 from '../images/c6.webp';
import c7 from '../images/c7.webp';


const Happyclients = () => {
    return (
        <div className="bg-[#a6a6a6] p-4">
            <img src={our} alt="our" className='pt-3 max-w-[200px] mx-auto' />
            <div className="flex flex-wrap justify-center gap-12 mt-4">
                <img src={c1} alt="client 1" className="m-2 max-w-[150px] flex-1" />
                <img src={c2} alt="client 2" className="m-2 max-w-[150px] flex-1" />
                <img src={c3} alt="client 3" className="m-2 max-w-[150px] flex-1" />
                <img src={c4} alt="client 4" className="m-2 max-w-[150px] flex-1" />
                <img src={c5} alt="client 5" className="m-2 max-w-[150px] flex-1" />
                <img src={c6} alt="client 6" className="m-2 max-w-[150px] flex-1" />
                <img src={c7} alt="client 6" className="m-2 max-w-[150px] flex-1" />

            </div>
        </div>
    );
};

export default Happyclients;
