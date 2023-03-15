import React, {useState} from 'react'


export default function Download(): JSX.Element {

    const [downloadType, setDownloadType] = useState('single');

    const handleDownloadType = (type: string) => {
        setDownloadType(type);
    }



    return (
        <div
            className="flex flex-col items-center justify-center gap-8 max-w-[900px]
            mx-auto
            my-20
            
            "
        >
            <div
            className='flex items-center justify-center gap-4'
            >
                <div
                 >
                    <button
                    className={`rounded-full px-4 py-2 
                    border
                    ${downloadType === 'single' ? 'border-[#845eee94]' : 'border-gray-300'}
                    `}
                    onClick={() => handleDownloadType('single')}
                    >
                        Single Download
                    </button>
                </div>
                <div
                
                >
                    <button
                        className={`rounded-full px-4 py-2 border
                        ${downloadType === 'batch' ? 'border-[#845eee94]' : 'border-gray-300'}
                        `}
onClick={() => handleDownloadType('batch')}
                    >
                        Batch Download
                    </button>
                </div>
            </div>
            <div
                className="
                w-full
                "

            >
                {downloadType === 'single' ? <SingleDownloadForm /> : <BatchDownloadForm />}

                </div>


           
        </div>
    )
}




const SingleDownloadForm = () => {

    const [youtubeLink, setYoutubeLink] = useState('');

    const handleYoutubeLink = (e: React.ChangeEvent<HTMLInputElement>) => {
        setYoutubeLink(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(youtubeLink);
    }

    return(

        
            <form action=""
                className="flex flex-col items-center justify-center gap-4"
           onSubmit={handleSubmit}
           >
                <div
                    className='
                    w-full
                    px-4
                    '
                >
                    <input type="text" placeholder="Paste your youtube video link here."
                        className="rounded-md px-4 py-4 border border-gray-300
                        w-full
                        focus:outline-transparent
                        focus:border-[#845eee94]
                        text-lg
                        font-medium
                 "
                        onChange={handleYoutubeLink}
                    />
                </div>

                <div>
                    <button
                        className="rounded-md px-8 py-2 border border-gray-300
                        md:px-20
                        sm:px-16

                        bg-gradient-to-br
                        from-[#C70AF6]
                        to-[#3D00EC]
                        text-white
                        font-semibold

                        "
                        
                    >
                        Fetch Video
                    </button>
                </div>


            </form>
     

    )
};



const BatchDownloadForm = () => {
    const [youtubeLinks, setYoutubeLinks] = useState(['']);

    const handleInputChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const values = [...youtubeLinks];
        values[index] = event.target.value;
        setYoutubeLinks(values);
    };

    const handleAddInput = () => {
        if (youtubeLinks.length < 4) {
            setYoutubeLinks([...youtubeLinks, '']);
        }
    };

    const handleRemoveInput = (index: number) => {
        const values = [...youtubeLinks];
        values.splice(index, 1);
        setYoutubeLinks(values);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(youtubeLinks);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center justify-center gap-4">
                {youtubeLinks.map((input, index) => (
                    <div className="w-full px-4" key={index}>
                        <input
                            type="text"
                            placeholder="Paste your youtube video link here."
                            className="rounded-md px-4 py-4 border border-gray-300 w-full focus:outline-transparent focus:border-[#845eee94] text-lg font-medium"
                            value={input}
                            onChange={(event) => handleInputChange(index, event)}
                        />
                        {youtubeLinks.length > 1 && (
                            <button type="button" onClick={() => handleRemoveInput(index)}>
                                Remove
                            </button>
                        )}
                    </div>
                ))}
                {youtubeLinks.length < 4 && (
                    <button type="button" onClick={handleAddInput}>
                        Add More
                    </button>
                )}
                <button
                    type="submit"
                    className="rounded-md px-8 py-2 border border-gray-300 md:px-20 sm:px-16 bg-gradient-to-br from-[#C70AF6] to-[#3D00EC] text-white font-semibold"
                >
                    Fetch Video
                </button>
            </div>
        </form>
    );
};

