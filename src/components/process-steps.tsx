import { processSteps } from "@/data/site";

export function ProcessSteps({ compact = false }: { compact?: boolean }) {
  return (
    <ol className={`process-list${compact ? " process-list--compact" : ""}`}>
      {processSteps.map((step, index) => (
        <li key={step.title}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <div><h3>{step.title}</h3><p>{step.text}</p></div>
        </li>
      ))}
    </ol>
  );
}
