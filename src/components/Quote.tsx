import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import "../App.css";
import SvgFile from "../utils/SvgFile";

type QuoteApiResponse = {
  id: number;
  quote: string;
  author: string;
};

const Quote = () => {
  const [quote, setQuote] = useState<QuoteApiResponse | null>(null);
  const [refresh, setRefresh] = useState<boolean>(false);
  useEffect(() => {
    const fecthData = async () => {
      const api = await fetch(`https://dummyjson.com/quotes/random`);
      const data: QuoteApiResponse = await api.json();
      setQuote(data);
    };
    fecthData();
  }, [refresh]);

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  return !quote || quote == null ? (
    <div>
      <h1 className="flex justify-center items-center min-h-svh">
        <svg
          className="animate-spin size-32"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e3e3e3"
        >
          <path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z" />
        </svg>
      </h1>
    </div>
  ) : (
    <div className="min-h-svh flex flex-col">
      <h1 className="Honk text-8xl text-center mt-10">Mindful Thought</h1>
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        {quote && (
          <div key={quote.id}>
            <h2 className="poppins text-2xl mb-5">` {quote.quote} `</h2>
            <div>
              <h1 className="Bricolage-Grotesque text-4xl">- {quote.author}</h1>
            </div>
          </div>
        )}
        <div className=" ">
          <Button
            className="outlined border-2 mt-5 text-lg"
            onClick={handleRefresh}
          >
            New Quote
            <span className="flex justify-center items-center">
              <SvgFile />
            </span>
          </Button>
        </div>
      </div>

      <div className="text-center mb-48">
        <h2>
          Made by{" "}
          <a
            href="https://github.com/vijaynaidu16"
            target="_blank"
            className="underline"
          >
            Vijay
          </a>
          ❤️‍🔥
        </h2>
      </div>
    </div>
  );
};

export default Quote;

// https://api.quotable.io/random
