import type { TableSpec } from "@/types/content";
import { CASE_COLORS } from "@/ui/caseColors";

/** Grammar table with per-column case coloring (visuals mandate §4). */
export default function ContentTable({ table }: { table: TableSpec }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-left">
        {table.caption && (
          <caption className="meta pb-2.5 text-left text-[color:var(--muted)]">
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
                  className={`border-b border-[rgba(var(--ink-rgb),.16)] px-3 py-2 text-[13px] font-bold ${
                    cc ? CASE_COLORS[cc].text : "text-[color:var(--body2)]"
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
            <tr key={r}>
              {row.map((cell, c) => {
                const cc = table.colCase?.[c];
                return (
                  <td
                    key={c}
                    className={`border-b border-[rgba(var(--ink-rgb),.07)] px-3 py-2 text-[15px] ${
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
