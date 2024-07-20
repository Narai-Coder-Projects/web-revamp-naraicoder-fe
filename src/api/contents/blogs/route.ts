import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const sampleBlogPosts = [
    {
      imgUrl: "/card-panel-left-1.png",
      title: "long established",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that...",
      date: "May 20th 2020",
      destUrl: "/#",
      alt: "card"
    },
    {
      imgUrl: "/card-panel-left-2.png",
      title: "long established",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that...",
      date: "May 20th 2020",
      destUrl: "/#",
      alt: "card"
    },
    {
      imgUrl: "/card-panel-left-3.png",
      title: "long established",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that...",
      date: "May 20th 2020",
      destUrl: "/#",
      alt: "card"
    },
    {
      imgUrl: "/card-panel-left-1.png",
      title: "long established",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that...",
      date: "May 20th 2020",
      destUrl: "/#",
      alt: "card"
    },
    {
      imgUrl: "/card-panel-left-2.png",
      title: "long established",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that...",
      date: "May 20th 2020",
      destUrl: "/#",
      alt: "card"
    },
    {
      imgUrl: "/card-panel-left-3.png",
      title: "long established",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that...",
      date: "May 20th 2020",
      destUrl: "/#",
      alt: "card"
    }
  ];
  return NextResponse.json(sampleBlogPosts);
}
