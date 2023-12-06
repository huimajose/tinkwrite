"use client";
import React from "react";
import { Button } from "./ui/button";
import { FileDown } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";

type Props = {
  noteId: number;
};


const ExportButton = ({ noteId }: Props) => {
    const router = useRouter();
    const deleteNote = useMutation({
      mutationFn: async () => {
        const response = await axios.post("/api/deleteNote", {
          noteId,
        });
        return response.data;
      },
    });
    return (
      <Button
        variant={"outline"}
        size="sm"
        disabled={deleteNote.isLoading}
        onClick={() => {
          const confirm = window.confirm(
            "Certeza que quer apagar esse apontamento?"
          );
          if (!confirm) return;
          deleteNote.mutate(undefined, {
            onSuccess: () => {
              router.push("/dashboard");
            },
            onError: (err) => {
              console.error(err);
            },
          });
        }}
      >
        <FileDown />
      </Button>
    );
  };
  

export default ExportButton