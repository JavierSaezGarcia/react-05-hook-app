import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "./";



export const MultipleCustomHooks = () => {

  const { counter, increment, reset } = useCounter(1);

  const { data, isLoading } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];
  
  const getNextQuote = () => {
    (counter >= 5) ? reset() : increment(1);
  };


  return (
    <>
      <div className="container">
        <div className="row">
          <h1>Breaking Bad quotes</h1>
          <hr />
          {
            isLoading
              ? <LoadingQuote />
              : <Quote
                author={author}
                quote={quote}
              />
          }
          <div className="col-md-2">
            <button className="btn btn-primary" onClick={getNextQuote} disabled={isLoading}>
              Next Quote
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

