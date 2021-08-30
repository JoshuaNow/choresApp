import * as React from "react";
import Header from "../components/header";

// TODO:
// Users that get assigned chores.
// Create a user object with user info.
// Use the user object to create drop downs and assign users tasks.
// Component that shows individual user tasks.

const Create = () => {
  const [listTitle, setListTitle] = React.useState("");
  const [finalListTitle, setFinalListTitle] = React.useState("");
  const [chores, setChores] = React.useState("");
  const [testText, setTestText] = React.useState("test");
  const [finalChoreList, setFinalChoreList] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTestText("SUBMITTED");
    setFinalListTitle(listTitle);
    setFinalChoreList(chores);
    setChores("");
    setListTitle("");
  };

  const handleClear = (e) => {
    e.preventDefault();
    setIsSubmitting(false);
  };

  //   React.useEffect(() => {
  //     console.log({ isSubmitting });
  //   }, [isSubmitting]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Header />
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        {!isSubmitting ? (
          <>
            <h1 className="text-xl font-bold">Create a chore list!</h1>
            <form className="flex flex-col">
              <label className="text-xl">
                Title:
                <input
                  type="text"
                  value={listTitle}
                  onChange={(e) => setListTitle(e.target.value)}
                  className="border-2 border-gray-50 mb-2"
                />
              </label>

              <label>
                Chore Item:{" "}
                <input
                  type="text"
                  value={chores}
                  onChange={(e) => setChores(e.target.value)}
                  className="border-2 border-gray-50 mb-2"
                />
              </label>

              <button
                type="submit"
                onClick={handleSubmit}
                className="border-2 border-gray-50 mb-2 bg-blue-300"
              >
                Submit
              </button>
            </form>
          </>
        ) : (
          <>
            <h1 className="text-2xl text-blue-600">Your New Chore List:</h1>
            <h1 className="text-xl capitalize">{finalListTitle}</h1>
            <ul>
              <li className="list-disc">{finalChoreList}</li>
            </ul>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setIsSubmitting(false);
              }}
            >
              CLEAR LIST
            </button>
          </>
        )}
      </main>
    </div>
  );
};

export default Create;
