"use client";

import { Input } from "@/components/ui/input";
import ContainerLayout from "../components/ContainerLayout/ContainerLayout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import toast from "react-hot-toast";
import { ScrollArea } from "@radix-ui/react-scroll-area";

export default function Home() {
  const handleSubmitTodo = (e) => {
    e.preventDefault();
    const todoText = e.target.todoText.value;
    const todoData = {
      text: todoText,
    };
    //   return toast.promise(saveSettings(settings), {
    //     loading: "Saving...",
    //     success: "Successfully Saved",
    //     error: "Something went wrong...",
    //   });
    // }

    const addTodo = fetch("http://localhost:5000/todo-add", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(todoData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (typeof window !== "undefined") {
          toast.promise(addTodo, {
            loading: "Saving...",
            success: "Successfully Saved",
            error: "Something went wrong...",
          });
        }
        return data;
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        toast.error("An error occurred while saving.");
      });

    e.target.reset();
    console.log(todoText);
  };

  return (
    <ContainerLayout>
      <div className="w-3/6 mx-auto flex flex-col gap-10">
        <form className="w-full flex gap-3" onSubmit={handleSubmitTodo}>
          <Input type="text" name="todoText" placeholder="Ex: work from home" />
          <Button type="submit">Button</Button>
        </form>
        <div className="flex gap-4">
          <div className="w-full">
            <ScrollArea className="h-96">
              <Card className="w-full h-96">
                <CardContent></CardContent>
              </Card>
            </ScrollArea>
          </div>
          <div className="w-full">
            <ScrollArea className="h-96">
              <Card className="w-full h-96">
                <CardContent></CardContent>
              </Card>
            </ScrollArea>
          </div>
        </div>
      </div>
    </ContainerLayout>
  );
}
