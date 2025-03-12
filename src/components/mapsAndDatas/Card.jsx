import React from 'react';


const Card = ({ data, isExpanded, toggleReadMore }) => {
    const maxWords = 15;
    const contentPreview = data.content.split(' ').slice(0, maxWords).join(' ') + (data.content.split(' ').length > maxWords ? '...' : '');
    return (
        <div className='flex flex-col border-2 bg-gray-100 p-4 rounded-md w-full'>
            <img className='w-24 h-24 mx-auto mb-1' src={data.imgsrc} alt="map.png" />
            <p className='text-xl font-bold text-[#b20000]'>{data.title}</p>
            <p className='text-sm font-medium text-justify flex-grow font-parkinsans mt-2'>
                {isExpanded ? data.content : contentPreview}
                {data.content.split(' ').length > maxWords && (
                    <button onClick={() => toggleReadMore(data.id)} className='text-[#0c315b] italic text-[12px]'>  {isExpanded ? '(Show Less)' : '(Read More)'}</button>
                )}
            </p>
        </div>
    );
}

export default Card