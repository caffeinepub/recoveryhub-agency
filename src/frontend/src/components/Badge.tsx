const map: Record<string, string> = {
  Active: "bg-green-100 text-green-800",
  "On Duty": "bg-blue-100 text-blue-800",
  "Off Duty": "bg-gray-100 text-gray-700",
  Inactive: "bg-red-100 text-red-700",
  Approved: "bg-green-100 text-green-800",
  Pending: "bg-yellow-100 text-yellow-800",
  Rejected: "bg-red-100 text-red-700",
  Present: "bg-green-100 text-green-800",
  Absent: "bg-red-100 text-red-700",
  Late: "bg-orange-100 text-orange-800",
  Paid: "bg-green-100 text-green-800",
  Unpaid: "bg-yellow-100 text-yellow-800",
  Overdue: "bg-red-100 text-red-700",
  Open: "bg-blue-100 text-blue-800",
  "In Progress": "bg-purple-100 text-purple-800",
  Resolved: "bg-green-100 text-green-800",
  "In Storage": "bg-blue-100 text-blue-800",
  Released: "bg-green-100 text-green-800",
  Low: "bg-gray-100 text-gray-700",
  Medium: "bg-yellow-100 text-yellow-800",
  High: "bg-red-100 text-red-700",
};

export default function Badge({ status }: { status: string }) {
  const cls = map[status] ?? "bg-gray-100 text-gray-700";
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${cls}`}
    >
      {status}
    </span>
  );
}
