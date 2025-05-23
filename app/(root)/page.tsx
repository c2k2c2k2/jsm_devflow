import { auth } from "@/auth";
import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilter from "@/components/filters/HomeFilter";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/route";
import { api } from "@/lib/api";
import handleError from "@/lib/handlers/error";
import Link from "next/link";
const questions = [
  {
    _id: "1",
    title: "How to use Next.js?",
    description: "I am new to Next.js and I want to know how to get started.",
    tags: [
      {
        _id: "1",
        name: "nextjs",
      },
      {
        _id: "2",
        name: "react",
      },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      image:
        "https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg",
    },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
  {
    _id: "2",
    title: "How to use js?",
    description: "I am new to Next.js and I want to know how to get started.",
    tags: [
      {
        _id: "1",
        name: "javascript",
      },
      {
        _id: "2",
        name: "react",
      },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      image:
        "https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg",
    },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
];
interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const Home = async ({ searchParams }: SearchParams) => {
  const session = await auth();

  console.log("session", session);

  const { query = "", filter = "" } = await searchParams;

  const filteredQuestions = questions.filter((question) => {
    const matchesQuery = question.title
      .toLowerCase()
      .includes(query?.toLowerCase());
    const matchesFilter = question.tags.some((tag) =>
      tag.name.toLowerCase().includes(filter?.toLowerCase()),
    );
    return matchesQuery && matchesFilter;
  });
  return (
    <>
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Button
          className="primary-gradient !text-light-900 min-h-[46px] px-4 py-3"
          asChild
        >
          <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch
          route={ROUTES.HOME}
          imgSrc="/icons/search.svg"
          placeholder="Search questions..."
          otherClasses="flex-1"
        />
      </section>
      <HomeFilter />
      <div className="mt-10 flex w-full flex-col gap-6">
        {filteredQuestions.map((question) => (
          <QuestionCard key={question._id} question={question} />
        ))}
      </div>
    </>
  );
};

export default Home;
