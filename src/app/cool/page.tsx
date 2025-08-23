export default function Kewl() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-primary text-white gap-5">
      {/* 
      Write something unique about you here! 
      It could be a club you're part of, a weird skill you have, or something special that happened to you.
      Feel free to put links, images, whatever! 
      Don't worry about styling- we aren't grading you on this- it's just to get to know you better! :) 
      */}

<div  className="flex w-[15rem] relative justify-center group drop-shadow-lg [&>*]:transition-all [&>*]:duration-300 [&>*]:ease-in-out">
      <div className='w-full h-[13.5rem] bg-black group-hover:-top-[5px] group-hover:-right-[5px] top-[5px] right-[5px] absolute block rounded-[1em]'></div>
    <div className="flex flex-col min-w-full h-[13.5rem] relative rounded-b-[0.85rem] rounded-t-[1rem]  border-2 border-black bg-white">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8VO71hNPZNS0b3IHm7wA3KHToOyHePo6GDg&s" className="object-cover max-h-[45%] rounded-t-[0.85rem]"/>
        <div className="flex flex-col text-left pt-4 pb-4 pl-5 pr-6">
            <div className="text-black font-[700] text-[1.20rem] leading-none tracking-tight">I'm Rami  👋</div>
            <div className="mt-3 my-auto text-[0.9rem] font-[400] line-clamp-3 leading-4 text-[#3C4043]">I'm a big fan of neobrutalism UI, and I like building web apps.</div>
        </div>
    </div>
</div>
    </div>
  );
}
