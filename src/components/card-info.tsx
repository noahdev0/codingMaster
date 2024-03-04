import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import axios from "axios";
import { useEffect, useState } from "react";

export default function CardInfo({ className }: { className: string }) {
  const [infos, setInfos] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const getInfo = async () => {
      try {
        const response = await axios("/api/infos");
        setInfos(response.data);
      } catch (error: any) {
        console.error(error);
        setError(error.response.data);
      }
    };
    getInfo();
  }, []);

  const info = {
    id: 320291382020,
    uuid: "f8ad6837-5b8e-4a51-9642-802c4bec3f3e",
    nin: "202032029138",
    matricule: "32029138",
    nomAr: "بن سلطانة",
    prenomAr: "أبوبكر أيمن",
    nomFr: "بن سلطانة",
    prenomFr: "أبوبكر أيمن",
    dateNaissance: "2003-02-05T00:00:00.000+01:00",
    moyenneBac: "13.13",
    refCodeWilayaBac: "09",
    refCodeSerieBac: "N04",
    libelleSerieBac: "MATHEMATIQUES",
    anneeBac: "2020",
  };
  return (
    <Card className={className}>
      <CardHeader>
        <div className="space-y-2">
          <CardTitle className="text-lg font-semibold">
            {info.nomAr} {info.prenomAr}
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {info.nomFr} {info.prenomFr}
            </span>
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="text-sm">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <p className="text-xs font-semibold tracking-wide">Date of Birth</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {info.dateNaissance}
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-xs font-semibold tracking-wide">Average</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {info.moyenneBac}
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-xs font-semibold tracking-wide">Series</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {info.libelleSerieBac}
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-xs font-semibold tracking-wide">Year</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {info.anneeBac}{" "}
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-xs font-semibold tracking-wide">ID</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {info.id}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
