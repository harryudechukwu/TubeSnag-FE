import React, { useState } from "react";

export default function Download(): JSX.Element {
  const [downloadType, setDownloadType] = useState("single");

  const handleDownloadType = (type: string) => {
    setDownloadType(type);
  };

  return (
    <div
      className="mx-auto my-10 flex max-w-[900px] flex-col items-center
            justify-center
            gap-8
            
            "
    >
      <div className="flex items-center justify-center gap-4">
        <div>
          <button
            className={`rounded-full border px-4 
                    py-2
                    ${
                      downloadType === "single"
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
            className={`rounded-full border px-4 py-2
                        ${
                          downloadType === "batch"
                            ? "border-[#845eee94]"
                            : "border-gray-300"
                        }
                        `}
            onClick={() => handleDownloadType("batch")}
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
        <h2 className="text-center text-lg font-medium">Download a single video.
          
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
                        focus:border-[#845eee94]
                        focus:outline-transparent"
          onChange={handleYoutubeLink}
        />
      </div>

      <div>
        <button
          className="rounded-md border border-gray-300 bg-gradient-to-br from-[#C70AF6]
                        to-[#3D00EC]
                        px-8

                        py-2
                        font-semibold
                        text-white
                        sm:px-16
                        md:px-20

                        "
        >
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
    <form onSubmit={handleSubmit}>
      <div
        className="mb-4 w-full px-4"
      >
        <h2 className="text-center text-lg font-medium">Download multiple videos
          {"  "}
        <span
        className="text-[#3500c794] underline"
        >
            (max 4)
        </span>
        .
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        {youtubeLinks.map((input, index) => (
          <div className="w-full px-4" key={index}>
            <input
              type="url"
              required
              placeholder="Paste your youtube video link here."
              className="w-full rounded-md border border-gray-300 p-4 text-lg font-medium focus:border-[#845eee94] focus:outline-transparent"
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
          className="rounded-md border border-gray-300 bg-gradient-to-br from-[#C70AF6] to-[#3D00EC] px-8 py-2 font-semibold text-white sm:px-16 md:px-20"
        >
          Fetch Video
        </button>
      </div>
    </form>
  );
};
