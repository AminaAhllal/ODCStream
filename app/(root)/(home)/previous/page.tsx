import CallList from "@/components/CallList";

const PreviousPage = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold text-black">Appels Précedents</h1>

      <CallList type="Terminé" />
    </section>
  );
};

export default PreviousPage;
