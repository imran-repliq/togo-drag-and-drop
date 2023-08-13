"use client";

import { useEffect } from "react";

import APIKit from "../../shared/APIkit";
import { useQuery } from "@tanstack/react-query";

import { Bars2Icon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
// import { ScrollArea } from "@radix-ui/react-scroll-area";
import { ScrollArea } from "@/components/ui/scroll-area";
import toast from "react-hot-toast";

import ContainerLayout from "../../components/ContainerLayout/ContainerLayout";

export default function Home() {
  const {
    data: todosData,
    isLoading: todoIsLoading,
    refetch,
  } = useQuery({
    queryKey: ["/todo"],
    queryFn: () => APIKit.globalTodo().then(({ data }) => data),
  });

  const handleSubmitTodo = (e) => {
    e.preventDefault();
    const todoText = e.target.todoText.value;
    const todoData = {
      text: todoText,
    };

    const addTodo = fetch("https://api-creator-server.vercel.app/todo-add", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(todoData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.promise(addTodo, {
          loading: "Saving...",
          success: "Successfully Saved",
          error: "Something went wrong...",
        });
        refetch();
        return data;
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        toast.error("An error occurred while saving.");
      });

    e.target.reset();
    console.log(todoText);
  };

  if (todoIsLoading) {
    return <h1>Loading...</h1>;
  }

  console.log(todosData);

  return (
    <ContainerLayout>
      <div className="w-3/6 mx-auto flex flex-col gap-10">
        <form className="w-full flex gap-3" onSubmit={handleSubmitTodo}>
          <Input type="text" name="todoText" placeholder="Ex: work from home" />
          <Button type="submit">Button</Button>
        </form>
        <div className="flex gap-4">
          <div className="w-full">
            <Card className="w-full h-96">
              <ScrollArea className="h-96">
                <CardContent className="p-4">
                  {[...todosData].reverse().map((todo) => (
                    <div
                      key={todo._id}
                      className="flex gap-4 border my-3 p-2 rounded-md"
                    >
                      <span>
                        <Bars2Icon className="w-6 h-6 text-gray-300" />
                      </span>
                      <p>{todo.text}</p>
                    </div>
                  ))}
                </CardContent>
              </ScrollArea>
            </Card>
          </div>
          <div className="w-full">
            <Card className="w-full h-96">
              <ScrollArea className="h-96">
                <CardContent></CardContent>
              </ScrollArea>
            </Card>
          </div>
        </div>
      </div>
    </ContainerLayout>
  );
}
