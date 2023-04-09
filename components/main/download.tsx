
import React, { useState } from "react";
import Image from "next/image";

export default function Download(): JSX.Element {
  const [downloadType, setDownloadType] = useState("single");

  const handleDownloadType = (type: string) => {
    setDownloadType(type);
  };

  return (
    <div
      className="mx-auto my-20 flex max-w-[900px] flex-col items-center
            justify-center
            gap-8 
            "
    >
      <div className="flex items-center justify-center gap-4">
        <div>
          <button
            className={`rounded-full border px-4 
                    py-2
                    ${downloadType === "single"
                ? "border-[#845eee94]"
                : "border-gray-300"
              }
                    `}
            onClick={() => handleDownloadType("single")}
          >
            Single Download
          </button>
        </div>
        <div>
          <button
            className={`relative rounded-full border px-4 py-2
           
                        ${downloadType === "batch"
                ? "border-[#845eee94]"
                : "border-transparent"
              }
                        `}
            onClick={() => handleDownloadType("batch")

            }
            // disabled
          >
            Batch Download
            <span
              className="absolute 
              top-[-10px]
            right-[-10px]
            rounded-md
            bg-[#F3E3F7]
            p-1
            text-xs
            font-medium
            text-[#C70AF6]
           
            "
            >
              NEW
            </span>
          </button>
        </div>
      </div>
      <div
        className="
                w-full
                "
      >
        {downloadType === "single" ? (
          <SingleDownloadForm />
        ) : (
          <BatchDownloadForm />
        )}
      </div>
    </div>
  );
}

const SingleDownloadForm = () => {
  const [youtubeLink, setYoutubeLink] = useState("");

  const handleYoutubeLink = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYoutubeLink(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(youtubeLink);
  };

  return (
    <form
      action=""
      className="flex flex-col items-center justify-center gap-4"
      onSubmit={handleSubmit}
    >
      <div
        className="mb-2 w-full px-4"
      >
        <div
          className="flex items-center justify-center gap-4"
        >
          <div
            className="rounded-md bg-[#F8E1FE] p-2"
          >
            <Image src='/images/single.png' height={45} width={45} alt="batch" />
          </div>


        </div>
        <h2 className="text-center text-lg font-medium">
          Single download supports one video at a time.
        </h2>
      </div>
      <div
        className="
                    w-full
                    px-4
                    "
      >
        <input
          type="url"
          required
          placeholder="Paste your youtube video link here."
          className="w-full rounded-md border border-gray-300 p-4
                        text-lg
                        font-medium
                        shadow-[3px_rgb(0,0,0,0.2)]
                        focus:border-[#845eee94]
                        
                        focus:outline-transparent
                        "
          onChange={handleYoutubeLink}
        />
      </div>

      <div>
        <button
          className="rounded-md border border-gray-300 bg-[#3D00EC]
                        px-20
                      
                        py-4
                        font-medium
                        text-white
                         sm:px-32 md:px-40">
          Fetch Video
        </button>
      </div>
    </form>
  );
};

const BatchDownloadForm = () => {
  const [youtubeLinks, setYoutubeLinks] = useState([""]);

  const handleInputChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const values = [...youtubeLinks];
    values[index] = event.target.value;
    setYoutubeLinks(values);
  };

  const handleAddInput = () => {
    if (youtubeLinks.length < 4) {
      setYoutubeLinks([...youtubeLinks, ""]);
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
    <form onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center gap-4"
    >
      <div
        className="mb-2 w-full px-4"
      >
        <div
        className="flex items-center justify-center gap-4"
        >
          <div
            className="rounded-md bg-[#F8E1FE] p-2"
          >
            <Image src='/images/batch.png' height={45} width={45} alt="batch" />
          </div>

       
        </div>
        <h2 className="my-3 text-center text-sm font-medium">
          Batch download currently supports 3 video max.
        </h2>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-4">
        {youtubeLinks.map((input, index) => (
          <div className="w-full px-4" key={index}>
            <input
              type="url"
              required
              placeholder="Paste your youtube video link here."
              className="w-full rounded-md border border-gray-300 p-4
                        text-lg
                        font-medium
                        focus:border-[#845eee94]
                        focus:outline-transparent"
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
          className="rounded-md border border-gray-300 bg-[#3D00EC]
                        px-20
                        py-4
                        font-medium
                        text-white
                        sm:px-32
                        md:px-40

                        "
        >
          Fetch Video
        </button>
      </div>
    </form>
  );
};
