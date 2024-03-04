import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";

export default function Groupes() {
  const data = [
    {
      id: 10851480,
      groupePedagogiqueId: 221354,
      nomGroupePedagogique: "Section 1",
      dateAffectation: "2021-02-25T00:00:00.000+01:00",
      periodeId: 14,
      periodeCode: "S5",
      periodeLibelleLongLt: "Semestre 5",
    },
    {
      id: 10973115,
      groupePedagogiqueId: 228110,
      nomGroupePedagogique: "Groupe 04",
      nomSection: "Section 1",
      dateAffectation: "2021-03-03T00:00:00.000+01:00",
      periodeId: 14,
      periodeCode: "S5",
      periodeLibelleLongLt: "Semestre 5",
    },
    {
      id: 12321447,
      groupePedagogiqueId: 270923,
      nomGroupePedagogique: "Section 1",
      dateAffectation: "2021-05-17T01:00:00.000+02:00",
      periodeId: 15,
      periodeCode: "S6",
      periodeLibelleLongLt: "Semestre 6",
    },
    {
      id: 12369923,
      groupePedagogiqueId: 270933,
      nomGroupePedagogique: "Groupe 04",
      nomSection: "Section 1",
      dateAffectation: "2021-05-18T01:00:00.000+02:00",
      periodeId: 15,
      periodeCode: "S6",
      periodeLibelleLongLt: "Semestre 6",
    },
  ];
  return (
    <div>
      {data.map((item) => (
        <Card key={item.id} className="my-5">
          <CardHeader>
            <div className="space-y-2">
              <CardTitle className="text-lg font-semibold">
                {item.nomGroupePedagogique} - {item.nomSection}
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {item.periodeLibelleLongLt}
                </span>
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-sm">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <p className="text-xs font-semibold tracking-wide">
                  Date of Assignment
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {item.dateAffectation}
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-xs font-semibold tracking-wide">Period ID</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {item.periodeId}
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-xs font-semibold tracking-wide">
                  Period Code
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {item.periodeCode}
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-xs font-semibold tracking-wide">
                  Long Period Label
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {item.periodeLibelleLongLt}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
