type Props = { message?: string };
export default function EmptyState({ message = "No results found." }: Props) {
  return (
    <div className="col-span-full text-center py-16 text-[#4a6080]">
      <p className="text-lg">{message}</p>
    </div>
  );
}
