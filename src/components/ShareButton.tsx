"use client";
import React from "react";
import { Button } from "./ui/button";
import { Share } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";

type Props = {
  noteId: number;
};

const ShareButton = ({ noteId }: Props) => {
    const router = useRouter();
    const shareNote = useMutation({
      mutationFn: async () => {
        const response = await axios.post("/api/shareNoteBook", {
          noteId,
        });
        return response.data;
      },
    });
  
    const handleShareClick = async () => {
      try {
        const result = await shareNote.mutateAsync();
        if (result.link) {
          // Aqui você pode exibir o link partilhável, por exemplo, em uma modal
          alert(`Link partilhável: ${result.link}`);
        } else {
          console.error('Erro ao obter link partilhável.');
        }
      } catch (error) {
        console.error('Erro ao solicitar link partilhável:', error);
      }
    };
  
    return (
      <Button
        variant="outline"
        size="sm"
        disabled={shareNote.isLoading}
        onClick={handleShareClick}
      >
        <Share />
      </Button>
    );
  };
  
  export default ShareButton;