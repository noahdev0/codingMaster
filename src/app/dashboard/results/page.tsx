import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Results() {
  const data = [
    {
      id: 81545139,
      type: 1,
      periodeId: 15,
      periodeLibelleFr: "Semestre 6",
      periodeLibelleAr: "السداسي االسادس",
      bilanUes: [
        {
          id: 228456972,
          bilanSessionId: 81545139,
          repartitionUeId: 287287,
          ueLibelleFr: "I00F00001S6",
          ueCode: "I00F0001S6",
          ueType: "U.E.F",
          moyenne: 13.14,
          coefficient: 9.0,
          credit: 20.0,
          creditObtenu: 20.0,
          creditAcquis: 20.0,
          ueNatureLcFr: "U.E.F",
          ueNatureLcAr: "و.ت.أ",
          ueNatureCode: "U.E.F",
          bilanMcs: [
            {
              id: 461894259,
              bilanUeId: 228456972,
              bilanSessionId: 81545139,
              rattachementMcId: 517345,
              mcLibelleFr: "Relations publiques",
              mcLibelleAr: "العلاقات العامة",
              mcCode: "I00F0001S6004",
              coefficient: 2.0,
              credit: 5.0,
              creditObtenu: 5.0,
              moyenneGenerale: 11.5,
            },
            {
              id: 461894258,
              bilanUeId: 228456972,
              bilanSessionId: 81545139,
              rattachementMcId: 517340,
              mcLibelleFr: "Théories des médias et de la communication 2",
              mcLibelleAr: "نظريات الاعلام و الاتصال 2",
              mcCode: "I00F0001S6002",
              coefficient: 2.0,
              credit: 5.0,
              creditObtenu: 5.0,
              moyenneGenerale: 13.0,
            },
            {
              id: 461894257,
              bilanUeId: 228456972,
              bilanSessionId: 81545139,
              rattachementMcId: 517344,
              mcLibelleFr: "Techniques de communication",
              mcLibelleAr: "تقنيات الاتصال",
              mcCode: "I00F0001S6003",
              coefficient: 2.0,
              credit: 5.0,
              creditObtenu: 5.0,
              moyenneGenerale: 12.88,
            },
            {
              id: 461894254,
              bilanUeId: 228456972,
              bilanSessionId: 81545139,
              rattachementMcId: 517339,
              mcLibelleFr: "Communication organisationnelle",
              mcLibelleAr: "الاتصال التنظيمي",
              mcCode: "I00F0001S6001",
              coefficient: 3.0,
              credit: 5.0,
              creditObtenu: 5.0,
              moyenneGenerale: 14.5,
            },
          ],
          ueNoteObtention: 10.0,
          ueAcquis: false,
          totalAquis: 0,
          effectif: 0,
        },
        {
          id: 228456973,
          bilanSessionId: 81545139,
          repartitionUeId: 287288,
          ueLibelleFr: "I00M00001S6",
          ueCode: "I00M0001S6",
          ueType: "U.E.M",
          moyenne: 16.0,
          coefficient: 4.0,
          credit: 6.0,
          creditObtenu: 6.0,
          creditAcquis: 6.0,
          ueNatureLcFr: "U.E.M",
          ueNatureLcAr: "و.ت.م",
          ueNatureCode: "U.E.M",
          bilanMcs: [
            {
              id: 461894256,
              bilanUeId: 228456973,
              bilanSessionId: 81545139,
              rattachementMcId: 517333,
              mcLibelleFr:
                "Mémoire de fin d'études ou rapport d'étude de terrain spécialisé",
              mcLibelleAr: "مذكرة تخرج أو تقرير تربص ميداني متخصص",
              mcCode: "I00M0001S6006",
              coefficient: 2.0,
              credit: 3.0,
              creditObtenu: 3.0,
              moyenneGenerale: 17.0,
            },
            {
              id: 461894252,
              bilanUeId: 228456973,
              bilanSessionId: 81545139,
              rattachementMcId: 517335,
              mcLibelleFr: "Forum méthodologique 2",
              mcLibelleAr: "ملتقى المنهجية 2",
              mcCode: "I00M0001S6005",
              coefficient: 2.0,
              credit: 3.0,
              creditObtenu: 3.0,
              moyenneGenerale: 15.0,
            },
          ],
          ueNoteObtention: 10.0,
          ueAcquis: false,
          totalAquis: 0,
          effectif: 0,
        },
        {
          id: 228456974,
          bilanSessionId: 81545139,
          repartitionUeId: 287289,
          ueLibelleFr: "I00D00001S6",
          ueCode: "I00D0001S6",
          ueType: "U.E.D",
          moyenne: 12.0,
          coefficient: 2.0,
          credit: 3.0,
          creditObtenu: 3.0,
          creditAcquis: 3.0,
          ueNatureLcFr: "U.E.D",
          ueNatureLcAr: "و.ت.اك",
          ueNatureCode: "U.E.D",
          bilanMcs: [
            {
              id: 461894255,
              bilanUeId: 228456974,
              bilanSessionId: 81545139,
              rattachementMcId: 517337,
              mcLibelleFr: "Drogues et société",
              mcLibelleAr: "المخدرات و المجتمع",
              mcCode: "I00D0001S6008",
              coefficient: 1.0,
              credit: 1.0,
              creditObtenu: 1.0,
              moyenneGenerale: 11.0,
            },
            {
              id: 461894251,
              bilanUeId: 228456974,
              bilanSessionId: 81545139,
              rattachementMcId: 517343,
              mcLibelleFr: "Marketing et publicité",
              mcLibelleAr: "التسويق و الاشهار",
              mcCode: "I00D0001S6007",
              coefficient: 1.0,
              credit: 2.0,
              creditObtenu: 2.0,
              moyenneGenerale: 13.0,
            },
          ],
          ueNoteObtention: 10.0,
          ueAcquis: false,
          totalAquis: 0,
          effectif: 0,
        },
        {
          id: 228456975,
          bilanSessionId: 81545139,
          repartitionUeId: 287290,
          ueLibelleFr: "I00T00001S6",
          ueCode: "I00T0001S6",
          ueType: "U.E.T",
          moyenne: 17.0,
          coefficient: 1.0,
          credit: 1.0,
          creditObtenu: 1.0,
          creditAcquis: 1.0,
          ueNatureLcFr: "U.E.T",
          ueNatureLcAr: "و.ت.ع",
          ueNatureCode: "U.E.T",
          bilanMcs: [
            {
              id: 461894253,
              bilanUeId: 228456975,
              bilanSessionId: 81545139,
              rattachementMcId: 517332,
              mcLibelleFr: "Langue étrangère",
              mcLibelleAr: "اللغة الأجنبية",
              mcCode: "I00T0001S6009",
              coefficient: 1.0,
              credit: 1.0,
              creditObtenu: 1.0,
              moyenneGenerale: 17.0,
            },
          ],
          ueNoteObtention: 10.0,
          ueAcquis: false,
          totalAquis: 0,
          effectif: 0,
        },
      ],
      moyenne: 13.95,
      moyenneSn: 13.95,
      credit: 0.0,
      creditObtenu: 30.0,
      creditAcquis: 30.0,
      annuel: false,
      cycleLibelleLongLt: "Licence",
      niveauCode: "L3",
      niveauRang: 3,
      niveauLibelleLongLt: "Licence 3ème Année",
      niveauLibelleLongAr: "ليسانس سنة ثالثة",
      totalAquis: 0,
      effectif: 0,
      coefficient: 16.0,
    },
    {
      id: 78551554,
      type: 1,
      periodeId: 14,
      periodeLibelleFr: "Semestre 5",
      periodeLibelleAr: "السداسي الخامس",
      bilanUes: [
        {
          id: 225777198,
          bilanSessionId: 78551554,
          repartitionUeId: 287283,
          ueLibelleFr: "I00F00001S5",
          ueCode: "I00F0001S5",
          ueType: "U.E.F",
          moyenne: 12.94,
          coefficient: 9.0,
          credit: 20.0,
          creditObtenu: 20.0,
          creditAcquis: 20.0,
          ueNatureLcFr: "U.E.F",
          ueNatureLcAr: "و.ت.أ",
          ueNatureCode: "U.E.F",
          bilanMcs: [
            {
              id: 456432133,
              bilanUeId: 225777198,
              bilanSessionId: 78551554,
              rattachementMcId: 517334,
              mcLibelleFr: "Etudes d'audience médiatique",
              mcLibelleAr: "دراسات جمهور وسائل الاعلام",
              mcCode: "I00F0001S5003",
              coefficient: 2.0,
              credit: 5.0,
              creditObtenu: 5.0,
              moyenneGenerale: 13.0,
            },
            {
              id: 456432136,
              bilanUeId: 225777198,
              bilanSessionId: 78551554,
              rattachementMcId: 517336,
              mcLibelleFr: "Stratégies de communication",
              mcLibelleAr: "استراتيجيات الاتصال ",
              mcCode: "I00F0001S5004",
              coefficient: 2.0,
              credit: 5.0,
              creditObtenu: 5.0,
              moyenneGenerale: 13.0,
            },
            {
              id: 456432138,
              bilanUeId: 225777198,
              bilanSessionId: 78551554,
              rattachementMcId: 517348,
              mcLibelleFr: "Communication organisationnelle",
              mcLibelleAr: "الاتصال التنظيمي",
              mcCode: "I00F0001S5001",
              coefficient: 3.0,
              credit: 5.0,
              creditObtenu: 5.0,
              moyenneGenerale: 13.0,
            },
            {
              id: 456432131,
              bilanUeId: 225777198,
              bilanSessionId: 78551554,
              rattachementMcId: 517349,
              mcLibelleFr: "Théories des médias et de la communication",
              mcLibelleAr: "نظريات الاعلام و الاتصال",
              mcCode: "I00F0001S5002",
              coefficient: 2.0,
              credit: 5.0,
              creditObtenu: 5.0,
              moyenneGenerale: 12.75,
            },
          ],
          ueNoteObtention: 10.0,
          ueAcquis: false,
          totalAquis: 0,
          effectif: 0,
        },
        {
          id: 225777199,
          bilanSessionId: 78551554,
          repartitionUeId: 287284,
          ueLibelleFr: "I00M00001S5",
          ueCode: "I00M0001S5",
          ueType: "U.E.M",
          moyenne: 14.25,
          coefficient: 4.0,
          credit: 6.0,
          creditObtenu: 6.0,
          creditAcquis: 6.0,
          ueNatureLcFr: "U.E.M",
          ueNatureLcAr: "و.ت.م",
          ueNatureCode: "U.E.M",
          bilanMcs: [
            {
              id: 456432134,
              bilanUeId: 225777199,
              bilanSessionId: 78551554,
              rattachementMcId: 517342,
              mcLibelleFr: "Forum méthodologique 1",
              mcLibelleAr: "ملتقى المنهجية",
              mcCode: "I00M0001S5005",
              coefficient: 2.0,
              credit: 3.0,
              creditObtenu: 3.0,
              moyenneGenerale: 14.5,
            },
            {
              id: 456432132,
              bilanUeId: 225777199,
              bilanSessionId: 78551554,
              rattachementMcId: 517347,
              mcLibelleFr:
                "Formation pour compléter un mémoire de fin d'études ou une étude de terrain spécialisée",
              mcLibelleAr: "التمرين على انجاز مذكرة تخرج أو تربص ميداني متخصص",
              mcCode: "I00M0001S5006",
              coefficient: 2.0,
              credit: 3.0,
              creditObtenu: 3.0,
              moyenneGenerale: 14.0,
            },
          ],
          ueNoteObtention: 10.0,
          ueAcquis: false,
          totalAquis: 0,
          effectif: 0,
        },
        {
          id: 225777200,
          bilanSessionId: 78551554,
          repartitionUeId: 287285,
          ueLibelleFr: "I00D00001S5",
          ueCode: "I00D0001S5",
          ueType: "U.E.D",
          moyenne: 12.25,
          coefficient: 2.0,
          credit: 3.0,
          creditObtenu: 3.0,
          creditAcquis: 3.0,
          ueNatureLcFr: "U.E.D",
          ueNatureLcAr: "و.ت.اك",
          ueNatureCode: "U.E.D",
          bilanMcs: [
            {
              id: 456432141,
              bilanUeId: 225777200,
              bilanSessionId: 78551554,
              rattachementMcId: 517338,
              mcLibelleFr: "Gouvernance et éthique",
              mcLibelleAr: "الحوكمة و أخلاقيات المهنة",
              mcCode: "I00D0001S5008",
              coefficient: 1.0,
              credit: 1.0,
              creditObtenu: 1.0,
              moyenneGenerale: 14.5,
            },
            {
              id: 456432135,
              bilanUeId: 225777200,
              bilanSessionId: 78551554,
              rattachementMcId: 517346,
              mcLibelleFr: "Campagnes de communication publique",
              mcLibelleAr: "حملات الاتصال العمومي",
              mcCode: "I00D0001S5007",
              coefficient: 1.0,
              credit: 2.0,
              creditObtenu: 2.0,
              moyenneGenerale: 10.0,
            },
          ],
          ueNoteObtention: 10.0,
          ueAcquis: false,
          totalAquis: 0,
          effectif: 0,
        },
        {
          id: 225777201,
          bilanSessionId: 78551554,
          repartitionUeId: 287286,
          ueLibelleFr: "I00T00001S5",
          ueCode: "I00T0001S5",
          ueType: "U.E.T",
          moyenne: 17.0,
          coefficient: 1.0,
          credit: 1.0,
          creditObtenu: 1.0,
          creditAcquis: 1.0,
          ueNatureLcFr: "U.E.T",
          ueNatureLcAr: "و.ت.ع",
          ueNatureCode: "U.E.T",
          bilanMcs: [
            {
              id: 456432139,
              bilanUeId: 225777201,
              bilanSessionId: 78551554,
              rattachementMcId: 517341,
              mcLibelleFr: "Langue étrangère",
              mcLibelleAr: "اللغة الأجنبية",
              mcCode: "I00T0001S5009",
              coefficient: 1.0,
              credit: 1.0,
              creditObtenu: 1.0,
              moyenneGenerale: 17.0,
            },
          ],
          ueNoteObtention: 10.0,
          ueAcquis: false,
          totalAquis: 0,
          effectif: 0,
        },
      ],
      moyenne: 13.44,
      moyenneSn: 13.44,
      credit: 0.0,
      creditObtenu: 30.0,
      creditAcquis: 30.0,
      annuel: false,
      cycleLibelleLongLt: "Licence",
      niveauCode: "L3",
      niveauRang: 3,
      niveauLibelleLongLt: "Licence 3ème Année",
      niveauLibelleLongAr: "ليسانس سنة ثالثة",
      totalAquis: 0,
      effectif: 0,
      coefficient: 16.0,
    },
  ];
  return data.map((item: any, index: number) => (
    <Card key={index} className="w-full max-w-lg mx-auto">
      <CardHeader className="space-y-1">
        <CardTitle>Relevé de notes</CardTitle>
        <CardDescription>{""}</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="border border-dashed rounded-lg">
          <div className="grid grid-cols-2 border-b last:border-0 p-4">
            <div className="flex items-center gap-2">
              <div className="font-semibold">{item.niveauLibelleLongAr}</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="font-semibold">{item.periodeLibelleAr}</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="font-semibold">Niveau:</div>
              <div className="underline">{item.niveauCode}</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="font-semibold">Groupe pédagogique:</div>
              <div className="underline">A</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 items-start p-4 gap-4">
          <div className="grid grid-rows-2 gap-1">
            <div className="font-semibold">Moyenne générale:</div>
            <div className="font-semibold">Crédits obtenus:</div>
          </div>
          <div className="col-span-2 grid grid-rows-2 gap-1">
            <div className="underline">14.5/20</div>
            <div className="underline">30/30</div>
          </div>
        </div>
        <div className="grid grid-cols-4 items-start p-4 gap-4">
          <div className="grid grid-rows-2 gap-1">
            <div className="font-semibold">Moyenne: {item.moyenne}</div>
            <div className="font-semibold">Crédits: {item.credit}</div>
          </div>
          <div className="grid grid-rows-2 gap-1">
            <div className="font-semibold">Session: </div>
            <div className="font-semibold">Année:</div>
          </div>
          <div className="col-span-2 grid grid-rows-2 gap-1">
            <div className="underline">12.5/20</div>
            <div className="underline">60</div>
          </div>
          <div className="col-span-2 grid grid-rows-2 gap-1">
            <div className="underline">Normale</div>
            <div className="underline">2023-2024</div>
          </div>
        </div>

        <table className="w-full text-sm border-t border-l">
          <thead>
            <tr className="text-left font-semibold">
              <th className="px-4 py-2">Code UE</th>
              <th className="px-4 py-2">{"Intitulé de l'UE"}</th>
              <th className="px-4 py-2">Moyenne</th>
              <th className="px-4 py-2">Crédits</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t bg-gray-100 dark:bg-gray-800">
              <td className="px-4 py-2">UE1</td>
              <td className="px-4 py-2">Informatique</td>
              <td className="px-4 py-2">14.5</td>
              <td className="px-4 py-2">6</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">UE2</td>
              <td className="px-4 py-2">Mathématiques</td>
              <td className="px-4 py-2">13.5</td>
              <td className="px-4 py-2">6</td>
            </tr>
            <tr className="border-t bg-gray-100 dark:bg-gray-800">
              <td className="px-4 py-2">UE3</td>
              <td className="px-4 py-2">Langues</td>
              <td className="px-4 py-2">15.5</td>
              <td className="px-4 py-2">6</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2">UE4</td>
              <td className="px-4 py-2">Physique</td>
              <td className="px-4 py-2">12.5</td>
              <td className="px-4 py-2">6</td>
            </tr>
          </tbody>
        </table>
      </CardContent>
      <CardFooter className="flex justify-end p-3">
        <Button className="mr-2" variant="outline">
          Imprimer
        </Button>
        <Button>Enregistrer</Button>
      </CardFooter>
    </Card>
  ));
}
