import React from 'react';
import RightImage from '../assets/check.png';
import WrongImage from '../assets/no.png';
import LineImage from '../assets/long_line_bullet.svg'


const Analysis = () => {
  return (
    <div className='p-16 max-md:p-1 '>
        <div className="flex gap-2 max-md:justify-center py-2">
        <img src={LineImage} width={8}  alt="" />
          <h1 className="font-bold text-3xl max-md:text-center h2">Competitive Analysis</h1>
        </div>
        <p className='hidden max-md:block text-center py-2 text-xs'>The first row is all about the Competitors like competitor1, competitor2, competitor3 and so on..</p>
      <div className='grid grid-cols-6  max-md:gap-0'>
        
        <div className='bg-black text-white p-2 text-center max-md:hidden'><p className='max-md:text-xs max-md:p-0 max-md:truncate  max-md:hover:text-clip'></p> </div>
        <div className='bg-black text-white p-2 text-center max-md:hidden'><p className='max-md:text-xs max-md:p-0 max-md:truncate  max-md:hover:text-clip'>Competitor1</p> </div>
        <div className='bg-black text-white p-2 text-center max-md:hidden'><p className='max-md:text-xs max-md:p-0 max-md:truncate  max-md:hover:text-clip'>Competitor2</p> </div>
        <div className='bg-black text-white p-2 text-center max-md:hidden'><p className='max-md:text-xs max-md:p-0 max-md:truncate  max-md:hover:text-clip'>Competitor3</p> </div>
        <div className='bg-black text-white p-2 text-center max-md:hidden'><p className='max-md:text-xs max-md:p-0 max-md:truncate  max-md:hover:text-clip'>Competitor4</p> </div>
        <div className='bg-black text-white p-2 text-center max-md:hidden'><p className='max-md:text-xs max-md:p-0 max-md:truncate  max-md:hover:text-clip'>Competitor5</p> </div>


        <div className='bg-black text-white p-2 text-center hidden max-md:block'><p className='max-md:text-xs max-md:p-0 max-md:truncate  max-md:hover:text-clip'>Competitor</p> </div>
        <div className='bg-black text-white p-2 text-center hidden max-md:block'><p className='max-md:text-xs max-md:p-0 max-md:truncate  max-md:hover:text-clip'>One</p> </div>
        <div className='bg-black text-white p-2 text-center hidden max-md:block'><p className='max-md:text-xs max-md:p-0 max-md:truncate  max-md:hover:text-clip'>Two</p> </div>
        <div className='bg-black text-white p-2 text-center hidden max-md:block'><p className='max-md:text-xs max-md:p-0 max-md:truncate  max-md:hover:text-clip'>Three</p> </div>
        <div className='bg-black text-white p-2 text-center hidden max-md:block'><p className='max-md:text-xs max-md:p-0 max-md:truncate  max-md:hover:text-clip'>Four</p> </div>
        <div className='bg-black text-white p-2 text-center hidden max-md:block'><p className='max-md:text-xs max-md:p-0 max-md:truncate  max-md:hover:text-clip'>Five</p> </div>



        <div className=' p-2 text-center max-md:text-xs'>Trait1</div>
        <div className=' p-2 flex justify-center'><img src={RightImage} className='max-md:w-5' width={30} alt="" /></div>
        <div className=' p-2 flex justify-center'><img src={RightImage} className='max-md:w-5' width={30} alt="" /></div>
        <div className=' p-2 flex justify-center'><img src={RightImage} className='max-md:w-5' width={30} alt="" /></div>
        <div className=' p-2 flex justify-center'><img src={RightImage} className='max-md:w-5' width={30} alt="" /></div>
        <div className=' p-2 flex justify-center'><img src={RightImage} className='max-md:w-5' width={30} alt="" /></div>


        <div className=' p-2 text-center max-md:text-xs'>Trait2</div>
        <div className=' p-2 flex justify-center'><img src={RightImage} className='max-md:w-5' width={30} alt="" /></div>
        <div className=' p-2 flex justify-center'><img src={RightImage} className='max-md:w-5' width={30} alt="" /></div>
        <div className=' p-2 flex justify-center'><img src={RightImage} className='max-md:w-5' width={30} alt="" /></div>
        <div className=' p-2 flex justify-center'><img src={RightImage} className='max-md:w-5' width={30} alt="" /></div>
        <div className=' p-2 flex justify-center'><img src={RightImage} className='max-md:w-5' width={30} alt="" /></div>
        
        <div className=' p-2 text-center max-md:text-xs'>Trait3</div>
        <div className=' p-2 flex justify-center'><img src={RightImage} className='max-md:w-5' width={30} alt="" /></div>
        <div className=' p-2 flex justify-center'><img src={RightImage} className='max-md:w-5' width={30} alt="" /></div>
        <div className=' p-2 flex justify-center'><img src={RightImage} className='max-md:w-5' width={30} alt="" /></div>
        <div className=' p-2 flex justify-center'><img src={RightImage} className='max-md:w-5' width={30} alt="" /></div>
        <div className=' p-2 flex justify-center'><img src={WrongImage} className='max-md:w-5' width={30} alt="" /></div>
        
        <div className=' p-2 text-center max-md:text-xs'>Trait4</div>
        <div className=' p-2 flex justify-center'><img src={RightImage} className='max-md:w-5' width={30} alt="" /></div>
        <div className=' p-2 flex justify-center'><img src={RightImage} className='max-md:w-5' width={30} alt="" /></div>
        <div className=' p-2 flex justify-center'><img src={RightImage} className='max-md:w-5' width={30} alt="" /></div>
        <div className=' p-2 flex justify-center'><img src={WrongImage} className='max-md:w-5' width={30} alt="" /></div>
        <div className=' p-2 flex justify-center'><img src={RightImage} className='max-md:w-5' width={30} alt="" /></div>
        
        <div className=' p-2 text-center max-md:text-xs'>Trait5</div>
        <div className=' p-2 flex justify-center'><img src={RightImage} className='max-md:w-5' width={30} alt="" /></div>
        <div className=' p-2 flex justify-center'><img src={RightImage} className='max-md:w-5' width={30} alt="" /></div>
        <div className=' p-2 flex justify-center'><img src={RightImage} className='max-md:w-5' width={30} alt="" /></div>
        <div className=' p-2 flex justify-center'><img src={WrongImage} className='max-md:w-5' width={30} alt="" /></div>
        <div className=' p-2 flex justify-center'><img src={WrongImage} className='max-md:w-5' width={30} alt="" /></div>
        
        <div className=' p-2 text-center max-md:text-xs'>Trait6</div>
        <div className=' p-2 flex justify-center'><img src={WrongImage} className='max-md:w-5' width={30} alt="" /></div>
        <div className=' p-2 flex justify-center'><img src={WrongImage} className='max-md:w-5' width={30} alt="" /></div>
        <div className=' p-2 flex justify-center'><img src={WrongImage} className='max-md:w-5' width={30} alt="" /></div>
        <div className=' p-2 flex justify-center'><img src={WrongImage} className='max-md:w-5' width={30} alt="" /></div>
        <div className=' p-2 flex justify-center'><img src={RightImage} className='max-md:w-5' width={30} alt="" /></div>
        
        <div className=' p-2 text-center max-md:text-xs'>Trait7</div>
        <div className=' p-2 flex justify-center'><img src={WrongImage} className='max-md:w-5' width={30} alt="" /></div>
        <div className=' p-2 flex justify-center'><img src={RightImage} className='max-md:w-5' width={30} alt="" /></div>
        <div className=' p-2 flex justify-center'><img src={WrongImage} className='max-md:w-5' width={30} alt="" /></div>
        <div className=' p-2 flex justify-center'><img src={RightImage} className='max-md:w-5' width={30} alt="" /></div>
        <div className=' p-2 flex justify-center'><img src={WrongImage} className='max-md:w-5' width={30} alt="" /></div>
        
        <div className=' p-2 text-center max-md:text-xs'>Trait8</div>
        <div className=' p-2 flex justify-center'><img src={RightImage} className='max-md:w-5' width={30} alt="" /></div>
        <div className=' p-2 flex justify-center'><img src={RightImage} className='max-md:w-5' width={30} alt="" /></div>
        <div className=' p-2 flex justify-center'><img src={RightImage} className='max-md:w-5' width={30} alt="" /></div>
        <div className=' p-2 flex justify-center'><img src={WrongImage} className='max-md:w-5' width={30} alt="" /></div>
        <div className=' p-2 flex justify-center'><img src={RightImage} className='max-md:w-5' width={30} alt="" /></div>
        

      </div>
    </div>
  );
};

export default Analysis;
