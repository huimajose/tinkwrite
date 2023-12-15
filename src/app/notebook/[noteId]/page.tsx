
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
        <div className="border shadow-xl border-stone-200 rounded-lg p-4 flex items-center">
          <Link href="/dashboard">
            <Button className="bg-green-600" size="sm">
              Voltar
            </Button>
          </Link>
          <div className="w-3"></div>
          <span className="font-semibold">
           
          </span>
          <span className="inline-block mx-1"></span>
          <span className="text-stone-500 font-semibold"></span>
          <div className="ml-auto">
            <DeleteButton noteId={note.id} />
            
          </div>
          <div className="ml-2">
          
            <ShareButton noteId={note.id} />
          </div>
          <div className="ml-2">
          
          <ExportButton noteId={note.id} />
        </div>
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
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Editar</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Undo <MenubarShortcut>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Find</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Search the web</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Find...</MenubarItem>
              <MenubarItem>Find Next</MenubarItem>
              <MenubarItem>Find Previous</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>Cut</MenubarItem>
          <MenubarItem>Copy</MenubarItem>
          <MenubarItem>Paste</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
          <MenubarCheckboxItem checked>
            Always Show Full URLs
          </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem inset>
            Reload <MenubarShortcut>⌘R</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled inset>
            Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Toggle Fullscreen</MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Hide Sidebar</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Profiles</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value="benoit">
            <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
            <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
            <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarItem inset>Edit...</MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Add Profile...</MenubarItem>
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
