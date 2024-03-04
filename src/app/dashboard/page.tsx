"use client";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import axios from "axios";
import MaxWidthWraper from "@/components/shared/MaxWidthWrapper";
import CardInfo from "@/components/card-info";

export function Dashboard() {
  const [note, setNote] = useState([]); // 1. Create a state to store the notes
  useEffect(() => {
    const getNotes = async () => {
      try {
        const response = await axios("/api/notes");
        setNote(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getNotes();
  }, []);
  const testingList = [
    { note: 13.5, refCodeMatiereLibelleFr: "ANGLAIS" },
    { note: 12.0, refCodeMatiereLibelleFr: "FRANÇAIS" },
    { note: 12.0, refCodeMatiereLibelleFr: "HISTOIRE_GEOGRAPHIE" },
    { note: 16.0, refCodeMatiereLibelleFr: "LITTERATURE_ARABE" },
    { note: 15.5, refCodeMatiereLibelleFr: "MATHEMATIQUE" },
    { note: 10.5, refCodeMatiereLibelleFr: "PHILOSOPHIE" },
    { note: 11.5, refCodeMatiereLibelleFr: "PHYSIQUE" },
    { note: 14.5, refCodeMatiereLibelleFr: "SCIENCE_ISLAMIQUE" },
    { note: 7.0, refCodeMatiereLibelleFr: "SNV" },
  ];
  testingList.forEach((note) => {
    note.refCodeMatiereLibelleFr = note.refCodeMatiereLibelleFr.replace(
      "_",
      " "
    );
  });

  return (
    <>
      <CardInfo className="my-4" />
      <Card key="1">
        <CardHeader>
          <CardTitle>Bac Notes</CardTitle>
          <select>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
          </select>
        </CardHeader>
        <CardContent className="p-0">
          <Table className="divide-y p-5">
            <TableHeader>
              <TableRow>
                <TableHead className="w-0.5">ID</TableHead>
                <TableHead>Module</TableHead>
                <TableHead>Note</TableHead>
                <TableHead className="text-right w-20" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {testingList.map(
                (
                  module: {
                    note: number;
                    refCodeMatiereLibelleFr: string;
                  },
                  index
                ) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{module.refCodeMatiereLibelleFr}</TableCell>
                    <TableCell>{module.note}</TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
export default Dashboard;
