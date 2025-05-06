import { Scroll, CheckCircle, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function QuestLog() {
  const quests = [
    { id: 1, name: "The Lost Artifact", status: "active", progress: "2/3", location: "Mystic Garden" },
    { id: 2, name: "Dragon's Treasure", status: "active", progress: "1/4", location: "Dragon's Peak" },
    { id: 3, name: "Ancient Runes", status: "completed", progress: "4/4", location: "Ancient Temple" },
    { id: 4, name: "Crystal Collection", status: "pending", progress: "0/5", location: "Crystal Cave" },
    { id: 5, name: "Forest Spirits", status: "active", progress: "3/6", location: "Enchanted Forest" },
  ]

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <Scroll className="h-5 w-5 text-amber-700" />
        <h3 className="font-medievalsharp text-lg font-bold text-amber-900">Quest Log</h3>
      </div>

      {quests.map((quest) => (
        <div
          key={quest.id}
          className={`
            p-3 rounded-lg border 
            ${
              quest.status === "completed"
                ? "bg-amber-100/50 border-amber-200"
                : quest.status === "active"
                  ? "bg-amber-50 border-amber-200"
                  : "bg-amber-50/50 border-amber-200/50"
            }
          `}
        >
          <div className="flex justify-between items-start mb-1">
            <h4 className="font-medievalsharp text-amber-900 font-medium">{quest.name}</h4>
            <Badge
              className={`
              ${
                quest.status === "completed"
                  ? "bg-green-100 text-green-800"
                  : quest.status === "active"
                    ? "bg-amber-100 text-amber-800"
                    : "bg-slate-100 text-slate-800"
              }
              text-xs
            `}
            >
              {quest.status === "completed" ? (
                <>
                  <CheckCircle className="mr-1 h-3 w-3" /> Complete
                </>
              ) : quest.status === "active" ? (
                <>
                  <Clock className="mr-1 h-3 w-3" /> In Progress
                </>
              ) : (
                <>
                  <Clock className="mr-1 h-3 w-3" /> Pending
                </>
              )}
            </Badge>
          </div>
          <div className="text-xs text-amber-800 mb-2">Location: {quest.location}</div>
          <div className="w-full bg-amber-200/50 rounded-full h-1.5">
            <div
              className="bg-amber-700 h-1.5 rounded-full"
              style={{
                width: `${(Number.parseInt(quest.progress.split("/")[0]) / Number.parseInt(quest.progress.split("/")[1])) * 100}%`,
              }}
            ></div>
          </div>
          <div className="text-xs text-right mt-1 text-amber-700">{quest.progress} objectives</div>
        </div>
      ))}
    </div>
  )
}
