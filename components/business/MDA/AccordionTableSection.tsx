"use client";

import { useState } from "react";

interface AccordionTableSectionProps {
  title: string;
  tableCount?: number;
}

export default function AccordionTableSection({
  title,
  tableCount = 1,
}: AccordionTableSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const tables = Array.from({ length: tableCount }, (_, i) => (
    <div
      key={i}
      className="border rounded max-w-[800px] mx-auto overflow-hidden"
    >
      <button
        onClick={() => toggleAccordion(i)}
        className="w-full text-left p-4 font-semibold text-[15px] border-b bg-[#E2E2E2]"
      >
        Table Section {i + 1}
      </button>
      {openIndex === i && (
        <div className="p-4">
          <table className="w-full text-sm border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-3 py-2">Column 1</th>
                <th className="border px-3 py-2">Column 2</th>
                <th className="border px-3 py-2">Column 3</th>
                <th className="border px-3 py-2">Column 4</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-3 py-2">Data A1</td>
                <td className="border px-3 py-2">Data A2</td>
                <td className="border px-3 py-2">Data A3</td>
                <td className="border px-3 py-2">Data A4</td>
              </tr>
              <tr>
                <td className="border px-3 py-2">Data B1</td>
                <td className="border px-3 py-2">Data B2</td>
                <td className="border px-3 py-2">Data B3</td>
                <td className="border px-3 py-2">Data B4</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  ));

  return (
    <section className="space-y-6">
      <h2 className="text-[20px] text-center mb-[24px] mt-[80px]">
        {title}
      </h2>
      <div className="space-y-6">{tables}</div>
    </section>
  );
}
