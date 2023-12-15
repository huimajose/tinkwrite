
import DeleteButton from "@/components/DeleteButton";
import ShareButton from "@/components/ShareButton";
import ExportButton from "@/components/ExportButton";
import TipTapEditor from "@/components/TipTapEditor";
import { Button } from "@/components/ui/button";
import { clerk } from "@/lib/clerk-server";
import { db } from "@/lib/db";
import { $notes } from "@/lib/db/schema";
import { auth } from "@clerk/nextjs";
import { and, eq } from "drizzle-orm";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { createClient } from '@supabase/supabase-js'
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"

type Props = {
  params: {
    noteId: string;
  };
};

const NotebookPage = async ({ params: { noteId } }: Props) => {
  const { userId } = await auth();

  //const user = await clerk.users.getUser(userId);

  const supabase = createClient('https://iehsmuxjlrzfwordijiy.supabase.co','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllaHNtdXhqbHJ6ZndvcmRpaml5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEzMzkzNjcsImV4cCI6MjAxNjkxNTM2N30.8hmf2igDjxqcd6WH0LgxLhhzp1z5ll4TZ1hTEiKYRYM');
  const { data: notes } = await supabase.from("notes").select().eq('id',noteId);


  if (notes?.length != 1) {
    return redirect("/dashboard");
  }
  const note = notes[0];

  const handleShareButtonClick = () => {
    // Lógica para partilhar a nota
    // Por exemplo, abrir um modal com um link partilhável
    alert("Nota partilhada! Implemente a lógica real aqui.");
  };

  const handleExportButtonClick = () => {
    // Lógica para exportar a nota
    // Por exemplo, gerar um arquivo para download
    alert("Nota exportada! Implemente a lógica real aqui.");
  };


  return (
    <div className="min-h-screen grainy p-8">
      <div className="max-w-4xl mx-auto">
        <div className=" shadow-xl  p-4 flex items-center">      
        <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Ficheiro</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
           Nova aba <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Nova janela <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled>Janela privada</MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Partilhar</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>link</MenubarItem>
              <MenubarItem>Mensagens</MenubarItem>
              <MenubarItem>Notas</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            Imprimir... <MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem>
        
          <Link href="/dashboard">
          <MenubarItem>
          Sair<MenubarShortcut>⌘esc</MenubarShortcut>
          </MenubarItem>
          </Link>

          
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Editar</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            desfazer <MenubarShortcut>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Refazer <MenubarShortcut>⇧⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Encontrar</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Buscar na web</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Encontrar...</MenubarItem>
              <MenubarItem>Encontrar Seguinte</MenubarItem>
              <MenubarItem>Encontrar anterior</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>Cortar</MenubarItem>
          <MenubarItem>Copiar</MenubarItem>
          <MenubarItem>Colar</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>ver</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem>Mostrar sempre marcador</MenubarCheckboxItem>
          <MenubarCheckboxItem checked>
           Mostrar sempre url completa
          </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem inset>
            Recarregar <MenubarShortcut>⌘R</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled inset>
            Forçar recarregar <MenubarShortcut>⇧⌘R</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Ecrã completo</MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Esconder</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    
    </Menubar>

        </div>

        <div className="h-4"></div>
        <div className="border-stone-200 shadow-xl border rounded-lg px-16 py-8 w-full">
          <TipTapEditor note={note} />
        </div>
      </div>
    </div>
  );
};

export default NotebookPage;
