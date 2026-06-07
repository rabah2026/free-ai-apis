import { ApiProvider } from "@/data/apis";
import ApiCard from "./ApiCard";
import EmptyState from "./EmptyState";

type Props = { apis: ApiProvider[]; useCase: string };
export default function RecommendationList({ apis, useCase }: Props) {
  if (apis.length === 0) {
    return <EmptyState message={`No APIs found for "${useCase}". Try another use case.`} />;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {apis.map((api) => (
        <ApiCard key={api.id} api={api} />
      ))}
    </div>
  );
}
