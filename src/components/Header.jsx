import bg from '../images/bg.webp';
import headerImage from '../images/headerimage.webp';
import Button from './Button';


const Header = () => {
  return (
    <div
    className="min-h-screen relative flex items-center justify-center py-8"
    style={{
      backgroundImage: `url(${bg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
    }}
  >
    {/* Overlay for the image */}
    <div className="absolute inset-0 bg-white bg-opacity-50 pointer-events-none"></div>
  
    {/* Content container */}
    <div className="relative z-10 container mx-auto px-4">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
        <div className=" p-8 max-w-[550px] text-center  sm:text-left">
          <img src={headerImage} alt="" className=' w-[2000px]' />
            <div className=' flex justify-center mt-4'>
            <Button name="Work with us" />
            </div>
          

        </div>
      </div>
    </div>
  </div>
  

  );
};

export default Header;
