import type { TableSpec } from "@/types/content";
import { CASE_COLORS } from "@/ui/caseColors";

/** Grammar table with per-column case coloring (visuals mandate §4). */
export default function ContentTable({ table }: { table: TableSpec }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-left">
        {table.caption && (
          <caption className="pb-2 text-left text-sm font-semibold text-[#8B93A1]">
            {table.caption}
          </caption>
        )}
        <thead>
          <tr>
            {table.headers.map((h, i) => {
              const cc = table.colCase?.[i];
              return (
                <th
                  key={i}
                  className={`border-b-2 border-[rgba(15,23,42,.14)] px-3 py-2 text-sm font-bold ${
                    cc ? CASE_COLORS[cc].text : "text-[#5B6472]"
                  }`}
                >
                  {h}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, r) => (
            <tr key={r} className="odd:bg-[rgba(15,23,42,.03)]">
              {row.map((cell, c) => {
                const cc = table.colCase?.[c];
                return (
                  <td
                    key={c}
                    className={`border-b border-[rgba(15,23,42,.09)] px-3 py-2 ${
                      cc ? `font-semibold ${CASE_COLORS[cc].text}` : ""
                    }`}
                  >
                    {cell}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
