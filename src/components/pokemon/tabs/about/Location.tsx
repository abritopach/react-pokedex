interface LocationProps {
    color: string;
}

const Location = ({color}: LocationProps) => {
    const stylelocation = {
        backgroundColor: `${color}`,
    };
    return (
        <article className='my-2 text-base'>
            <h3 className='font-bold pt-4'>Location</h3>
            <button
                className='w-full md:h-36 h-24 rounded-xl my-3 cursor-pointer hover:blur-sm'
                style={stylelocation}
            ></button>
        </article>
    );
};

export default Location;